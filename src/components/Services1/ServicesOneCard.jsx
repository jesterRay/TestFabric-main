import React, { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';

function ServicesOneCard({ index, categoryId, bgImg, icon, heading, btnText, defaultImg, alterImg }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);
    const [imageToShow, setImageToShow] = useState(bgImg);
    const [attemptedImages, setAttemptedImages] = useState([]);

    function handleClick() {
        setValues((pre) => ({ ...pre, categoryId: categoryId }));
        const urlHeading = heading.replaceAll(" ", "-").replaceAll("/", "") + "-" + (categoryId);
        history.push(`/product-by-subcategory/${urlHeading}`);
    }

    function onError(e) {
        // Track the current failed image
        const failedImage = e.target.src;
        setAttemptedImages(prev => [...prev, failedImage]);
    
        // Try images in order: bgImg → alterImg → defaultImg → hide element
        if (alterImg && !attemptedImages.includes(alterImg)) {
            setImageToShow(alterImg);
        } else if (bgImg && !attemptedImages.includes(bgImg)) {
            setImageToShow(bgImg);
        } else if (defaultImg && !attemptedImages.includes(defaultImg)) {
            setImageToShow(defaultImg);
        } else {
            e.target.style.display = 'none'; // Hide the image if all fail
        }
    }
    

    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-card" onClick={handleClick} style={{ cursor: "pointer", borderRadius: "12px", minHeight: "350px" }}>
                <div
                    className="card-thumb bg-cover"
                    style={{
                        height: "60%",
                        borderRadius: "12px 12px 0 0",
                        overflow: "hidden",
                        backgroundColor: "#f5f5f5"
                    }}
                >
                    <img 
                        style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                        src={imageToShow}
                        onError={onError} 
                        alt={heading || "Service Image"} 
                        loading="lazy"
                    />
                </div>

                <div className="content" style={{ padding: "15px", borderRadius: "0 0 12px 12px" }}>
                    <h3>
                        <a onClick={handleClick}>{index}. {heading}</a>
                    </h3>
                    <a onClick={handleClick} className="read-btn">
                        {btnText} <BsArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServicesOneCard;