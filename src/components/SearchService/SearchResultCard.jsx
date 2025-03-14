import React,{useContext, useEffect, useState} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';
import { concatUrlPath } from '../../helpers/concatUrlPath';
import suCrypt from '../../helpers/suCrypt';
import fetchMainImageForProduct from '../../helpers/fetch_image';

function SearchResultCard({ productId,thumbnail, icon, heading, text,subheading, defaultImg,onHide,searchType }) {

    const defaultImage = process.env.REACT_APP_IMAGE_URL+"product_images/T0E9PQ==_a.jpg";
    // process.env.REACT_APP_API_URL+"product_images/T0E9PQ==_a.jpg"
    //  "T0E9PQ==_a";

    const [mainImage, setMainImage] = useState(null);
    useEffect(() => {
        if(searchType === 2){
            const getMainImage = async () => {
                if (!productId) return; // Prevent running for undefined productId
                
                const image = await fetchMainImageForProduct(productId);
                if(image) setMainImage(image);
                else setMainImage(defaultImage);
            };
    
            getMainImage();
        }
    }, [searchType,productId]); // Runs when productId changes



    function getImgFolder(){
        if(searchType===2){
            return "product_images/"
        }
        else if(searchType===3 || searchType===5){
            return "standards_images/"
        }
        else if(searchType===4){
            return "cat_images/"
        }
    }

    const imageUrl = process.env.REACT_APP_IMAGE_URL+getImgFolder()+suCrypt(thumbnail)+".jpg";

    const history = useHistory();
    const {setValues} = useContext(UserContext)

    function handleClick(){
        setValues((pre)=>({...pre,productId:productId}))
        let urlPath = null;
        if(searchType===3){
            urlPath = concatUrlPath('product-by-standards-subcategory',heading,productId);
        }
        else if(searchType===5){
            urlPath = concatUrlPath('products-by-standard-methods',heading,productId);
        }
        else{
            urlPath = concatUrlPath('product-details',heading,productId);            
        }
        history.push(urlPath);
    }

    
    function onError(e){
        e.target.src = defaultImg
    }
    return (
        <div  className="search-result-card py-2" style={{borderBottom:"1px solid #E5E5E5",}}>
            <div className="d-flex "> 
                <div className="search-result-image" >
                    <img
                        data-value = {imageUrl}
                        // data-id = {testData}
                        src={searchType === 2 ? mainImage : imageUrl} 
                        onError={(e) => onError(e)}
                        alt={heading}
                    />
                </div>
                  
                <div className="content px-3 d-flex flex-column align-items-start">
                    <h3>
                        <a  onClick={handleClick}>{heading}</a>
                    </h3>
                    <h6>
                        { subheading && <a  onClick={handleClick}>Item Number: {subheading}</a> }
                    </h6>
                    {text?.trim() && <p>{text}</p>}
                    <a  onClick={handleClick} className="read-btn" >
                        View Product <BsArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SearchResultCard;
