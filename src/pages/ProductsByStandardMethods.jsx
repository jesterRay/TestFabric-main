import React, { useEffect, useState } from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../components/PageBanner';
import AssociatedTestMethodCard from '../components/AssociatedTestMethodCard/AssociatedTestMethodCard';
import Icon1 from '../assets/img/icon/s1.png';
import defaultImage from '../assets/img/gallery/9.jpg';

import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import { useParams } from 'react-router-dom';
import { useApi } from '../middleware/middleware';
import { extractIdFromUrlPath } from '../helpers/concatUrlPath';
import { useLocation } from 'react-router-dom';
import suCrypt from '../helpers/suCrypt';
import { Helmet } from 'react-helmet';
function ProductsByStandardMethods() {
    const location = useLocation();
    const [categoryId,setCategoryId] = useState(
        extractIdFromUrlPath(location.pathname || '')
    );

    useEffect(()=>{
        setCategoryId(
            extractIdFromUrlPath(location.pathname || '')
        );
    },[location.pathname]);

    const { data, error, isLoading } = useApi('products_by_standard_method', { catID: categoryId });
    const { data: title, error: title_error, isLoading: title_isLoading } = useApi('method_by_id', { id: categoryId });

    

    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${title?.[0]?.name?.slice(0,50) || "PRODUCT BY STANDARDS METHOD"}`}</title>
            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} currentPage="Standard Methods" heading="Standard Methods"  />
            <section className="services-wrapper services-1 section-bg section-padding">
                <div className="container">
                    <div className="row">
                        {
                            (data && data.length > 0) ? (
                                data.map((item, index) => (
                                    <AssociatedTestMethodCard
                                        key={item.product__ID}
                                        productId={item.product__ID}
                                        bgImg={process.env.REACT_APP_IMAGE_URL + 'product_images/' + suCrypt(item.product__ID) + '.jpg'}
                                        defaultImg={defaultImage}
                                        icon={Icon1}
                                        heading={item.product__Name}
                                        subHeading={item?.product__Description.slice(0,60)+"..."}
                                        btnText={"See Products"}
                                        index={index}
                                    />
                                ))
                            ) : <h3>No result Found</h3>
                        }
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );

    
}

export default ProductsByStandardMethods;

