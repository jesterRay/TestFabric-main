import React, { useEffect, useState } from 'react';
import { Map, Marker, Overlay } from 'pigeon-maps';
import axios from 'axios';
import Footer3 from '../Footer3';
import Header3 from '../Header3';
import PageBanner from '../PageBanner';
import { useApi } from '../../middleware/middleware';
import { Link, useLocation } from "react-router-dom";


const Map2 = () => {
  const [agents, setAgents] = useState([]);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu
  const [hoveredAgent, setHoveredAgent] = useState(null);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [zoom, setZoom] = useState(2.9);
  const location = useLocation();

  const headOffice = {
    name: 'Head Office',
    address: 'US',
    phone: '(1) 570 603 0432',
    email: 'info@testfabrics.com',
  };

  const {
    data: location2,
   error: locationError,
    isLoading: locationLoading,
  } = useApi("get_ip_details", {});

  const isActiveLink = (path) => location.pathname === path;


  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get('https://testfabrics.com/apis/index.php/map_agents_list');
        if (response.data.success) {
          setAgents(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching agent data:', error);
      }
    };

    fetchAgents();
  }, []);

  const handleZoomIn = () => setZoom(zoom + 1);
  const handleZoomOut = () => setZoom(zoom - 1);

  const handleMarkerClick = (agent) => {
    setSelectedAgent(agent); // Keep showing this agent when clicked
  };

  const handleMouseOut = (agent) => {
    if (selectedAgent !== agent) {
      setHoveredAgent(null); // Only hide if it's not the clicked agent
    }
  };

  return (
    <>
    {/* <Header3/> */}
    {/* <PageBanner currentPage='International Distribution'/> */}

    <div style={containerStyle}>
      <Map
        zoom={zoom}
        onZoomChange={setZoom}
        touchEvents={false}
        animate={true}
        metaWheelZoom={false}
        twoFingerDrag={false}
        style={mapStyle}
      >
        {agents.map((agent) => (
          <Marker
            key={agent.agent__Email}
            anchor={[parseFloat(agent.agent__Latitude), parseFloat(agent.agent__Longitude)]}
            color="#E55D87" // Custom marker color
            onMouseOver={() => setHoveredAgent(agent)}
            onMouseOut={() => handleMouseOut(agent)}
            onClick={() => handleMarkerClick(agent)} // Handle marker click
          />
        ))}

        {hoveredAgent && (
          <Overlay anchor={[parseFloat(hoveredAgent.agent__Latitude), parseFloat(hoveredAgent.agent__Longitude)]}>
            <div style={infoBoxStyle}>
              {/* Flag image with updated path */}
              <img
                src={`https://testfabrics.com/apis/country_flags/${hoveredAgent.agent__Flag}`} // Use the full URL for flag images
                alt={`${hoveredAgent.agent__Name} Flag`}
                style={flagStyle} // Flag styling
              />
              <h3 style={agentNameStyle}>{hoveredAgent.agent__Name}</h3>
              <p style={agentInfoStyle}><strong>Email:</strong> {hoveredAgent.agent__Email}</p>
              <p style={agentInfoStyle}><strong>Address:</strong> {hoveredAgent.agent__Address}</p>
              <p style={agentInfoStyle}><strong>Phone:</strong> {hoveredAgent.agent__Phone}</p>
              <p style={agentInfoStyle}><strong>Fax:</strong> {hoveredAgent.agent__Fax}</p>
            </div>
          </Overlay>
        )}

        <div style={infoSectionStyle}>
          <h1 style={headingStyle}>International Outreach</h1>
          <div style={headOfficeContainer}>
            <div style={headOfficeStyle}>
              <h3 style={headOfficeHeadingStyle}>Head Office</h3>
              <p>{headOffice.address}</p>
            </div>
            <div style={verticalLineStyle}></div>
            <div style={totalAgentsStyle}>
              <h3>Total Agents</h3>
              <p>{agents.length}</p>
            </div>
          </div>

          <li
  // onMouseEnter={() => setHoveredMenu("contact")}
  // onMouseLeave={() => setHoveredMenu(null)}
  // onClick={() => setActiveMenu("contact")}
  
>
            <Link
                    to={`/choose-region/${location2?.country}`}
                    
                    style={{
                      display: "inline-block",
                      padding: "10px 50px",
                      backgroundColor: "#E25C85", // Attractive blue color for the button
                      color: "#fff",
                      borderRadius: "25px", // Rounded corners for a button effect
                      textDecoration: "none",
                      fontWeight: "bold",
                      fontSize: "16px",
                      
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth transitions
                      transform: hoveredMenu === "contact" ? "scale(1.05)" : "scale(1)", // Slightly enlarge on hover
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0056b3"; // Darker shade on hover
                    }}
                    onMouseLeave={(e) => {
                      // e.currentTarget.style.backgroundColor = "#007BFF"; // Restore original color
                    }}
              >
              Contact Us
            </Link>
</li>


        </div>

        <div style={zoomControlContainer}>
          <button style={zoomButtonStyle} onClick={handleZoomIn}>+</button>
          <button style={zoomButtonStyle} onClick={handleZoomOut}>-</button>
        </div>
      </Map>
    </div>
    {/* <Footer3/> */}
    </>
  );
};

// Custom styles
const containerStyle = {
  height: '85vh',
  width: '117%', // Full viewport width
  position: 'relative',
  marginRight: '20px',
  left:'0px',
  fontFamily: 'Arial, sans-serif',
  marginTop: '15px',
  backgroundColor: '#E55D87',
};

const mapStyle = {
  height: '80%',
  width: '100%',
  filter: 'contrast(0.85)',
};

const infoSectionStyle = {
  position: 'absolute',
  top: '170px', // Position it near the top of the map
  left: '27px', // Align it to the left
  backgroundColor: '#AAD3DF', // Semi-transparent background
  padding: '15px',
  borderRadius: '8px',
  // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  zIndex: 2,
  width: '300px', // Fixed width for the info section
};


const headingStyle = {
  fontSize: '27px',
  marginBottom: '10px',
  color: '#333',
};

const headOfficeContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const headOfficeStyle = {
  textAlign: 'left',
};

const headOfficeHeadingStyle = {
  fontSize: '18px',
  marginBottom: '5px',
  color: '#333',
};

const totalAgentsStyle = {
  textAlign: 'left',
  marginLeft: '10px',
};

const verticalLineStyle = {
  width: '2px',
  backgroundColor: '#E55D87',
  height: '40px', // Height of the vertical line
  margin: '0 10px',
};

const contactButtonStyle = {
  backgroundColor: '#E55D87',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '14px',
  width: '100%',
  marginTop: '10px', // Space between the line and button
};

const infoBoxStyle = {
  backgroundColor: '#CFDEF3',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  maxWidth: '450px',
  fontSize: '14px',
  color: '#333',
  position: 'relative', // Enable positioning of child elements
  transform: 'translateY(-15px)',
  transition: 'transform 0.2s ease, opacity 0.2s ease',
  opacity: 0.95,
};

const flagStyle = {
  position: 'absolute',
  top: '25px', // Distance from the top
  right: '10px', // Distance from the right
  width: '50px', // Adjust the size of the flag
  height: 'auto', // Maintain aspect ratio
};

const agentNameStyle = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#2c3e50',
};

const agentInfoStyle = {
  marginBottom: '5px',
  color: '#555',
};

const zoomControlContainer = {
  position: 'absolute',
  bottom: '10px',
  display: 'flex',
  flexDirection: 'column',
};

const zoomButtonStyle = {
  backgroundColor: 'rgba(242, 233, 185, 0.69)',
  border: '1px solid #ccc',
  borderRadius: '50%',
  padding: '10px',
  fontSize: '18px',
  marginBottom: '5px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default Map2;
