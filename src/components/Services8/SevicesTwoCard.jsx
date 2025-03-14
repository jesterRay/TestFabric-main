import React,{useContext} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import { concatUrlPath } from '../../helpers/concatUrlPath';
import { useEffect,useState } from 'react';
import fetchMainImageForProduct from '../../helpers/fetch_image';
function SevicesTwoCard({ productId,thumbnail, icon, heading, text,subheading, defaultImg,index }) {
    
    // const imageUrl = process.env.REACT_APP_IMAGE_URL+"product_images/"+suCrypt()+".jpg";
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

    const history = useHistory();
    const {setValues} = useContext(UserContext)

    function handleClick(){
        setValues((pre)=>({...pre,productId:productId}))
        const urlPath = concatUrlPath("product-details",heading,productId)
        history.push(urlPath)
    }
    function onError(e){
        e.target.src = defaultImg
    }
    return (
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div className="card-thumb bg-cover">
                    <img style={{height:"100%",width:"100%"}} src={mainImage} onError={(e) => onError(e)}  alt={heading}/>
                </div>
                <div className="content">
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
