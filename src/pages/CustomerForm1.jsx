// CustomerForm1.jsx
import React from 'react';
import Header3 from '../components/Header3';
import PageBanner from '../components/PageBanner';
import CustomerForm from '../components/CustomerComplaint/CustomerForm';
import Footer3 from '../components/Footer3';

const CustomerForm1 = () => {
  return (
    <div>
      <Header3 />
      <PageBanner currentPage='customer complaint'/>

      {/* Pass bannerHeading, formTitle, and formHeading as props */}
      <CustomerForm
        bannerHeading=""
        formTitle="Fields with (*) are required to be completed."
        formHeading="Customer Complaint"
        url="/submit-complaint"
      />

      <Footer3 />
    </div>
  );
};

export default CustomerForm1;
