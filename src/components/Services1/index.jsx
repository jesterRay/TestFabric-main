import React,{useEffect,useState} from 'react';
import ServicesOneCard from './ServicesOneCard';
// import servicesOneData from './servicesOneData';
// import axios from 'axios';

import { useApi } from '../../middleware/middleware';
import icon1 from "../../assets/img/icon/s1.png"
import defaultImage from "../../assets/img/gallery/9.jpg"
import Bg1 from '../../assets/img/home1/eng.jpg';
import suCrypt from '../../helpers/suCrypt';
import { Helmet } from 'react-helmet';

function Services1(props) {
    const { data, error, isLoading } = useApi(props?.apiName, {});

    console.log(data);
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: PRODUCT BY CATEGORY`}</title>
            </Helmet>
            <section className="services-wrapper services-1 section-bg ">
                <div className="container">
                    
                    <div className="row">
                        {data!=null?
                            data?.map((item,index) => (
                            <ServicesOneCard
                                key={item.category__ID}
                                categoryId={item.category__ID}
                                // bgImg={Bg1}
                                //  <img src={'https://smilesdahub.com/tf/apis/cat_images/banner_'+suCrypt(lastWord)+'.jpg'}  /> 

                                alterImg={item.img}
                                bgImg={item.banner_img}
                                // defaultImg={process.env.REACT_APP_IMAGE_URL +'images/product_testfabrics.jpg'}
                                defaultImg={defaultImage}
                                icon={icon1}
                                index={index+1}
                                heading={item.category__Name}
                                btnText="View Subcategories"
                            />
                            
                        ))
                        :<></>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services1;
