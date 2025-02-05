import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Parser from 'html-react-parser';
import GoogleMapReact from 'google-map-react';

import { useApi } from '../../middleware/middleware';
import { useEffect, useState } from 'react';
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function EventsModel(props){
    // const { data, error, isLoading } = useApi('country_data', {country_id:parseInt(props?.countryid?.id)});
    const [data,setData] = useState([])

    return(
        <>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            // animation={true}
            fullscreen={'xxl-down'}
            style={{minHeight:"80%"}}
            >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                <div className='row'>
                    <div className='col-12' style={{color:"black"}}>
                        {/* <img  width="45" style={{marginRight:"5px"}} src={process.env.REACT_APP_IMAGE_URL +'map_images/'+suCrypt(props?.countryid?.id)+'.jpg'} /> */}
                        <h4><a href={props?.evenUrl}>{props?.data?.event}</a></h4>
                        <h6 style={{color:'gray'}}><a >{props?.data?.date}</a></h6>
                        <h6>{props?.data?.discroption}</h6>
 
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}