import React from 'react';
import { BiCalendar } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function WidgetNews({ thumbnail, meta, heading, link }) {
    
    const defaultImage = process.env.REACT_APP_IMAGE_URL+"images/no-image.png";
    function onError(e){
        e.target.src = defaultImage
    }
    return (
        <>
            <div className="single-recent-post">
                <div
                    className="thumb bg-cover"
                    // style={{
                    //     backgroundImage: `url(${thumbnail})`,
                    // }}
                >
                    <img src={thumbnail} onError={(e) => onError(e)} />
                </div>
                <div className="post-data">
                    <span>
                        <BiCalendar
                            style={{
                                marginBottom: '3px',
                                marginRight: '3px',
                            }}
                        />
                        {meta}
                    </span>
                    <h5>
                        {' '}
                        <Link to={link}>{heading}</Link>{' '}
                    </h5>
                </div>
            </div>
        </>
    );
}

export default WidgetNews;
