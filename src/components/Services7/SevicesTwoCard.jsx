import React,{useContext, useState} from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link,useHistory } from "react-router-dom";
import { UserContext } from '../../App';
import axios from 'axios';
import EventsModel from './model';

function SevicesTwoCard({ productId,thumbnail, icon, heading, text,subheading, evenUrl }) {
    const defaultImage = process.env.REACT_APP_IMAGE_URL+"product_images/T0E9PQ==_a.jpg";
    // process.env.REACT_APP_API_URL+"product_images/T0E9PQ==_a.jpg"
    //  "T0E9PQ==_a";
    const imageUrl = process.env.REACT_APP_IMAGE_URL+"events_images/"+suCrypt()+".jpg";

    function suCrypt() {
        return btoa(btoa(thumbnail));
    }
    const [model,setModel] = useState({show:false,data:{}})
    return (
    <>
        <EventsModel 
            show={model.show}
            onHide={() => setModel((pre)=>({...pre,show:false}))}
            data={model?.data}
            title={"title"}
            thumbnail={imageUrl}
        />
        <div className="col-md-6 col-xl-4 col-12">
            <div className="single-service-card">
                <div
                    className="card-thumb bg-cover"
                    style={{
                        backgroundImage: `url(${imageUrl}`||`url(${defaultImage}`,

                    }}
                />
                  
                <div className="content">
                    {/* <div className="case-cat">
                        <a  onClick={handleClick}>{icon}</a>
                    </div> */}
                    <h3>
                        <a href={evenUrl} target="_blank">{heading}</a>
                    </h3>
                    <h6>
                        <a> {subheading}</a>
                    </h6>
                    <p>{text?.slice(0, 95)+"..."}<div style={{color:"blue",cursor:"pointer"}} onClick={(pre)=>setModel({show:!pre.show,data:{event:heading,discroption:text,evenUrl:evenUrl}})}>More</div></p>
                    {/* <a  onClick={handleClick} className="read-btn">
                        View Product <BsArrowRight />
                    </a> */}
                </div>
            </div>
        </div>
    </>
    );
}

export default SevicesTwoCard;
