import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CarrerCard.css'
import { useHistory } from 'react-router-dom';

function CarrerCard() {
    
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [expanded, setExpanded] = useState({}); // Track which descriptions are expanded
    const history = useHistory();
    // Fetch the careers data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}careers`);
                if (response.data.success) {
                    setData(response.data.data);
                } else {
                    setError('Failed to fetch data');
                }
            } catch (error) {
                setError('An error occurred while fetching data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);


    // Toggle the expanded state for a specific career description
    const toggleExpanded = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id],
        }));
    };

    const handleNavigation = (career) => {
        history.push({ 
            pathname: '/career-detail',
            state: {career}
        });
    }

    if (isLoading) return <div></div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section className="career-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-left">
                            <span>Careers</span>
                            
                            <h1>Career Insights</h1>
                        </div>
                    </div>
                </div>

                {/* Full Width Horizontal Career Cards */}
                <div className="career-cards-wrapper">
                    {data.map((career) => (
                        <div key={career.career__ID} onClick={() => handleNavigation(career)} 
                            className="career-card" style={{cursor: 'pointer'}}>
                            <img 
                                src={career.career_image} 
                                alt={career.career__Name} 
                                className="career-card-image" 
                            />
                            <div className="career-card-content">
                                <h2 className="career-card-title">{career.career__Name}</h2>
                                <h3 className="career-card-abbreviation">{career.career__Abbriviation}</h3>
                                <p className="career-card-description">
                                    {expanded[career.career__ID]
                                        ? career.career__Description
                                        : `${career.career__Description.slice(0, 150)}... `}
                                    <span 
                                        className="read-more" 
                                        onClick={() => toggleExpanded(career.career__ID)}
                                    >
                                        {expanded[career.career__ID] ? ' Show Less' : ' more'}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CarrerCard;
