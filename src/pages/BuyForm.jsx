import React from 'react';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import Footer3 from '../components/Footer3';
import BuyForm from '../components/ContactForm/BuyForm';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const BuyForm1 = () => {
  const location = useLocation();
  const { categoryName, productName } = location?.state || {}; // Destructure productName along with categoryName

  return (
    <div>
      {/* Uncomment if needed */}
      {/* <Header3/> */}
      {/* <PageBanner 
        currentPage={productName || 'Buy Now'} 
        breadCrumb={true}
        category={categoryName} 
        subcategory={subcategoryName} />
      <br /> */}
      <Helmet>
      <title>{`Testfabrics.com: ORDER BUY REQUEST FORM`}</title>
      </Helmet>
      <BuyForm
        formTitle="Fields with (*) are required to be completed."
        // formHeading="Buy Now"
        url="/buy-form"
        productName={productName} // Pass productName as a prop
      />
      {/* <Footer3/> */}
    </div>
  );
}

export default BuyForm1;
