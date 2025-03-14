import React,{useContext} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { concatUrlPath } from '../../helpers/concatUrlPath';
import suCrypt from '../../helpers/suCrypt';
import fetchMainImageForProduct from '../../helpers/fetch_image';
import { useState, useEffect } from 'react';
function SevicesTwoCard({ productId,thumbnail, icon, heading, text,subheading, defaultImg,productName,index }) {
    const defaultImage = process.env.REACT_APP_IMAGE_URL+"product_images/T0E9PQ==_a.jpg";
    // process.env.REACT_APP_API_URL+"product_images/T0E9PQ==_a.jpg"
    //  "T0E9PQ==_a";
    // const imageUrl = process.env.REACT_APP_IMAGE_URL+"product_images/"+suCrypt()+".jpg";
    const [mainImage, setMainImage] = useState(null);
    useEffect(() => {
        const getMainImage = async () => {
            if (!productId) return; // Prevent running for undefined productId
            
            const image = await fetchMainImageForProduct(productId);
            if(image) setMainImage(image);
            else setMainImage(defaultImage);
        };

        getMainImage();
    }, [productId]); // Runs when productId changes

    const history = useHistory();
    const {setValues} = useContext(UserContext)

   function handleClick() {
        setValues((pre) => ({ ...pre, productId: productId }));
        const url = concatUrlPath('product-details',productName,productId);
        history.push(url); // Add productId as a query parameter
    }

    function onError(e){
        e.target.src = defaultImg
    }
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card"onClick={handleClick} style={{cursor:"pointer", borderRadius:"12px"}} >
                <div
                    className="card-thumb bg-cover"
                    style={{}}
                    // style={{
                    //     backgroundImage: `url(${imageUrl}`||`url(${defaultImage}`,

                    // }}
                >
                    <img style={{height:"100%",width:"100%", borderRadius:" 12px 12px 0 0"}} src={mainImage} onError={(e) => onError(e)}  />
                </div>
                  
                <div className="content" style={{borderRadius:"0 0 12px 12px"}}>
                    {/* <div className="case-cat">
                        <a  onClick={handleClick}>{icon}</a>
                    </div> */}
                    <h3>
                        <a  onClick={handleClick}>{`${index+1}. ${heading}`}</a>
                    </h3>
                    <h6>
                        <a  onClick={handleClick}>Item Number: {subheading}</a>
                    </h6>
                    <p>{text}</p>
                    <a  onClick={handleClick} className="read-btn">
                        View Product <BsArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SevicesTwoCard;
