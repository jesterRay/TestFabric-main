import React from 'react';
import { useLocation } from 'react-router-dom';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import Footer3 from '../components/Footer3';
import ContactPPt from '../components/RequestQoute';
import { Helmet } from 'react-helmet';

const RequestQuote = () => {
  const location = useLocation();
  const { categoryName, subcategoryName, productName } = location?.state || {}; // Destructure all details

  return (
    <div>
      <Helmet>
        <title>{`Testfabrics.com: REQUEST A QUOTE`}</title>
      </Helmet>
      <Header3 />
      
     
      <PageBanner 
     
        currentPage={productName || 'Request a Quote'} 
        breadCrumb={true}
        category={categoryName} 
        subcategory={subcategoryName} 
      />

      <ContactPPt  productDetails={{ categoryName, subcategoryName, productName }} 
        bannerHeading=""
        formTitle="Fields with (*) are required to be completed."
        formHeading="Request a quote" /> 

      <Footer3 />
    </div>
  );
};

export default RequestQuote;
