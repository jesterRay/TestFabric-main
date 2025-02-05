import React,{useEffect,useState} from 'react';
import ServicesOneCard from './ServicesOneCard';
// import servicesOneData from './servicesOneData';
// import axios from 'axios';

import { useApi } from '../../middleware/middleware';
import icon1 from "../../assets/img/icon/s1.png"
import Bg1 from '../../assets/img/home1/eng.jpg';

function Services11(props) {
    const { data, error, isLoading } = useApi(props?.apiName, {});
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_URL+"products_by_categories")
    //     .then(res=>setCategories(res?.data))
    // },[])
    // console.log("datatatata : ",data)
    function suCrypt(id) {
        return btoa(btoa(id));
    }
    return (
        <section className="services-wrapper services-1 section-bg ">
            <div className="container">
                {/* <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            <span>{props?.heading1}</span>
                            <p>{props?.heading2}</p>
                            <h1>{props?.heading3}</h1>
                        </div>
                    </div>
                </div> */}
                {/* <div className="row" style={{marginTop:"20px",width:"100%"}}>
                    <img src={'https://smilesdahub.com/tf/apis/cat_images/banner_'+suCrypt(lastWord)+'.jpg'}  />
                </div> */}
                <div className="row">
                    {data!=null?
                        data?.map((item,index) => (
                        <ServicesOneCard
                            key={item.menu_Id}
                            categoryId={item.menu_Id}
                            // bgImg={Bg1}
                            // {/* <img src={'https://smilesdahub.com/tf/apis/cat_images/banner_'+suCrypt(lastWord)+'.jpg'}  /> */}

                            alterImg={process.env.REACT_APP_IMAGE_URL +'IG_images/'+suCrypt(item?.menu_Id)+'.jpg'}
                            bgImg={process.env.REACT_APP_IMAGE_URL +'IG_images/'+suCrypt(item?.menu_Id)+'.jpg'}
                            defaultImg={process.env.REACT_APP_IMAGE_URL +'images/product_testfabrics.jpg'}
                            icon={icon1}
                            index={index+1}
                            heading={item?.menu_Name}
                            btnText="View Subcategories"
                        />
                        
                    ))
                    :<></>}
                </div>
            </div>
        </section>
    );
}

export default Services11;
