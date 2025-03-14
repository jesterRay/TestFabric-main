import React, {  useContext, useEffect, useState } from 'react';
import { FaDraftingCompass } from 'react-icons/fa';
import ServicesTwoCard from './SevicesTwoCard';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import { useHistory, useLocation } from 'react-router-dom';
import { extractIdFromUrlPath } from '../../helpers/concatUrlPath';
import { Helmet } from 'react-helmet';
function Services8() {
    const { values } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    
    // Retrieve categoryId and sucategoryId from context or localStorage
    const categoryId = values?.categoryId || localStorage.getItem('categoryId');
    const [sucategoryId,setSucategoryId] = useState(
        extractIdFromUrlPath(location.pathname || '')
    );
    
    useEffect(()=>{
        // get sub category from url
        setSucategoryId(
            extractIdFromUrlPath(location.pathname || '')
        )
        //incase subcategory is not in url 
        if(!sucategoryId)
            setSucategoryId (
                values?.sucategoryId || 
                localStorage.getItem('sucategoryId')
        );

    },[location.pathname])

    


    const { data, error, isLoading } = useApi('testfabrics_standard_products_by_subcategory', {
        methods: sucategoryId,
        standards: categoryId
    });

    const { data:title, error:title_error, isLoading:title_isLoading } = useApi('method_by_id', {
        id: sucategoryId,
    });

    useEffect(()=>{
        console.log('title: ',title);
    },[title]);
    
    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${title?.[0].name.slice(0,50) || 'PRODUCT BU STANDARDS'}`}</title>
            </Helmet>     
            <section className="our-service-wrapper section-padding mtm-30">
                <div className="container">
                    <div className="row">
                        {data?.length === 0 && <h4>No Products Found</h4>}
                        {data?.map((data, index) => (
                            <ServicesTwoCard
                                key={data.product__ID}
                                productId={data.product__ID}
                                thumbnail={data.product__ID}
                                defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                icon={<FaDraftingCompass />}
                                heading={data.product__Name}
                                text={data?.product__Description?.slice(0, 95) + "..."}
                                subheading={data?.product__Number}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services8;
