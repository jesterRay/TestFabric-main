import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Parser from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './ModalSection.css'

export default function CountryDetailModel(props) {
    const [data, setData] = useState([]);
    const [mapSrc, setMapSrc] = useState("");

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + 'country_data', {
            params: {
                country_id: (props?.countryid?.id),
            },
        })
            .then((response) => {
                setData(response.data.data);

                // Dynamically update map URL
                const country = response.data.data?.[0];
                if (country) {
                    const lat = country.latitude; // Replace with actual field name
                    const lng = country.longitude; // Replace with actual field name
                    setMapSrc(`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11984.163007730771!2d${lng}!3d${lat}!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c51f349d0b6511%3A0x4b36bbaa7556183c!2sTestfabrics%20Inc!5e0!3m2!1sen!2s!4v1699102643709!5m2!1sen!2s`);
                }
            });
    }, [props?.countryid?.id]);

    function suCrypt(id) {
        return btoa(btoa(id));
    }

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            fullscreen={'xxl-down'}
            className="custom-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props?.countryid?.name} - Details
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className='row'>
                    {/* Left Section: Country Information */}
                    <div className='col-4' style={{ color: "#333" }}>
                        <div className="country-details">
                            <img 
                                width="60" 
                                style={{ marginBottom: "10px", borderRadius: "10px" }} 
                                src={process.env.REACT_APP_IMAGE_URL + 'map_images/' + suCrypt(props?.countryid?.id) + '.jpg'} 
                                alt={props?.countryid?.name}
                            />
                            <h4 style={{ fontWeight: "bold" }}>{props?.countryid?.name}</h4>
                            <p style={{ fontSize: "18px", color: "#666" }}>{data?.[0]?.agent__Name}</p>
                            <div style={{ fontSize: "16px", color: "#777" }}>
                                <p>{data?.[0]?.agent__Address && Parser(data?.[0]?.agent__Address)}</p>
                                <p><b>Phone:</b> {data?.[0]?.agent__Phone}</p>
                                <p><b>Fax:</b> {data?.[0]?.agent__Fax}</p>
                                <p><b>Email:</b> {data?.[0]?.agent__Email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Map */}
                    <div className='col-8'>
                        <iframe
                            width="100%"
                            height="450"
                            frameBorder="0"
                            style={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                            src={mapSrc}
                            allowFullScreenbu
                            aria-hidden="false"
                            tabIndex="0"
                            title='map'
                        ></iframe>
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
                {/* <Button variant="primary">More Info</Button> */}
            </Modal.Footer>
        </Modal>
    );
}
