import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import Map2 from '../components/Map2/Map2';

function Location() {
    const { country } = useParams();
    const [agentData, setAgentData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data whenever the country changes
        setLoading(true);
        fetch(`${process.env.REACT_APP_API_URL}agents_list?country_name=${country}`)
            .then(response => response.json())
            .then(data => {
                setAgentData(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching the agent data:', error);
                setLoading(false);
            });
    }, [country]);

    if (loading) {
        return <p></p>; // Add simple loading indicator
    }

    if (!agentData.length) {
        return <p>No agent data available for {country}</p>;
    }

    return (
        <>
            <Header3 />
            <div style={styles.container}>
                <h1 style={styles.header}>{country}</h1>
                {agentData.map((agent, index) => (
                    <div key={index} style={styles.agentCard}>
                        <div style={styles.agentInfo}>
                            <h2 style={styles.agentName}>{agent.agent__Name}</h2>
                            <p><strong>Email:</strong> <a href={`mailto:${agent.agent__Email}`} style={styles.emailLink}>{agent.agent__Email}</a></p>
                            <p><strong>Address:</strong> <span dangerouslySetInnerHTML={{ __html: agent.agent__Address }} style={styles.address}/></p>
                            <p><strong>Phone:</strong> <a href={`tel:${agent.agent__Phone}`} style={styles.emailLink}>{agent.agent__Phone}</a></p>
                        </div>
                        <div style={styles.mapContainer}>
                            <iframe
                                id={`iframeId-${index}`}
                                height="350px"
                                width="100%"
                                style={styles.iframe}
                                src={`https://maps.google.com/maps?q=${agent.agent__Latitude},${agent.agent__Longitude}&hl=es;&output=embed`}
                                title={`Map for ${agent.agent__Name}`}
                                key={`${agent.agent__Latitude}-${agent.agent__Longitude}`}
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
            <Map2/>
            <Footer3 />
        </>
    );
}

const styles = {
    container: {
        padding: '2rem',
        // backgroundColor: '#f9f9f9', // Light background for better contrast
        maxWidth: '1200px',
        margin: '0 auto',
    },
    header: {
        textAlign: 'left',
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '2rem',
        fontFamily: "'Roboto', sans-serif",
        textTransform: 'capitalize',
    },
    agentCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        // boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for card
        borderRadius: '8px',
        marginBottom: '20px',
        padding: '1.5rem',
        transition: 'transform 0.3s ease',
        flexWrap: 'wrap', // Makes sure the layout wraps on smaller screens
    },
    agentCardHover: {
        transform: 'scale(1.02)', // Slight scale effect on hover
    },
    agentInfo: {
        flex: '1',
        paddingRight: '20px',
        minWidth: '280px',
    },
    agentName: {
        fontSize: '1.8rem',
        color: '#2c3e50',
        marginBottom: '10px',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '600',
    },
    emailLink: {
        color: '#3498db',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
    },
    emailLinkHover: {
        color: '#2980b9',
    },
    address: {
        color: '#555',
        whiteSpace: 'pre-line',
    },
    phoneLink: {
        color: '#2ecc71',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
    },
    phoneLinkHover: {
        color: '#27ae60',
    },
    mapContainer: {
        flex: '1',
        minWidth: '300px',
    },
    iframe: {
        border: '0',
        borderRadius: '8px', // Rounded corners for iframe
    },
    '@media (max-width: 768px)': {
        agentCard: {
            flexDirection: 'column',
            textAlign: 'center', // Centers content on smaller screens
        },
        agentInfo: {
            paddingRight: '0',
            marginBottom: '20px',
        },
        mapContainer: {
            marginTop: '20px',
        },
    },
};

export default Location;
