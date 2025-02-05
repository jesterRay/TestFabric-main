import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';

function ServicesOneCard({ index, categoryId, bgImg, icon, heading, btnText, defaultImg, alterImg }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);

    function handleClick() {
        setValues((pre) => ({ ...pre, categoryId: categoryId }));
        const urlHeading = heading.replaceAll(" ", "-").replaceAll("/", "") + "-" + (categoryId);
        history.push(`/product-by-subcategory/${urlHeading}`);
    }

    function onError(e) {
        e.target.src = bgImg || defaultImg;
    }

    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-card" onClick={handleClick} style={{ cursor: "pointer", borderRadius: "12px", minHeight: "350px" }}>
                <div
                    className="card-thumb bg-cover"
                    style={{
                        height: "60%", // Adjust the height as needed
                        borderRadius: "12px 12px 0 0",
                        overflow: "hidden",
                    }}
                >
                    <img style={{ height: "100%", width: "100%" }} src={alterImg} onError={onError} alt="Service Image" />
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
