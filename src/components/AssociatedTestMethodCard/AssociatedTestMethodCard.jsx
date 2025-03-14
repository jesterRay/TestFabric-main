import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { UserContext } from '../../App';
import { concatUrlPath } from '../../helpers/concatUrlPath';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
import fetchMainImageForProduct from '../../helpers/fetch_image';

function AssociatedTestMethodCard({ productId, bgImg, icon, heading, btnText, subHeading, defaultImg, index }) {
    const { setValues } = useContext(UserContext);
    const history = useHistory();

    const [mainImage, setMainImage] = useState(null);
    useEffect(() => {
        const getMainImage = async () => {
            if (!productId) return; // Prevent running for undefined productId
            
            const image = await fetchMainImageForProduct(productId);
            if(image) setMainImage(image);
            else setMainImage(defaultImg);
        };

        getMainImage();
    }, [productId]); // Runs when productId changes

    function handleClick() {
        setValues((pre) => ({ ...pre, productId: productId }));
        const urlPath = concatUrlPath('product-details',heading,productId);
        history.push(urlPath);
    }



    function onError(e) {
        e.target.src = defaultImg;
    }

    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-card" onClick={handleClick}>
                <div className="card-thumb bg-cover">
                    <img style={{ height: "100%", width: "100%", objectFit: "cover" }} 
                        src={mainImage} 
                        onError={onError} 
                        alt={heading} 
                    />
                </div>

                <div className="content">
                    <h3>{`${index+1}. ${heading}`}</h3>
                    <h5>{subHeading}</h5>
                    <a onClick={handleClick} className="read-btn">
                        {btnText} <BsArrowRight style={{ fontSize: '18px' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AssociatedTestMethodCard;
