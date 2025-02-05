import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';

function ServicesOneCard({ sucategoryId, bgImg, icon, heading, btnText, defaultImg }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);

    function handleClick() {
        setValues((pre) => ({ ...pre, sucategoryId: sucategoryId }));
        const nameReplace = heading.replaceAll("/", "");
        const urlHeading = nameReplace.replaceAll(" ", "-") + "-" + (sucategoryId);
        history.push(`/product/${urlHeading}`);
    }

    function onError(e) {
        e.target.src = defaultImg;
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
                    }}
                >
                    <img style={{ height: "100%", width: "100%" }} src={bgImg} onError={onError} alt="Service Image" />
                </div>

                <div className="content" style={{ padding: "15px", borderRadius: "0 0 12px 12px" }}>
                    <h3>
                        <a onClick={handleClick}>{heading}</a>
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
