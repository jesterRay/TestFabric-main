import React, { useEffect, useState } from 'react';
import ServicesOneCard from './ServicesOneCard';
import Icon1 from '../../assets/img/icon/s1.png';
import defaultImage from '../../assets/img/gallery/9.jpg';
import { useApi } from '../../middleware/middleware';
import { useLocation } from 'react-router-dom';
import { extractIdFromUrlPath } from '../../helpers/concatUrlPath';
import { Helmet } from 'react-helmet';
import suCrypt from '../../helpers/suCrypt';

function Services6() {
    const location = useLocation();
    const [categoryId,setCategoryId] = useState(
        extractIdFromUrlPath(location.pathname || '')
    );
    useEffect(()=>{
       setCategoryId(
        extractIdFromUrlPath(location.pathname || '')
       ); 
    },[location.pathname]);
    
    
    const { data, error, isLoading } = useApi('products_by_standards_subcategory', { catID: categoryId });
    const {data: title, error: title_error, isLoading: title_loading} = useApi('standard_by_id', { id: categoryId });


    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${title?.[0].name.slice(0,50) || 'PRODUCT BY STANDARDS SUBCATEGORY' }`}</title>
            </Helmet>
            <section className="services-wrapper services-1 section-bg section-padding">
                <div className="container">
                    <div className="row">
                    </div>
                    <div className="row">
                        {
                            (data && data.length > 0) ? (
                                data.map((item, index) => (
                                    <ServicesOneCard
                                        key={item.methods__ID}
                                        sucategoryId={item.methods__ID}
                                        bgImg={item.img}
                                        defaultImg={defaultImage}
                                        icon={Icon1}
                                        heading={item.methods__Name}
                                        subHeading={item?.methods__Description}
                                        btnText={"See Products"}
                                        index={index}
                                    />
                                ))
                            ) : <h3>No result Found</h3>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services6;
