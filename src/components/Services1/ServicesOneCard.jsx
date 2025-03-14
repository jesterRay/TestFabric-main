import React, { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import { concatUrlPath } from '../../helpers/concatUrlPath';

function ServicesOneCard({ index, categoryId, bgImg, icon, heading, btnText, defaultImg, alterImg }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);
    const [imageToShow, setImageToShow] = useState(
        bgImg ? bgImg : alterImg ? alterImg : defaultImg
    );
    const [attemptedImages, setAttemptedImages] = useState([]);

    function handleClick() {
        setValues((pre) => ({ ...pre, categoryId: categoryId }));
        const urlPath = concatUrlPath('product-by-subcategory',heading,categoryId);
        history.push(urlPath);
    }

    
    

    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div 
                className="single-service-card" 
                onClick={handleClick} 
                style={{ 
                    cursor: "pointer", 
                    borderRadius: "12px", 
                    minHeight: "350px" 
                }}
            >
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