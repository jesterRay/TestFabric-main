import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import EventsModel from './model';

function SevicesTwoCard({ productId, thumbnail, icon, heading, text, subheading, evenUrl, newsDate }) {
    const defaultImage = process.env.REACT_APP_IMAGE_URL + "images/no-image.png";
    const imageUrl = process.env.REACT_APP_IMAGE_URL + "news_images/" + suCrypt() + ".jpg";

    function suCrypt() {
        return btoa(btoa(thumbnail));
    }

    const [model, setModel] = useState({ show: false, data: {} });

    function onError(e) {
        e.target.src = defaultImage;
    }

    function handleShowModal() {
        setModel({
            show: true,
            data: {
                event: heading,
                description: text,
                evenUrl: evenUrl,
                date: newsDate
            }
        });
    }

    return (
        <>
            <EventsModel 
                show={model.show}
                onHide={() => setModel((prev) => ({ ...prev, show: false }))}
                data={model.data}
                title={heading}
                thumbnail={imageUrl}
            />
            <div className="col-md-6 col-xl-4 col-12">
                <div className="single-service-card">
                    <div className="card-thumb bg-cover">
                        <img src={imageUrl} onError={onError} alt={heading} style={{ height: "100%", width: "100%", borderRadius: "12px 12px 0 0" }} />
                    </div>
                    <div className="content" style={{ borderRadius: "0 0 12px 12px", padding: "15px" }}>
                        <h3>
                            <a href={evenUrl} target="_blank" rel="noopener noreferrer">{heading}</a>
                        </h3>
                        <h6 style={{ color: "gray" }}>{newsDate}</h6>
                        <h6>{subheading}</h6>
                        <p>{text?.slice(0, 95) + "..."}</p>
                        <div 
                            style={{ color: "blue", cursor: "pointer" }} 
                            onClick={handleShowModal}
                        >
                            More
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SevicesTwoCard;
