import React, { useContext, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import { concatUrlPath } from '../../helpers/concatUrlPath';

function ServicesOneCard({ categoryId, bgImg, icon, heading, btnText, defaultImg,index }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);

    function handleClick() {
        setValues((pre) => ({ ...pre, categoryId: categoryId }));
        const urlPath = concatUrlPath('product-by-standards-subcategory', heading, categoryId);
        history.push(urlPath);
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
                        backgroundColor: "#f5f5f5" // Added fallback background color
                    }}
                >
                    <img 
                        style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                        src={bgImg ? bgImg : defaultImg} 
                        alt={heading || "Service"} 
                    />
                </div>

                <div className="content" style={{ padding: "15px", borderRadius: "0 0 12px 12px" }}>
                    <h3>{(index+1)+". \n"+(heading)?.slice(0,50)}</h3>
                    <a onClick={handleClick} className="read-btn">
                        {btnText} <BsArrowRight style={{ fontSize: '18px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServicesOneCard;