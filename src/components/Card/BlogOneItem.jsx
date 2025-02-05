import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import DetailModel from './model';

function BlogOneItem({ thumb, title, description }) {
    const history = useHistory();
    const imageUrl = process.env.REACT_APP_IMAGE_URL + "partners_images/" + suCrypt() + ".jpg";
    
    const [countryId, setCountryId] = useState({ data: "", show: false });

    function suCrypt() {
        return btoa(btoa(thumb));
    }

    function handleClick() {
        setCountryId(() => ({ data: description, show: true }));
        const urlHeading = title.replaceAll(" ", "-").replaceAll("/", "");
        history.push(`/blog-detail/${urlHeading}`);
    }

    function onError(e) {
        e.target.src = imageUrl; // Fallback if image fails to load
    }

    return (
        <>
            <DetailModel
                show={countryId.show}
                onHide={() => setCountryId((prev) => ({ ...prev, show: false }))}
                data={countryId?.data}
                title={title}
                thumbnail={imageUrl}
            />
            <div className="col-lg-4 col-md-6 col-12">
                <div className="single-service-card" onClick={handleClick} style={{ cursor: "pointer", borderRadius: "12px", minHeight: "350px" }}>
                    <div
                        className="card-thumb bg-cover"
                        style={{
                            height: "60%", // Matches the ServiceOneCard design
                            borderRadius: "12px 12px 0 0",
                            overflow: "hidden",
                        }}
                    >
                        <img style={{ height: "100%", width: "100%" }} src={imageUrl} onError={onError} alt="Blog Image" />
                    </div>

                    <div className="content" style={{ padding: "15px", borderRadius: "0 0 12px 12px" }}>
                        <h3>
                            <a onClick={handleClick}>{title}</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogOneItem;
