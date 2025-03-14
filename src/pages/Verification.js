import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs'; // For URL encoding
import { FaCheckCircle, FaTimesCircle, FaCircle } from 'react-icons/fa'; // Icons
import image from '../assets/img/image.jpg';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

function Verification() {
    const [serialNumber, setSerialNumber] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [cookieChoice, setCookieChoice] = useState(null); // For cookie acceptance or rejection

    // Check if cookie is accepted or rejected on component mount
    useEffect(() => {
        const choice = localStorage.getItem('cookieChoice');
        if (choice) {
            setCookieChoice(choice);
        }
    }, []);

    const handleChange = (e) => {
        setSerialNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResponseMessage('');
        setError('');

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}tpvs_search`, qs.stringify({
                search: serialNumber,
            }), {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });

            // Log the entire response object for debugging
            console.log('API Response:', response);

            const { message } = response.data;

            // Log the message for debugging
            console.log('Response Message:', message);

            // Handle response based on the message
            if (message.includes('Record updated and data inserted successfully')) {
                setResponseMessage({ text: message, type: 'success' });
            } else if (message.includes('Already Verified')) {
                setResponseMessage({ text: message, type: 'verified' });
            } else if (message.includes('No Record Found')) {
                setResponseMessage({ text: message, type: 'error' });
            } else {
                setResponseMessage({ text: 'Unknown response', type: 'error' });
            }
        } catch (err) {
            console.error('Error:', err); // Debugging: log the error
            setError('Error submitting form. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getMessageStyle = (type) => {
        switch (type) {
            case 'success':
                return { color: 'green' };
            case 'verified':
                return { color: 'blue' };
            case 'error':
                return { color: 'red' };
            default:
                return {};
        }
    };

    const getMessageIcon = (type) => {
        switch (type) {
            case 'success':
                return <FaCheckCircle style={{ marginRight: '10px', color: 'green' }} />;
            case 'verified':
                return <FaCircle style={{ marginRight: '10px', color: 'blue' }} />;
            case 'error':
                return <FaTimesCircle style={{ marginRight: '10px', color: 'red' }} />;
            default:
                return null;
        }
    };

    // Handle cookie acceptance
    const handleAcceptCookie = () => {
        localStorage.setItem('cookieChoice', 'accepted');
        setCookieChoice('accepted');
    };

    // Handle cookie rejection
    

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh',
        padding: '20px',
    };

    const imageStyle = {
        maxWidth: '100%',
        height: 'auto',
        marginBottom: '20px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const inputStyle = {
        padding: '10px',
        margin: '10px 0',
        width: '300px',
        border: '1px solid #ccc',
        borderRadius: '4px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        color: '#fff',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const cookieBarStyle = {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f8f9fa',
        padding: '10px',
        textAlign: 'center',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    };

    const cookieButtonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginLeft: '10px',
    };

    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: PRODUCT VERIFICATION`}</title>
            </Helmet>
            <Header3 />
            <div style={containerStyle}>
                <h2>Welcome to Testfabrics Product Verification System</h2> {/* Updated message */}
                <img src={image} alt="Image not Found" style={imageStyle} />

                <div className="content" style={formStyle}>
                    <p>To Validate your Testfabrics product please enter your Serial Number below:</p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="serialNumber"
                            name="serialNumber"
                            placeholder="Enter Serial Number"
                            value={serialNumber}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                        <br />
                        <button type="submit" style={buttonStyle} disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>

                    {responseMessage && (
                        <h3 style={{ marginTop: '20px', ...getMessageStyle(responseMessage.type) }}>
                            {getMessageIcon(responseMessage.type)}
                            {responseMessage.text}
                        </h3>
                    )}
                    {error && <p style={{ marginTop: '20px', color: 'red' }}>{error}</p>}
                </div>
            </div>

            {/* Cookie policy bar */}
            

            <Footer3 />
        </>
    );
}

export default Verification;
