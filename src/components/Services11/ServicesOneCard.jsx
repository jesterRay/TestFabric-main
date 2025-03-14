import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import { concatUrlPath } from '../../helpers/concatUrlPath';

function ServicesOneCard({ index, categoryId, bgImg, icon, heading, btnText, defaultImg, alterImg }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);

    function handleClick() {
        setValues((pre) => ({ ...pre, categoryId: categoryId }));
        const url = concatUrlPath('product-by-subcategory',heading,categoryId);
        history.push(`${url}`);
    }

    function onError(e) {
        e.target.src = defaultImg || bgImg;
    }

    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-card" onClick={handleClick} style={{ cursor: "pointer", borderRadius: "12px", minHeight: "350px", display: "flex", flexDirection: "column", border: "1px solid #ddd", overflow: "hidden" }}>
                <div
                    className="card-thumb bg-cover"
                    style={{
                        height: "60%", // Adjust the height as needed
                        borderRadius: "12px 12px 0 0",
                        overflow: "hidden",
                    }}
                >
                    <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={alterImg} onError={onError} alt="Service Image" />
                </div>

                <div className="content" style={{ padding: "15px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "40%", borderRadius: "0 0 12px 12px" }}>
                    <h3 style={{ margin: "0" }}>
                        <a onClick={handleClick} style={{ textDecoration: "none", color: "#333" }}>{index}. {heading}</a>
                    </h3>
                    <a onClick={handleClick} className="read-btn" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#007bff" }}>
                        {btnText} <BsArrowRight style={{ fontSize: '18px', marginLeft: '8px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServicesOneCard;
