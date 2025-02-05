import React, { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaInstagramSquare,
  FaPaperPlane,
  FaTwitter,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import logo from "../../assets/img/logo-3.png";
import WidgetAbout from "./WidgetAbout";
import WidgetGetinTouch from "./WidgetGetinTouch";
import WidgetGetinTouchData from "./WidgetGetinTouchData";
import WidgetNews from "./WidgetNews";
import WidgetNewsData from "./WidgetNewsData";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useApi } from "../../middleware/middleware";
import aatc from "../../assets/img/aatcc.jpg";
import astm from "../../assets/img/astm.jpg";
import "./Footer.css";

function Footer3() {
  // STATES
  const [email, setEmail] = useState("");
  const { data, error, isLoading } = useApi("news_data");
  const {
    data: aboutData,
    error: error2,
    isLoading: isLoading2,
  } = useApi("about_data", {});

  // HANDLER
  const onchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };
  return (
    <footer className="footer-1 footer-wrap">
      <div className="footer-widgets dark-bg">
        <div className="container">
          <div className="row">
            {/* ABOUT WIDGET */}
            <WidgetAbout
              text="Testfabrics exists to 'satisfy a need'. That initial 'need’ in the mid 1930’s was to provide necessary and consistent textile test materials to the chemists working in the laboratories of the manufacturers and suppliers of the dyes and auxiliary chemicals used in the wet processing of textiles."
              fbLink="https://www.facebook.com/p/Testfabrics-Inc-100070179757613/"
              twitterLink="https://twitter.com/testfabrics"
              instaLink="https://www.instagram.com/p/CoDQrSYpXIf/"
              youtubeLink="https://www.youtube.com/@testfabricsinc2413"
            />

            {/* NEWS FEED WIDGET */}

            <div className="col-md-6 col-xl-3 col-12">
              <div className="single-footer-wid recent_post_widget">
                <div className="wid-title">{/* <h4>Quick Links</h4> */}</div>
                <div className="recent-post-list">
                  <ul className="sub-menu">
                    {aboutData?.map((item) => {
                      return (
                        item?.associations_and_partners__Name == "HISTORY" && (
                          <li key={item?.associations_and_partners__Name}>
                            <Link
                              to={{
                                pathname: "/heritage",
                                state: {
                                  item: item?.associations_and_partners__Description,
                                  heading:
                                    item?.associations_and_partners__Name,
                                  category: "About US",
                                },
                              }}
                            >
                              {"HERITAGE"}
                            </Link>
                          </li>
                        )
                      );
                    })}
                    <li>
                      <Link to={"/associate-and-patners"}>
                        ASSOCIATION AND PARTNERS
                      </Link>
                    </li>
                    <li>
                      <Link to={"/carrers"}>CAREERS</Link>
                    </li>
                    <li>
                      <Link to="/customer-portal">Customer Portal</Link>
                    </li>
                    <li>
                      <Link to="/agent-portal">Agent Portal</Link>
                    </li>
                  </ul>
                  {/* <Link to="/">Heritage</Link>
                                    <Link to="/">Associate and Partners</Link>
                                    <Link to="/">Careers</Link> */}
                  {/* {data?.map((data) => (
                                        <WidgetNews
                                            key={data.news__ID}
                                            thumbnail={data.news__ID}
                                            meta={data?.news__Date}
                                            heading={data.news__Title}
                                            link={"/news"}
                                        />
                                    ))} */}
                </div>
              </div>
            </div>

            {/* CONNECT WITH US (SOCIAL MEDIA) */}
            {/* CONNECT WITH US (SOCIAL MEDIA) */}
            <div className="col-md-6 col-xl-3 col-12">
             
              {/* 
                                <div className="footer-logos">
                                    <img src={aatc} alt="AATCC Logo" />
                                    <img src={astm} alt="ASTM Logo" />
                                    <img src={aatc} alt="ISO Logo" />
                                </div> */}
            </div>
            {/* <div className="single-footer-wid social-media-widget">
                                <div className="wid-title">
                                    <h4>Connect With Us</h4>
                                </div>
                                <WidgetAbout
                           
                            fbLink="https://www.facebook.com/p/Testfabrics-Inc-100070179757613/"
                            twitterLink="https://twitter.com/testfabrics"
                            instaLink="https://www.instagram.com/p/CoDQrSYpXIf/"
                            youtubeLink="https://www.youtube.com/@testfabricsinc2413"
                        />
                               
                            </div> */}

            {/* <div className="social-media-links-column">
                                    <ul className="social-column">
                                        <li><FaFacebookSquare href="https://www.facebook.com/p/Testfabrics-Inc-100070179757613/" target="_blank" rel="noopener noreferrer">Facebook</FaFacebookSquare></li>
                                        <li><FaTwitterSquare href="https://twitter.com/testfabrics" target="_blank" rel="noopener noreferrer">Twitter</FaTwitterSquare></li>
                                        <li><FaInstagramSquare href="https://www.instagram.com/p/CoDQrSYpXIf/" target="_blank" rel="noopener noreferrer">Instagram</FaInstagramSquare></li>
                                        <li><FaYoutubeSquare href="https://www.youtube.com/@testfabricsinc2413" target="_blank" rel="noopener noreferrer">YouTube</FaYoutubeSquare></li>
                                    </ul>
                                </div> */}

            {/* NEWSLETTER WIDGET */}
            {/* <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid newsletter_widget">
                                <div className="wid-title">
                                    <h4>Newsletter</h4>
                                </div>
                                <div className="newsletter_box">
                                    <p>
                                        Subscribe our newsletter to get our latest updates &#38;
                                        news.
                                    </p>
                                    <form action="#">
                                        <input
                                            value={email}
                                            onChange={onchangeHandler}
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />
                                        <button
                                            className="submit-btn"
                                            type="submit"
                                            onSubmit={onSubmitHandler}
                                        >
                                            <FaPaperPlane />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div> */}

            {/* GET IN TOUCH (INCLUDING LOGOS) */}
            <div className="col-md-6 col-xl-3 col-12">
              <div className="single-footer-wid ml-15 site_info_widget">
                <div className="contact-us" />
                {WidgetGetinTouchData.map((data) => (
                  <WidgetGetinTouch
                    key={data.id}
                    icon={data.icon}
                    heading={data.heading}
                    text={data.text}
                    type={data?.type}
                  />
                ))}
                {/* AATCC, ASTM, ISO Logos */}
                {/* <div className="footer-logos">
                  <img src={aatc} alt="AATCC Logo" />
                  <img src={astm} alt="ASTM Logo" />
                  <img src={aatc} alt="ISO Logo" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      {/* Footer bottom with cookie policy */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-12">
              <div className="copyright-info">
                <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
                <Link to="/terms-condition">Terms & Condition</Link> |{" "}
                <Link to="/cookie-policy">Cookie Policy</Link>
              </div>
            </div>
            <div className="col-lg-4 col-12 text-center">
              <div className="footer-logo">
                <a href="#top">
                  <img width={200} src={logo} alt="TestFabric" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="copyright-info">
                <p>
                  &copy; Copyright By <a>Testfabrics, Inc.</a>
                </p>
              </div>
            </div>
            <div className="col-lg-1 d-none d-lg-block col-12">
              <div
                className="scroll-up-btn text-md-right justify-content-end"
                onClick={scrollToTop}
              >
                <a>
                  <AiOutlineArrowUp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
