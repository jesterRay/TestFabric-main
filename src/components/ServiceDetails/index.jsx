import React, { useLayoutEffect } from 'react';
import FaqAccordion from '../FaqAccordion';
import DetailsCarousel from './DetailsCarousel';
import DetailsContent from './DetailsContent';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';

function ServiceDetails() {
    // const {values} = useContext(UserContext)
    // const { data, error, isLoading } = useApi('testfabrics_product_detail', {Product_id:values?.productId});

    return (
        <div className="service-details-content-wrapper pl-0 pl-md-4">
            {/* <DetailsCarousel /> */}
            <DetailsContent />

            {/* // data={data} min={data?.[0]?.product__MOQ} */}
            
            {/* <div className="faq-content pl-0 pl-md-4">
                
                <FaqAccordion
                    question="100% Satisfaction Guarantee."
                    answer="Testfabrics is a textile testing materials provider that has been satisfying the textile industry’s needs for over 60 years. Our commitment to quality is reflected in our 100% satisfaction guarantee."
                />
                <FaqAccordion
                    question="Accurate Testing Processes."
                    answer="Testfabrics is a leading provider of textile testing materials that has been serving the textile industry for over 60 years. Our commitment to quality is reflected in our accurate testing processes."
                />
                <FaqAccordion
                    question="35+ Years Of Experience."
                    answer="Testfabrics is a leading provider of textile testing materials that has been serving the textile industry for over 60 years. Our commitment to quality is reflected in our accurate testing processes."
                />
                
            </div> */}
        </div>
    );
}

export default ServiceDetails;
