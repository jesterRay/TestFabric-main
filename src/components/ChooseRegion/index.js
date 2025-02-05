// import React, { useState, useEffect } from 'react';
// import WorldMap from "react-basic-world-map";
// import { useApi } from "../../middleware/middleware";
// import CountryDetailModel from "./model";

// const CountrySection = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const [countryId, setCountryId] = useState({ id: 0, name: "", show: false });
//   const [continent, setContinent] = useState("");
//   const [country, setCountry] = useState("");
//   const [continents, setContinents] = useState([]);
//   const [countries, setCountries] = useState([]);
//   const [selectedCountries, setSelectedCountries] = useState({});

//   const { data: countryData, error: countryError, isLoading: countryLoading } = useApi('map_contries_data', {});
//   const { data: continentData, error: continentError, isLoading: continentLoading } = useApi('region_data', {});

//   useEffect(() => {
//     if (continentData) {
//       setContinents(continentData.map(item => item.map__Name));
//     }
//   }, [continentData]);

//   useEffect(() => {
//     if (countryData) {
//       setCountries(countryData.map(item => ({ label: item.countries__Name, value: item.countries__ID, map__ID: item.map__ID })));
//     }
//   }, [countryData]);

//   const handleContinentChange = (e) => {
//     setContinent(e.target.value);
//     setCountry("");
//     const selectedContinent = continentData.find(cont => cont.map__Name === e.target.value);
//     const filteredCountries = countryData.filter(item => item.map__ID === selectedContinent.map__ID);
//     setCountries(filteredCountries.map(item => ({ label: item.countries__Name, value: item.countries__ID })));
//     const initialSelectedCountries = {};
//     filteredCountries.forEach(country => {
//       initialSelectedCountries[country.countries__Name] = true;
//     });
//     setSelectedCountries(initialSelectedCountries);
//   };

//   const handleCountryChange = (e) => {
//     setCountry(e.target.value);
//     const selectedCountry = countryData.find(item => item.countries__ID === e.target.value);
//     if (selectedCountry) {
//       setSelectedCountries({ [selectedCountry.countries__Name]: true });
//       setCountryId({ id: selectedCountry.countries__ID, name: selectedCountry.countries__Name, show: true });
//     }
//   };

//   const onMapClick = (countryCode) => {
//     const selectedCountry = countryData.find(item => item.countries__Code === countryCode);
//     if (selectedCountry) {
//       setSelectedCountries({ [selectedCountry.countries__Name]: true });
//       setCountryId({ id: selectedCountry.countries__ID, name: selectedCountry.countries__Name, show: true });
//     }
//   };

//   return (
//     <div className="container p-4 mt-5 border border-secondary rounded">
//       <CountryDetailModel
//         show={countryId.show}
//         onHide={() => setCountryId((pre) => ({ ...pre, show: false }))}
//         countryid={countryId}
//       />

//       <h5 className="mb-3">Country Selection</h5>

//       <div className="row">
//         {/* <div className="col-md-6">
//           <select 
//             value={continent} 
//             onChange={handleContinentChange} 
//             className="form-select"
//           >
//             <option value="">Select Continent</option>
//             {continents.map(item => (
//               <option key={item} value={item}>{item}</option>
//             ))}
//           </select>
//         </div> */}
//         <div className="col-md-6">
//           <select 
//             value={country} 
//             onChange={handleCountryChange} 
//             className="form-select" 
//             // disabled={!continent || countries.length === 0}
//           >
//             <option value="">Select Country</option>
//             {countries.map(item => (
//               <option key={item.value} value={item.value}>{item.label}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="mt-4">
//         <WorldMap 
//           countries={selectedCountries}
//           onClick={onMapClick}
//           style={{ fill: 'blue', stroke: 'lightblue', backgroundColor: 'lightblue' }}
//         />
//       </div>

//     </div>
//   );
// };

// export default CountrySection;

import { Link } from "@material-ui/core";
import { useApi } from "../../middleware/middleware";
import Parser from 'html-react-parser';

import { useState } from "react";
import CountryDetailModel from "./model";


export default function CountrySection(){
    const [modalShow, setModalShow] = useState(false);
    const [countryId, setCountryId] = useState({id:0,name:"",show:false});

    const { data, error, isLoading } = useApi('pages_data', {page_id:43});
    const { data:region_data, error:region_error, isLoading:region_loading } = useApi('region_data', {});
    const { data:country_data, error:country_error, isLoading:country_loading } = useApi('map_contries_data', {});
    

    function suCrypt(id) {
        // console.log("countryyyy code : ",btoa(btoa(id)))
        return btoa(btoa(id));
    }
    function handleClick(id,name){
        setCountryId(()=>({id:id,name:name,show:true}));
        // setModalShow(true);
    }

    return(
        <div className="container">
            <CountryDetailModel
                show={countryId.show}
                onHide={() => setCountryId((pre)=>({...pre,show:false}))}
                countryid={countryId}
            />
        <h5>
            {data && Parser(data?.[0]?.page_long_content)}
        </h5>
        <br/>
        <hr/>
        <br/>
        {region_data&&region_data?.map((item)=>
            <>
                <div style={{padding:"10px "}}>
                    <h4>{item?.map__Name}</h4>
                    <div  className="row" style={{marginTop:"10px", marginLeft:"10px"}} >
                        {country_data?.map((county)=>{
                            return(
                                county.countries__Map_ID==item.map__ID&&
                                <div className="col-3 mb-3" style={{cursor:"pointer", }} onClick={()=>handleClick(county?.countries__ID,county?.countries__Name)}>
                                    {/* `url(http://localhost:8888/product_images/${suCrypt()}.jpg)` */}
                                    {/* <img src={'http://localhost:8888/product_images/'+suCrypt(county?.map__ID)+'.jpg'} /> */}
                                    <div className="row" style={{width:"30%"}}>
                                        <img  width="25" style={{marginRight:"5px"}} src={process.env.REACT_APP_IMAGE_URL +'map_images/'+suCrypt(county?.countries__ID)+'.jpg'} />
                                    </div>
                                    <div className="row">
                                        <h6>{county?.countries__Name}</h6>
                                    </div>
                                    {/* <br/> */}
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <br/>
            </>
        )}

        </div>
    )
}