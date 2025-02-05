// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import Parser from 'html-react-parser';
// import GoogleMapReact from 'google-map-react';
import ServicesTwoCard from './SevicesTwoCard';
import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import AllSearch from './allSearch';

// import { useApi } from '../../middleware/middleware';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function EventsModel(props) {
    // const { data, error, isLoading } = useApi('country_data', {country_id:parseInt(props?.countryid?.id)});
    // const [data,setData] = useState([])

    return (
        <>
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                // animation={true}
                fullscreen={'xxl-down'}
                style={{ minHeight: "80%" }}
            >
                <Modal.Header closeButton closeLabel='' className="modal-close-button">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Testfabric Search
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-12' style={{ color: "black" }}>
                            {/* <img  width="45" style={{marginRight:"5px"}} src={process.env.REACT_APP_IMAGE_URL +'map_images/'+suCrypt(props?.countryid?.id)+'.jpg'} /> */}
                            {/* <h4><a href={props?.evenUrl}>{props?.data?.event}</a></h4>
                        <h5><a >{props?.data?.event}</a></h5>
                        <h6>{props?.data?.discroption}</h6> */}
                            <div style={{ marginTop: "1rem" }}>
                                {props?.data?.length == 0 ? <h4>No Products Found</h4> : <h4>{props?.title} ({props?.data?.length})</h4>}
                            </div>
                            <div className='row'>
                                {props?.searchType == 1 ? <AllSearch data={props?.data} search={props.search} onHide={props.onHide} /> : <>
                                    {props?.data?.slice(0, 16)?.map((data, index) => (

                                        <ServicesTwoCard
                                            key={data.product__ID}
                                            productId={data.product__ID}
                                            thumbnail={data.product__ID}
                                            defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                            icon={<FaDraftingCompass />}
                                            heading={data.product__Name}
                                            text={data?.product__Description?.slice(0, 95) + "..." || ""}
                                            subheading={data?.product__Number}
                                            onHide={props.onHide}
                                            searchType={props?.searchType}
                                        />


                                    ))}</>}

                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}