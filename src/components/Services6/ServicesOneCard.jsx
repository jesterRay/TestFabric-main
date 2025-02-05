import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import { concatUrlPath } from '../../helpers/concatUrlPath';

function ServicesOneCard({ sucategoryId, bgImg, icon, heading, btnText, subHeading, defaultImg }) {
    const history = useHistory();
    const { setValues } = useContext(UserContext);

    // handle navigation
    function handleClick() {
        setValues((pre) => ({ ...pre, sucategoryId: sucategoryId })); 
        const urlPath = concatUrlPath('standard-product',heading,sucategoryId);
        history.push(urlPath);
    }

    function onError(e) {
        e.target.src = defaultImg;
    }

    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-card" onClick={handleClick}>
                <div className="card-thumb bg-cover">
                    <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={bgImg} onError={onError} alt="Service" />
                </div>

                <div className="content">
                    <h3>{heading}</h3>
                    <h5>{subHeading}</h5>
                    <a onClick={handleClick} className="read-btn">
                        {btnText} <BsArrowRight style={{ fontSize: '18px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ServicesOneCard;
