// CustomerForm1.jsx
import React from 'react';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import CustomerForm from '../components/CustomerComplaint/CustomerForm';
import Footer3 from '../components/Footer3';
import { Helmet } from 'react-helmet';

const CustomerForm1 = () => {
  return (
    <div>
      <Helmet>
        <title>{`Testfabrics.com: CUSTOMER FEEDBACK`}</title>
      </Helmet>
      <Header3 />
      <PageBanner currentPage='Customer Feedback'/>

      {/* Pass bannerHeading, formTitle, and formHeading as props */}
      <CustomerForm
        bannerHeading=""
        formTitle="Fields with (*) are required to be completed."
        formHeading="Customer Feedback"
        url="/submit-complaint"
      />

      <Footer3 />
    </div>
  );
};

export default CustomerForm1;
