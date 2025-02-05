import React,{useContext} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function SevicesTwoCard({ productId,thumbnail, icon, heading, text,subheading, defaultImg, }) {
    const defaultImage = process.env.REACT_APP_IMAGE_URL+"product_images/T0E9PQ==_a.jpg";
    // process.env.REACT_APP_API_URL+"product_images/T0E9PQ==_a.jpg"
    //  "T0E9PQ==_a";
    const imageUrl = process.env.REACT_APP_IMAGE_URL+"product_images/"+suCrypt()+".jpg";

    const location= useLocation()
    const pathData = location?.pathname;

    function suCrypt() {
        return btoa(btoa(thumbnail));
    }
    // console.log("imageeeeee : ",suCrypt(thumbnail))

    
    const words = pathData?.split("-");
    // Get the last word that starts with a hyphen
    const lastHyphenatedWord = words?.reverse()?.find(word => word.startsWith("-"));
    // If no word starting with hyphen is found, handle it gracefully
    const lastWord = words[0];

    const history = useHistory();
    const {setValues} = useContext(UserContext)

   function handleClick() {
    setValues((pre) => ({ ...pre, productId: productId }));
    const urlHeading = heading.replaceAll(" ", "-") + "-" + productId;
    history.push(`/product-details/${productId}`); // Add productId as a query parameter
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
                    <img style={{height:"100%",width:"100%", borderRadius:" 12px 12px 0 0"}} src={imageUrl} onError={(e) => onError(e)}  />
                </div>
                  
                <div className="content" style={{borderRadius:"0 0 12px 12px"}}>
                    {/* <div className="case-cat">
                        <a  onClick={handleClick}>{icon}</a>
                    </div> */}
                    <h3>
                        <a  onClick={handleClick}>{heading}</a>
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
