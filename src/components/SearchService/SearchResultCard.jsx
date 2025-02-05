import React,{useContext} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';
import { concatUrlPath } from '../../helpers/concatUrlPath';


function SearchResultCard({ productId,thumbnail, icon, heading, text,subheading, defaultImg,onHide,searchType }) {

    const defaultImage = process.env.REACT_APP_IMAGE_URL+"product_images/T0E9PQ==_a.jpg";
    // process.env.REACT_APP_API_URL+"product_images/T0E9PQ==_a.jpg"
    //  "T0E9PQ==_a";
    function getImgFolder(){
        if(searchType===2){
            return "product_images/"
        }
        else if(searchType===3 || searchType===5){
            return "standards_images/"
        }
        else if(searchType===4){
            return "subcat_images/"
        }
    }

    function suCrypt(id) {
        return btoa(btoa(id.toString()));
    }


    const imageUrl = process.env.REACT_APP_IMAGE_URL+getImgFolder()+suCrypt(thumbnail)+".jpg";

    const history = useHistory();
    const {setValues} = useContext(UserContext)

    function handleClick(){
        setValues((pre)=>({...pre,productId:productId}))
        if(searchType===3){
            history.push(`/product-by-standards-subcategory/${productId}`)
            return;
        }
        else if(searchType===5){
            history.push(`/products-by-standard-methods/${productId}`)
            return;
        }
        const urlPath = concatUrlPath('product-details',heading,productId) 
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
                        src={imageUrl} 
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
