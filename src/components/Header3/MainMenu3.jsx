import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-3.png";
import playstore from "../../assets/img/playStore.png";
import logoTf from "../../assets/img/logo-tf.png";
import appleStore from "../../assets/img/appleStore.png";
import MobileMenu from "../MobileMenu";
import { useApi } from "../../middleware/middleware";
import SearchService from "../SearchService";
import { LocationOn } from "@material-ui/icons";
import LocateCountry from "./LocateCountry";
import axios from "axios";
// import FmdGoodIcon from '@mui/icons-material/FmdGood';
function MainMenu3() {
  // const { data, error, isLoading } = useApi('servecies_data', {});
  const { data, error, isLoading } = useApi("services_list", {});

  const {
    data: aboutData,
    error: error2,
    isLoading: isLoading2,
  } = useApi("about_data", {});
  
  // state to handle location
  const [location,setLocation] = useState(null);

  useEffect(() => {
    // get location from cache and if not available or expired then fetch from api  
    const cachedLocation = JSON.parse(localStorage.getItem("location"));
    let currentTimestamp = Date.now();
    const expTime = 3 * 24 * 60 * 60 * 1000; // 3 days
    let isMounted = true; // to handle api when component unmount

    // if location data is available in cache and it is not expired 
    if( cachedLocation && 
      (currentTimestamp - cachedLocation.timestamp < expTime)
    ) 
      setLocation(cachedLocation.data);
    else{
      // fetch location from api
      axios.get(`${process.env.REACT_APP_API_URL}/get_ip_details`)
      .then(res => {
        const {data}  = res.data;
        // store location and created date in cache
        const locationToStore = {
          data,
          timestamp: currentTimestamp
        };

        // incase component is unmounted so memory leak can be avoided
        if (isMounted) setLocation(data);

        localStorage.setItem('location', JSON.stringify(locationToStore));
      })
      .catch(err => console.log(err))
    }


    return () => {
      isMounted = false;
    }
  },[])


  return (
    <header className="header-wrap header-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className=" mobile-menu-bar col-lg-3 col-xl-2 col-2 col-md-2 text-right d-in-flex align-items-center">
            <div className="col">
              <MobileMenu aboutData={aboutData} serviceData={data} />
            </div>
          </div>
          <div className="col-lg-2 col-4 col-md-4">
            <div className="logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  height={30}
                  style={{ margin: "10px 5px" }}
                />
              </Link>
            </div>
          </div>
          {/*<div className="col-lg-1 col-sm-8 col-3">*/}
          {/*    <Link to="/choose-region">*/}
          {/*        <LocationOn />*/}
          {/*        <img width={"25px"} src={"https://tf.smilesdahub.com/apis/country_flags/" + location?.country_flag} />*/}
          {/*        <br />*/}
          {/*        */}
          {/* <div style={{ fontSize: "14px",lineHeight:"16px" }}>*/}
          {/*
           */}
          {/*            {location?.city},*/}
          {/*
           */}
          {/*        </div> */}
          {/*        <div style={{ fontSize: "14px",lineHeight:"16px" }}>*/}
          {/*            {location?.country}*/}
          {/*        </div>*/}
          {/*    </Link>*/}
          {/*</div>*/}
          <div className="col-lg-1 col-sm-8 col-3 d-flex justify-content-center align-items-center">
            {
              location && (
                <Link to={`/choose-region/${location?.country}`}>
                  <LocationOn />
                  <img
                    width={"25px"}
                    alt="location"
                    src={location?.country_flag_full_url}
                  />
                  <br />
                  <div style={{ fontSize: "14px", lineHeight: "16px" , visibility:'hidden'}}>
                    {location?.country}
                  </div>
                </Link>
              )
            }
          </div>
          <div className="col-lg-6 pl-lg-0 ">
            <div className="">
              <SearchService />

              {/* <ul>
                                <li>
                                    <Link to="/about">About Us</Link>
                                    <ul className="sub-menu">
                                    {aboutData?.map((item)=>{
                                             return(
                                                <li key={item?.associations_and_partners__Name}>
                                                    <Link to={{pathname:"/project-details",state: { item:item?.associations_and_partners__Description,heading:item?.associations_and_partners__Name, category:"About US"}}}>{item?.associations_and_partners__Name}</Link>
                                                </li>
                                            )
                                        })}
                                        <li>
                                            <Link to={'/associate-and-partners'}>ASSOCIATION AND PARTNERS</Link>
                                        </li>
                                        <li>
                                            <Link to={'/carrers'}>CAREERS</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="">Products</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/product-by-category">Browse By Product Category</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-by-standards">Browse By Standard test Method</Link>
                                        </li>
                                        <li>
                                            <Link to="/product-by-category">Browse By Interest Group</Link>
                                        </li>
                                       
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/equipment-category">Equipment</Link>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link to="/equipment-category">Browse By Equipment Category</Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/services">Services</Link>
                                    <ul>
                                        {data?.map((item)=>{
                                             return(
                                                <li key={item?.associations_and_partners__ID}>
                                                    <Link to={{pathname:"/project-details",state: { item:item?.associations_and_partners__Description,heading:item?.associations_and_partners__Name,category:item?.cat_name }}}>{item?.associations_and_partners__Name}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </li>

                               
                                <li>
                                    <Link to="/contact">Support</Link>
                                    <ul className="sub-menu">
                                    <li><Link to="/request-certifiate">REQUEST CERTIFICATE OF CONFORMITY</Link></li>
                                    <li><Link to="/msds-request"> REQUEST MATERIAL SAFETY DATA SHEET(MSDS)</Link></li>
                                    <li><Link to="/contact">ORDER REQUEST</Link></li>
                                    <li><Link to="/contact">QUOTE REQUEST</Link></li>
                                    <li><Link to="/track-order">TRACK YOUR ORDER</Link></li>
                                    <li><Link to="/downloads">DOWNLOADS</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/contact">Contact Us</Link>
                                    <ul className="sub-menu">
                                    <li><Link to="/choose-region" >Chose Your Country or Region</Link></li>
                                    <li><Link to="/swatch-request" >FABRIC SWATCH REQUEST</Link></li>
                                    <li><Link to="/catalog-request">CATALOG REQUEST</Link></li>
                                    <li><Link to="/business-inquiry">BUSINESS INQUIRY REQUEST</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
            </div>
          </div>
          {/* <div className='col-4' style={{display:"flex",justifyContent:"center",alignItems:"center"}}> <img src={logoTf} height={35} /></div> */}
          <div
  className="col-lg-2 download-icons"
  style={{
    zIndex: "7",
    borderRadius: '18px',
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      border: "5px solid #3C62A9",
      borderImage: '#3C62A9',
      
    }}
  ></div>
  <div
    className="row"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      zIndex: 1,
    }}
  >
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "3px",
      }}
    >
      <a
        href="https://play.google.com/store/apps/details?id=com.tech.testfabrics.test_fabrics"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={playstore} width={"100px"} height={"35px"} />
      </a>
      <a
        href="https://apps.apple.com/us/app/testfabrics-product-validation/id1660715463"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={appleStore} width={"100px"} height={"55px"} />
      </a>
    </div>
    <p
      style={{
        marginTop: '-13px',
        fontSize: "16px",
        fontWeight: "bolder",
      }}
    >
      DOWNLOAD OUR APP
    </p>
  </div>
  <style>
    {`
      @keyframes animateBorder {
        0% {
          transform: translate(0, 0);
        }
        25% {
          transform: translate(100%, 0);
        }
        50% {
          transform: translate(100%, 100%);
        }
        75% {
          transform: translate(0, 100%);
        }
        100% {
          transform: translate(0, 0);
        }
      }
    `}
  </style>
</div>

          {/* <div className="col-lg-3 col-xl-2 col-6 col-md-5 text-right d-in-flex align-items-center">
                        <Link to="/contact" className="theme-btn theme-3">
                            Get A Quote
                        </Link>

                        <div className="col mobile-menu-bar">
                            <MobileMenu aboutData={aboutData} serviceData={data}/>
                        </div>
                    </div> */}
        </div>
      </div>
    </header>
  );
}

export default MainMenu3;
