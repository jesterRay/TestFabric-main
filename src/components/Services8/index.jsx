import React, {  useContext } from 'react';
import { FaDraftingCompass } from 'react-icons/fa';
import ServicesTwoCard from './SevicesTwoCard';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import { useHistory, useLocation } from 'react-router-dom';
import { extractIdFromUrlPath } from '../../helpers/concatUrlPath';
function Services8() {
    const { values } = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();
    
    // Retrieve categoryId and sucategoryId from context or localStorage
    const categoryId = values?.categoryId || localStorage.getItem('categoryId');
    let sucategoryId = extractIdFromUrlPath(location.pathname || '');
    
    //incase subcategory is not in url 
    if(!sucategoryId)
        sucategoryId = values?.sucategoryId || localStorage.getItem('sucategoryId');
    
    //either subcategory or category id is no available
    if(!sucategoryId || !categoryId) history.goBack();

    const { data, error, isLoading } = useApi('testfabrics_standard_products_by_subcategory', {
        methods: sucategoryId,
        standards: categoryId
    });

    return (
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
                            heading={`${index + 1}. ${data.product__Name}`}
                            text={data?.product__Description?.slice(0, 95) + "..."}
                            subheading={data?.product__Number}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services8;
