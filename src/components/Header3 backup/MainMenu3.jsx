import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-3.png';
import MobileMenu from '../MobileMenu';
import { useApi } from '../../middleware/middleware';
function MainMenu3() {
    const { data, error, isLoading } = useApi('servecies_data', {});
    const { data: aboutData, error: error2, isLoading: isLoading2 } = useApi('about_data', {});

    return (
        <header className="header-wrap header-3">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-2 col-5 col-md-4">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="logo" height={40} style={{margin:"10px 5px"}} />
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-8 pl-lg-3 header-none">
                        <div className="main-menu">
                            <ul>
                                <li>
                                    <Link to="/about">About Us</Link>
                                    <ul className="sub-menu">
                                        {/* {console.log("aboutData",aboutData)} */}
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
                                    <li><Link to="/order-request">ORDER REQUEST</Link></li>
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
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-xl-2 col-6 col-md-5 text-right d-in-flex align-items-center">
                        <Link to="/contact" className="theme-btn theme-3">
                            Get A Quote
                        </Link>

                        <div className="col mobile-menu-bar">
                            <MobileMenu aboutData={aboutData} serviceData={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default MainMenu3;
