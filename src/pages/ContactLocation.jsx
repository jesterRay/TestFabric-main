import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header3 from "../components/Header3";
import Footer3 from "../components/Footer3";
function ContactLocation() {
  const { country } = useParams();
  const [agentData, setAgentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}agents_list?country_name=${country}`)
      .then((response) => response.json())
      .then((data) => {
        setAgentData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the agent data:", error);
        setLoading(false);
      });
  }, [country]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!agentData.length) {
    return <p>No agent data available</p>;
  }

  return (
    <>
      <Header3 />
      <div style={{ padding: "1rem 2rem" }}>
        <h1 style={{ textAlign: "center", padding: "1rem" }}>{country}</h1>
        {agentData.map((agent, index) => (
          <div key={index} style={styles.agentContainer}>
            <div style={styles.agentInfo}>
    <h2 style={styles.agentName}>{agent.agent__Name}</h2>
    <p style={styles.agentDetail}>
        <strong>Email:</strong> {agent.agent__Email}
    </p>
    <p style={styles.agentDetail}>
        <strong>Address:</strong>{" "}
        <b>
            <span
                dangerouslySetInnerHTML={{ __html: agent.agent__Address }}
            />
        </b>
    </p>
    <p style={styles.agentDetail}>
        <strong>Phone:</strong> {agent.agent__Phone}
    </p>
</div>

            <div style={styles.mapContainer}>
              <iframe
                id={`iframeId-${index}`}
                height="300px"
                 width="500%"
                style={{
                  border: "0",
                  display: "block",
                  marginLeft: "-70px", // Adjust this value as needed to move left
                }}
                src={`https://maps.google.com/maps?q=${agent.agent__Latitude},${agent.agent__Longitude}&hl=es;&output=embed`}
                title={`Map for ${agent.agent__Name}`}
              ></iframe>
            </div>
          </div>
        ))}
      </div>
      <Footer3 />
    </>
  );
}

const styles = {
  agentContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  agentInfo: {
    flex: "1",
    padding: "10px",
    minWidth: "300px",
  },
  mapContainer: {
    flex: "1",
    padding: "10px",
    minWidth: "600px",
  },
  "@media (max-width: 768px)": {
    agentContainer: {
      flexDirection: "column",
    },
  },
};

export default ContactLocation;
