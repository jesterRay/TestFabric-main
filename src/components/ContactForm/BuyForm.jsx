import React, { useRef, useState } from 'react';
import FormInput from './FormInput';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { PostApi } from '../../middleware/postMiddleware';
import ReCAPTCHA from "react-google-recaptcha";
import Header3 from '../Header3';
import Footer3 from '../Footer3';
import PageBanner from '../PageBanner';
import { useApi } from '../../middleware/middleware'; // Assuming your `useApi` hook is here

function BuyForm({ 
    bannerHeading,
    formTitle,
    formHeading,
    url,
    productName,
}) {
    const history = useHistory();
    const [verified, setVerified] = useState(false);

    // Fetch user's IP details
    const {
        data: location,
        error: locationError,
        isLoading: locationLoading,
    } = useApi("get_ip_details", {}); // Update endpoint as needed

    const formRef = useRef();

    const validateForm = () => {
        const inputs = formRef.current.querySelectorAll('.form-group input');
        return Array.from(inputs).every(input => input.value.trim() !== '');
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill in all required fields.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        const data = {
            Country: location?.country || "Unknown", // Add country from fetched IP details
            Contact_Person: event.target?.contactPerson?.value,
            Email: event.target?.email?.value,
            Product_Name: productName,
        };
        
        const res = await PostApi('product-buy', data);

        if (res === 200) {
            toast.success('Order Sent Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
            setTimeout(() => {
                history.push('/');
            }, 2500);
        } else {
            toast.error('Failed to send order. Please fill all required data.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <Header3 />
            <PageBanner 
                currentPage='Buy Now' 
                breadCrumb={true}
                category="Category Name" 
                subcategory="Subcategory Name" 
            />
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="colored"
            />
            <section className="contact-form-wrapper section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-left mb-20">
                            <span>{formTitle}</span>
                            <h1>{formHeading}</h1>
                            <h2>{productName && `Buy: ${productName}`}</h2>
                        </div>
                        <div className="col-12 col-lg-12 pb-4">
                            <div className="contact-form" ref={formRef}>
                                <form onSubmit={onSubmitHandler} className="row contact-form">
                                    <FormInput
                                        type="text"
                                        labelFor="contactPerson"
                                        label="* Name"
                                        placeholder="Enter Your Name"
                                        id="contactPerson"
                                        name="contactPerson"
                                    />
                                    <FormInput
                                        type="email"
                                        labelFor="email"
                                        label="* Email"
                                        placeholder="Enter Your Email"
                                        id="email"
                                        name="email"
                                    />
                                    {/* Hidden input for Country */}
                                    <input
                                        type="hidden"
                                        name="country"
                                        value={location?.country || "Unknown"}
                                    />
                                    {/* Loading or Error States */}
                                    {locationLoading && <p>Loading location...</p>}
                                    {locationError && <p>Error fetching location</p>}

                                    <ReCAPTCHA
                                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                        onChange={() => setVerified(true)}
                                    />
                                    <div className="col-md-12 col-12 text-center pt-2">
                                        <input
                                            className="submit-btn"
                                            type="submit"
                                            value="Submit"
                                            disabled={!verified}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer3 />
        </>
    );
}

export default BuyForm;
