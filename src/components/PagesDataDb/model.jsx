import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Parser from 'html-react-parser';
import GoogleMapReact from 'google-map-react';

import { useApi } from '../../middleware/middleware';
import { useEffect, useState } from 'react';
import axios from 'axios';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function CountryDetailModel(props){
    // const { data, error, isLoading } = useApi('country_data', {country_id:parseInt(props?.countryid?.id)});
    const [data,setData] = useState([])
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    useEffect(()=>{
        axios.get(process.env.REACT_APP_API_URL +'country_data', {
            params: {
                country_id: parseInt(props?.countryid?.id),
            },} )
          .then((response) => {setData(response.data)});
    })
    function suCrypt(id) {
        // console.log("countryyyy code : ",btoa(btoa(id)))
        return btoa(btoa(id));
    }
    return(
        <>
            <Modal
            {...props}
            size="xl"
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
                    <div className='col-6' style={{color:"black"}}>
                        <img  width="45" style={{marginRight:"5px"}} src={process.env.REACT_APP_IMAGE_URL +'map_images/'+suCrypt(props?.countryid?.id)+'.jpg'} />
                        <h4>{props?.countryid?.name}</h4>
                        <br/>
                        <h5>{data?.[0]?.agent__Name}</h5>
                        <br/>
                        <h6>{data?.[0]?.agent__Address && Parser(data?.[0]?.agent__Address)}</h6>
                        <br/>
                        <h6><b>Phone:</b> {data?.[0]?.agent__Phone}</h6>
                        <h6><b>Fax:</b> {data?.[0]?.agent__Fax}</h6>
                        <h6 style={{fontSize:"14px"}}><b>Email:</b> {data?.[0]?.agent__Phone}</h6>
                    </div>
                    <div className='col-6' >
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}