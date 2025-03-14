import React from 'react';
import ServicesOneCard from './ServicesOneCard';
// import servicesOneData from './servicesOneData';
// import axios from 'axios';

import { useApi } from '../../middleware/middleware';
import icon1 from "../../assets/img/icon/s1.png"
import { Helmet } from 'react-helmet';

function Services5(props) {
    const { data, error, isLoading } = useApi(props?.apiName, {});
    
    console.log(data);

    

    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: PRODUCTS BY STANDARDS`}</title>
            </Helmet>
            <section className="services-wrapper services-1 section-bg section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="section-title text-center">
                                <span>{props?.heading1}</span>
                                <p>{props?.heading2}</p>
                                <h1>{props?.heading3}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {data !== null ?
                            data?.map((item,index) => (
                            <ServicesOneCard
                                key={item.standards__ID}
                                categoryId={item.standards__ID}
                                bgImg={item.img}
                                defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                icon={icon1}
                                heading={item.standards__Name}
                                btnText="View Subcategories"
                                index={index}
                            />
                            
                        ))
                        :<></>}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services5;
