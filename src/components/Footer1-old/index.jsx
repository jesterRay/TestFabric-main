import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import iconCall from '../../assets/img/icon/call-icon.png';
import iconMap from '../../assets/img/icon/map-icon.png';
import logo from '../../assets/img/logo-3.png';
import WidExplore from '../Footer3/WidExplore';
import WidNewsletter from '../Footer3/WidNewsletter';
import WidQuestions from '../Footer3/WidQuestions';
import WidServices from '../Footer3/WidServices';
import { useApi } from '../../middleware/middleware';
import { useState } from 'react';

function Footer1() {
    // STATES
    const [email, setEmail] = useState('');

    // HANDLER
    const onchangeHandler = (e) => {
        setEmail(e.target.value);
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
    };
    return (
        // <footer className="footer-1 footer-wrap">
        //     <div className="footer-widgets dark-bg">
        //         <div className="container">
        //             <div className="row">
        //                 <WidgetAbout
        //                     text="Testfabrics, Inc. exists to 'satisfy a need'. That initial 'need’ in the mid 1930’s was to provide necessary and consistent textile test materials to the chemists working in the laboratories of the manufacturers and suppliers of the dyes and auxiliary chemicals used in the wet processing of textiles."
        //                     fbLink="/"
        //                     twitterLink="/"
        //                     instaLink="/"
        //                     youtubeLink="/"
        //                 />


        //                 <div className="col-md-6 col-xl-3 col-12">
        //                     <div className="single-footer-wid recent_post_widget">
        //                         <div className="wid-title">
        //                             <h4>News Feeds</h4>
        //                         </div>
        //                         <div className="recent-post-list">
        //                             {WidgetNewsData.map((data) => (
        //                                 <WidgetNews
        //                                     key={data.id}
        //                                     thumbnail={data.thumbnail}
        //                                     meta={data.meta}
        //                                     heading={data.heading}
        //                                     link={data.link}
        //                                 />
        //                             ))}
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="col-md-6 col-xl-3 col-12">
        //                     <div className="single-footer-wid newsletter_widget">
        //                         <div className="wid-title">
        //                             <h4>Newsletter</h4>
        //                         </div>
        //                         <div className="newsletter_box">
        //                             <p>
        //                                 Subscribe our newsletter to get our latest updates &#38;
        //                                 news.
        //                             </p>
        //                             <form action="#">
        //                                 <input
        //                                     value={email}
        //                                     onChange={onchangeHandler}
        //                                     type="email"
        //                                     placeholder="Enter email address"
        //                                     required
        //                                 />
        //                                 <button
        //                                     className="submit-btn"
        //                                     type="submit"
        //                                     onSubmit={onSubmitHandler}
        //                                 >
        //                                     <FaPaperPlane />
        //                                 </button>
        //                             </form>
        //                         </div>
        //                     </div>
        //                 </div>

        //                 <div className="col-md-6 col-xl-3 col-12">
        //                     <div className="single-footer-wid ml-15 site_info_widget">
        //                         <div className="wid-title">
        //                             <h4>Get In Touch</h4>
        //                         </div>
        //                         <div className="contact-us" />
        //                         {WidgetGetinTouchData.map((data) => (
        //                             <WidgetGetinTouch
        //                                 key={data.id}
        //                                 icon={data.icon}
        //                                 heading={data.heading}
        //                                 text={data.text}
        //                             />
        //                         ))}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="footer-bottom">
        //         <div className="container">
        //             <div className="row align-items-center">
        //                 <div className="col-lg-4 col-12">
        //                     <div className="copyright-info">
        //                         <p>
        //                             &copy; Copyright By <a href="index.html">Testfebric</a> - 2023
        //                         </p>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-4 col-12 text-center">
        //                     <div className="footer-logo">
        //                         <a href="#top">
        //                             <img width={60}  src={logo} alt="TestFabric" />
        //                         </a>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-4 d-none d-lg-block col-12">
        //                     <div className="scroll-up-btn text-md-right justify-content-end">
        //                         <a >
        //                             <AiOutlineArrowUp />
        //                         </a>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </footer>
        <footer className="footer-3 footer-wrap">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-3 col-12 pr-90">
                            {/* <WidExplore /> */}
                        </div>
                        <div className="col-md-6 col-xl-2 col-12 pr-xl-0">
                            <WidServices />
                        </div>
                        <div className="col-md-6 col-xl-3 col-12 pl-xl-5">
                            <div className="single-footer-wid ml-15 contact_widget_2">
                                <div className="wid-title">
                                    <h4>Have any Question?</h4>
                                </div>
                                <div className="contact-us">
                                    <WidQuestions
                                        icon={iconCall}
                                        title="Phone"
                                        text="+1 (570) 603 0432"
                                    />
                                    <WidQuestions
                                        icon={iconMap}
                                        title="Address"
                                        text="415 Delaware Avenue,
West Pittston, PA 18643, USA"
                                    />
                                    <WidQuestions
                                        icon={iconCall}
                                        title="Email"
                                        text=" info@testfabrics.com"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 col-12  pl-xl-5">
                            <WidNewsletter />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4 col-12 order-2 order-md-1">
                            <div className="copyright-info mt-3 mt-md-0">
                                <p>
                                    &copy; Copyright and Design By <Link to="/">TestFabric</Link>{' '}
                                    - 2023
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-center order-1 order-md-2">
                            <div className="footer-logo">
                                <Link to="/">
                                    <img src={logo} alt="Dustrix" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 text-md-end order-3 order-md-3">
                            <div className="social_link  mt-3 mt-md-0">
                                <Link to="/home-3">
                                    <FaFacebookF />
                                </Link>
                                <Link to="/home-3">
                                    <FaTwitter />
                                </Link>
                                <Link to="/home-3">
                                    <FaInstagram />
                                </Link>
                                <Link to="/home-3">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer1;
