
import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Custom component to fetch and display services
const FetchServices = ({ triggerNextStep }) => {
    const [services, setServices] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}services_list`);
                console.log('API Response:', response.data);

                if (response.data.success) {
                    //const servicesNames = response.data.data.map(service => service.associations_and_partners__Name).join(', ');
                    //setServices(servicesNames);
                    const servicesNames = response.data.data.map(service => service.associations_and_partners__Name);
                    setServices(servicesNames);
                } else {
                    setServices('No services available.');
                }
            } catch (error) {
                console.error('Error fetching services:', error);
                setServices('Error fetching services.');
            } finally {
                setLoading(false);
                triggerNextStep(); 
            }
        };

        fetchServices();
    }, [triggerNextStep]);

    return (
        //<div>
        //    {loading ? 'Loading services...' : `Here are our services: ${services}`}
        //</div>
        <div>
            {loading ? 'Loading services...' : (
                <div>
                    Here are our services:
                    <ul>
                        {services.map((service, index) => (
                            //<li key={index}>{service}</li>
                            <li key={index}>
                                <a href={`/#/services/${encodeURIComponent(service.replace(/ /g, '_'))}`}>{service}</a>
                            </li>
                           
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const Chatbot = () => {
    const steps = [
        {
            id: '0',
            message: 'Welcome to Testfabrics!',
            trigger: '1',
        },
        {
            id: '1',
            message: 'Please enter your name!',
            trigger: '2',
        },
        {
            id: '2',
            user: true,
            trigger: '3',
        },
        {
            id: '3',
            message: 'Hi {previousValue}, how may I help you?',
            trigger: '4',
        },
        {
            id: '4',
            options: [
                { value: "Products", label: "Products", trigger: 'Products' },
                { value: "Services", label: "Services", trigger: 'Services' },
            ],
        },
        {
            id: 'Products',
            message: 'These are our products.',
            end: true,
        },
        {
            id: 'Services',
            component: <FetchServices />,
            waitAction: true,
            trigger: '5',
        },
        {
            id: '5',
            message: 'Is there anything else I can help you with?',
            end: true,
        },
    ];

    return (
        <div>
            <ChatBot
                steps={steps}
                floating={true}
            />
        </div>
    );
}

export default Chatbot;


//import React, { useState, useEffect } from 'react';
//import ChatBot from 'react-simple-chatbot';
//import axios from 'axios';
//import { HashRouter as Router, Route, Link } from 'react-router-dom';

//const FetchServices = ({ triggerNextStep }) => {
//    const [services, setServices] = useState([]);
//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//        const fetchServices = async () => {
//            try {
//                const response = await axios.get('${process.env.REACT_APP_API_URL}services_list');
//                console.log('API Response:', response.data);

//                if (response.data.success) {
//                    const servicesNames = response.data.data.map(service => service.associations_and_partners__Name);
//                    setServices(servicesNames);
//                } else {
//                    setServices(['No services available.']);
//                }
//            } catch (error) {
//                console.error('Error fetching services:', error);
//                setServices(['Error fetching services.']);
//            } finally {
//                setLoading(false);
//                triggerNextStep(); // Trigger next step after fetching the data
//            }
//        };

//        fetchServices();
//    }, [triggerNextStep]);

//    return (
//        <div>
//            {loading ? 'Loading services...' : (
//                <div>
//                    Here are our services:
//                    <ul>
//                        {services.map((service, index) => (
//                            <li key={index}>
//                                <Link to={`/services/${encodeURIComponent(service)}`}>{service}</Link>
//                            </li>
//                        ))}
//                    </ul>
//                </div>
//            )}
//        </div>
//    );
//};

//const Chatbot = () => {
//    const steps = [
//        {
//            id: '0',
//            message: 'Welcome to Testfabrics!',
//            trigger: '1',
//        },
//        {
//            id: '1',
//            message: 'Please enter your name!',
//            trigger: '2',
//        },
//        {
//            id: '2',
//            user: true,
//            trigger: '3',
//        },
//        {
//            id: '3',
//            message: 'Hi {previousValue}, how may I help you?',
//            trigger: '4',
//        },
//        {
//            id: '4',
//            options: [
//                { value: "Products", label: "Products", trigger: 'Products' },
//                { value: "Services", label: "Services", trigger: 'Services' },
//            ],
//        },
//        {
//            id: 'Products',
//            message: 'These are our products.',
//            end: true,
//        },
//        {
//            id: 'Services',
//            component: <FetchServices />,
//            waitAction: true,
//            trigger: '5',
//        },
//        {
//            id: '5',
//            message: 'Is there anything else I can help you with?',
//            end: true,
//        },
//    ];

//    return (
//        <div>
//            <ChatBot
//                steps={steps}
//                floating={true}
//            />
//        </div>
//    );
//}

//export default Chatbot;



