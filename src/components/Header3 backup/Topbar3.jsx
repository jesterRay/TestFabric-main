import { Link } from 'react-router-dom/cjs/react-router-dom';
import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';

function Topbar3() {
    return (
        <div className="top-bar style-3 d-none d-sm-block">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8 col-12">
                        <div className="contact-data">
                            <ul>
                                <li>
                                    <AiOutlineMail
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    info@testfabrics.com
                                </li>
                                <li>
                                    <AiOutlinePhone
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    +1 (570) 603 0432
                                </li>
                                <li>
                                    <FaMapMarkerAlt
                                        style={{
                                            fontSize: '16px',
                                            color: 'white',
                                            marginTop: '-5px',
                                            marginRight: '5px',
                                        }}
                                    />{' '}
                                    415 Delaware Avenue,
West Pittston, PA 18643, USA
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <div className="lan-select" >
                            <Link to="/news" style={{color:"white",marginLeft:"1rem"}}>
                                News
                            </Link>
                            {/* <Link>
                                Events
                            </Link> */}
                            {/* <form>
                                <select id="lan">
                                    <option>English</option>
                                    <option>France</option>
                                    <option>Bangla</option>
                                    <option>Hindi</option>
                                </select>
                            </form> */}
                        </div>
                        <div className="lan-select">
                            <Link style={{color:"white"}} to="/event">
                                Events
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar3;
