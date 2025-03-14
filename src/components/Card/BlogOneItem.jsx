import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import DetailModel from './model';
import suCrypt from '../../helpers/suCrypt';

function  BlogOneItem({ thumb, title, description,url, img_url }) {
    const history = useHistory();
    
    const [countryId, setCountryId] = useState({ data: "", show: false });


    function handleClick() {
        setCountryId(() => ({ data: description, show: true }));
        // const urlHeading = title.replaceAll(" ", "-").replaceAll("/", "");
        // history.push(`/blog-detail/${urlHeading}`);
    }


    

    return (
        <>
            <DetailModel
                show={countryId.show}
                onHide={() => setCountryId((prev) => ({ ...prev, show: false }))}
                data={countryId?.data}
                title={title}
                thumbnail={img_url}
            />
            <div className="col-lg-4 col-md-6 col-12">
                <div 
                    className="single-service-card" 
                    onClick={handleClick} 
                    style={{ cursor: "pointer", borderRadius: "12px", minHeight: "350px" }}
                >
                    <div
                        className="card-thumb bg-cover"
                        style={{
                            height: "60%", // Matches the ServiceOneCard design
                            borderRadius: "12px 12px 0 0",
                            overflow: "hidden",
                        }}
                    >
                        <img style={{ height: "100%", width: "100%" }} src={img_url} alt="Blog Image" />
                    </div>

                    <div className="content" style={{ padding: "15px", borderRadius: "0 0 12px 12px" }}>
                        <h3>
                            <a href={url} target='blank'>{title}</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BlogOneItem;
