import React,{useContext} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';

function SevicesTwoCard({ productId,thumbnail, icon, heading, text,subheading, defaultImg,onHide,searchType }) {
    const defaultImage = process.env.REACT_APP_IMAGE_URL+"product_images/T0E9PQ==_a.jpg";
    // process.env.REACT_APP_API_URL+"product_images/T0E9PQ==_a.jpg"
    //  "T0E9PQ==_a";
    function getImgFolder(){
        if(searchType==2){
            return "product_images/"
        }
        else if(searchType==3){
            return "standards_images/"
        }
    }
    // history.push(`/product-by-standards-subcategory/${categoryId}`)
    const imageUrl = process.env.REACT_APP_IMAGE_URL+getImgFolder()+suCrypt()+".jpg";


    function suCrypt() {
        return btoa(btoa(thumbnail));
    }
    // console.log("imageeeeee : ",suCrypt(thumbnail))

    const history = useHistory();
    const {setValues} = useContext(UserContext)

    function handleClick(){
        setValues((pre)=>({...pre,productId:productId}))
        if(searchType==3){
            onHide();
            history.push(`/product-by-standards-subcategory/${productId}`)
            return;
        }

        const nameReplace = heading.replaceAll("/", "");
        const urlHeading = nameReplace.replaceAll(" ", "-")+"-"+(productId);
        onHide();
        history.push(`/product-details/${urlHeading}`)
        // history.push(`/product-details/${productId}`)
    }
    function onError(e){
        e.target.src = defaultImg
    }
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    // style={{
                    //     backgroundImage: `url(${imageUrl}`||`url(${defaultImage}`,

                    // }}
                >
                    <img style={{height:"100%",width:"100%"}} src={imageUrl} onError={(e) => onError(e)}  />
                </div>
                  
                <div className="content">
                    <div className="case-cat">
                        <a  onClick={handleClick}>{icon}</a>
                    </div>
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
