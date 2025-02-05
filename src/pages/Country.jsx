import React, { useState } from 'react';

import Footer3 from '../components/Footer3';
import Header3 from '../components/Header3';
import { useApi } from '../middleware/middleware';
import CountryDetailModel from '../components/ChooseRegion/model';


function Country() {
    const [modalShow, setModalShow] = useState(false);
    const [countryId, setCountryId] = useState({id:0,name:"",show:false});

    const { data, error, isLoading } = useApi('pages_data', {page_id:43});
    const { data:region_data, error:region_error, isLoading:region_loading } = useApi('region_data', {});
    const { data:country_data, error:country_error, isLoading:country_loading } = useApi('map_contries_data', {});
    
    const { data: location, error: locationError, isLoading: locationLoading } = useApi('get_ip_details', {});

    function suCrypt(id) {
        // console.log("countryyyy code : ",btoa(btoa(id)))
        return btoa(btoa(id));
    }
    function handleClick(id,name){
        setCountryId(()=>({id:id,name:name,show:true}));
        // setModalShow(true);
    }

    return (
        <>
            <Header3 />
            <div style={{background:"#F6F6F6"}}>
            {/* <Hero1/>
            <Portfolio3/>
            <Portfolio4/> */}
            <div className="container">
            <CountryDetailModel
                show={true}
                onHide={() => setCountryId((pre)=>({...pre,show:false}))}
                countryid={location?.countryId}
            />
            </div>

            </div>
            
            <Footer3 />
        </>
    );
}

export default Country;
