import React, { useContext, useState, useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { FaCopy, FaInstagram } from "react-icons/fa";
import { Tooltip } from "@material-ui/core";
import { extractIdFromUrlPath } from "../../helpers/concatUrlPath";

SwiperCore.use([Navigation, Pagination]);

function DetailsCarousel() {
  const { values } = useContext(UserContext);
  const location = useLocation();


  // get product id from url
  const productId = extractIdFromUrlPath(location.pathname || '');

  const [selectedImage, setSelectedImage] = useState(0);
  const [imagesData, setImagesData] = useState([]);

  // Using environment variable for default image
  const defaultImage = `${process.env.REACT_APP_IMAGE_URL}product_images/T0E9PQ==_a.jpg`;

  //  to fetch images
  useEffect(() => {
    let isMounted = true;

    async function fetchImages() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}product_media?product_id=${productId}`
        );
        const imageData = response.data.data; 
        setImagesData(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    }

    if (productId && isMounted) fetchImages();
    return () => isMounted = false;
  }, [productId]);

  function onError(e) {
    e.target.src = defaultImage;
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  const openInstagramShare = () => {
    const instagramURL = `https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`;
    window.open(instagramURL, '_blank');
  };



  return (
    <div>
      <div className="custom-crousel">
        <div className="crousel-sidebar" style={{ height: "400px" }}>
          <Swiper
            slidesPerView={4}
            direction="vertical"
            className="timeline-carousel-wrapper"
            breakpoints={{
              0: { slidesPerView: 4 },
              576: { slidesPerView: 4 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 4 },
            }}
          >
            {imagesData.map((item, index) => (
              <div
                className="crousel-sidebar-image"
                onClick={() => setSelectedImage(index)}
                key={index}
              >
                {item.media_type === "video" ? (
                  <SwiperSlide key={item.media_name+index}>
                    <video
                      width="100%"
                      src={`${process.env.REACT_APP_IMAGE_URL}product_images/${item.media_name}`}
                      onClick={() => {
                        setSelectedImage(index);
                      }}
                      autoPlay
                      muted
                      loop
                    />
                  </SwiperSlide>
                ) : (
                  <SwiperSlide key={item.media_name+index}>
                    <img
                      style={{ objectFit: "fill" }}
                      src={`${process.env.REACT_APP_IMAGE_URL}product_images/${item.media_name}`}
                      onError={onError}
                      onClick={() => {
                        setSelectedImage(index);
                      }}
                      alt="pic"
                      className={
                        selectedImage === index ? "activeSwiperImage" : ""
                      }
                    />
                  </SwiperSlide>
                )}
              </div>
            ))}
          </Swiper>
        </div>
        <div className="crousel-image">
          {imagesData[selectedImage]?.media_type === "video" ? (
            <video
              width={"100%"}
              height={"50%"}
              src={`${process.env.REACT_APP_IMAGE_URL}product_images/${imagesData[selectedImage].media_name}`}
              muted
              autoPlay
              loop
            ></video>
          ) : (
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  right: "-1px",
                  display: "flex",
                  flexDirection: "top",
                }}
              >
                <Tooltip title="Share via WhatsApp" placement="top">
                  <WhatsappShareButton
                    url={window.location.href}
                    style={{ margin: "4px 10px" }}
                  >
                    <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </Tooltip>

                <div
                  title="Share via Instagram"
                  onClick={openInstagramShare}
                  style={{ margin: "4px 10px", cursor: "pointer" }}
                >
                  <FaInstagram size={32} />
                </div>
                
                <Tooltip title="Share via Facebook" placement="top">
                  <FacebookShareButton
                    url={window.location.href}
                    quote={"TestFabric"}
                    hashtag="#muo"
                    style={{ margin: "4px 10px" }}
                  >
                    <FacebookIcon size={32} round />
                  </FacebookShareButton>
                </Tooltip>
                <Tooltip title="Share via LinkedIn" placement="top">
                  <LinkedinShareButton
                    url={window.location.href}
                    quote={"TestFabric"}
                    hashtag="#muo"
                    style={{ margin: "4px 10px" }}
                  >
                    <LinkedinIcon size={32} round />
                  </LinkedinShareButton>
                </Tooltip>
                <Tooltip title="Share via Email" placement="top">
                  <EmailShareButton
                    url={window.location.href}
                    quote={"TestFabric"}
                    hashtag="#muo"
                    style={{ margin: "4px 10px" }}
                  >
                    <EmailIcon size={32} round />
                  </EmailShareButton>
                </Tooltip>
                <div
                  title="Copy Link"
                  onClick={copyToClipboard}
                  style={{ margin: "4px 10px", cursor: "pointer" }}
                >
                  <FaCopy size={32} />
                </div>
              </div>

              <img
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginLeft: "-20px",
                }}
                src={`${process.env.REACT_APP_IMAGE_URL}product_images/${imagesData[selectedImage]?.media_name}`}
                onError={onError}
                alt="img"
              />
            </div>
          )}
        </div>
      </div>

      

    </div>
  );
}

export default DetailsCarousel;
