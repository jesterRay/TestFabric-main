import React,{useContext} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';

function ServicesOneCard({ sucategoryId,bgImg, icon, heading, btnText,defaultImg }) {
    const history = useHistory();
    const {setValues} = useContext(UserContext)

    function handleClick(){
        setValues((pre)=>({...pre,sucategoryId:sucategoryId}))
        // console.log("sucategoryId : ",sucategoryId)
        const nameReplace = heading.replaceAll("/", "");
        const urlHeading = nameReplace.replaceAll(" ", "-")+"-"+(sucategoryId);

        history.push(`/product/${urlHeading}`)
    }
    function onError(e){
        e.target.src = defaultImg
    }
    return (
        <div className="col-md-6 col-xl-3 col-12">
            <div className="single-service-item service-1" onClick={handleClick} style={{cursor:"pointer", minHeight:"300px"}}>
                <div
                    className="service-bg bg-cover"
                    // style={{
                    //     backgroundImage: `url(${bgImg})`,
                    // }}
                >
                    <img style={{height:"100%",width:"100%"}} src={bgImg} onError={(e) => onError(e)}  />

                </div>
                {/* <div className="icon">
                    <img src={icon} alt="icon" />
                </div> */}
                <h3>{heading}</h3>
                <a onClick={handleClick}>
                    <span>{btnText}</span>
                    <BsArrowRight style={{ fontSize: '18px' }} />
                </a>
            </div>
        </div>
    );
}

export default ServicesOneCard;
