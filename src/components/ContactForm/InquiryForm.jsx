    import React, { useState } from 'react';
    import FormInput from './FormInput';
    import FormSelector from './FormSelector';
    import { ToastContainer, toast } from 'react-toastify';
    import { useHistory } from 'react-router-dom';
    import { PostApi } from '../../middleware/postMiddleware';
    import ReCAPTCHA from "react-google-recaptcha";
    function InquiryForm({ title, heading }) {
        const history = useHistory();
        const [cityId, setCity] = useState('');
        const [verfied, setVerifed] = useState(false);
        function onChange(value) {
            console.log("Captcha value:", value);
            setVerifed(true);
        }
        const validateForm = (event) => {
            const form = event.target;
            const requiredFields = [
                'contactPerson',
                'title',
                'city',
                'state',
                'zipcode',
                'phone',
                'fax',
                'email',
                'website',
                'inquiry',
            ];

            for (const field of requiredFields) {
                if (!form[field]?.value) {
                    return false;
                }
            }
            return true;
        };

        const onSubmitHandler = async (event) => {
            event.preventDefault();

            if (!validateForm(event)) {
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
                inquiry__Country: event.target?.country?.value,
                inquiry__Company_Name: event.target?.companyName?.value,
                inquiry__Company_person: event.target?.contactPerson?.value,
                inquiry__Title: event.target?.title?.value,
                inquiry__Address: event.target?.address?.value,
                inquiry__City: event.target?.city?.value,
                inquiry__State: event.target?.state?.value,
                inquiry__Zip_Code: event.target?.zipcode?.value,
                inquiry__Tel: event.target?.phone?.value,
                inquiry__Fax: event.target?.fax?.value,
                inquiry__Email: event.target?.email?.value,
                inquiry__Web_Site: event.target?.website?.value,
                inquiry__Inquiry: event.target?.inquiry?.value,
            };

            const res = await PostApi('testfabrics_inquiry', data);

            if (res) {
                toast.success('Response Sent Successfully', {
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
                toast.error('Something Went Wrong, Please Try Again!', {
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
                            <div className="col-12 text-left mb-0">
                                <span>{title}</span>
                                <h1>{heading}</h1>
                            </div>
                            <div className="col-12 col-lg-12 pb-4">
                                <div className="contact-form">
                                    <form onSubmit={onSubmitHandler} className="row contact-form">
                                        <FormSelector
                                            type="text"
                                            labelFor="country"
                                            label="Select Your Country"
                                            placeholder=""
                                            id="country"
                                            setCity={setCity}
                                            cityId={cityId}
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="companyName"
                                            label="* Company Name"
                                            placeholder="Enter Company Name"
                                            id="companyName"
                                            name="companyName"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="contactPerson"
                                            label="* Contact Person"
                                            placeholder="Enter Contact Person"
                                            id="contactPerson"
                                            name="contactPerson"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="title"
                                            label="* Title"
                                            placeholder="Enter Title"
                                            id="title"
                                            name="title"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="address"
                                            label="* Address"
                                            placeholder="Enter Address"
                                            id="address"
                                            name="address"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="city"
                                            label="* City"
                                            placeholder="Enter City"
                                            id="city"
                                            name="city"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="state"
                                            label="* State"
                                            placeholder="Enter State"
                                            id="state"
                                            name="state"
                                        />
                                        <FormInput
                                            type="number"
                                            labelFor="zipcode"
                                            label="* Zip Code"
                                            placeholder="Enter Zip Code"
                                            id="zipcode"
                                            name="zipcode"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="phone"
                                            label="* Tel"
                                            placeholder="Enter Phone Number"
                                            id="phone"
                                            name="phone"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="fax"
                                            label="* Fax"
                                            placeholder="Enter Fax Number"
                                            id="fax"
                                            name="fax"
                                        />
                                        <FormInput
                                            type="email"
                                            labelFor="email"
                                            label="* Email"
                                            placeholder="Enter Email"
                                            id="email"
                                            name="email"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="website"
                                            label="* Website"
                                            placeholder="Enter Website"
                                            id="website"
                                            name="website"
                                        />
                                        <FormInput
                                            type="text"
                                            labelFor="inquiry"
                                            label="* Inquiry"
                                            placeholder="Enter Inquiry"
                                            id="inquiry"
                                            name="inquiry"
                                        />
                                       
                                        {/* <div className="col-md-6 col-6">
                                            <label>Method Payment Order:</label>
                                            <input type="radio" id="creditCard" name="paymentOrder" value="Credit Card" />
                                            <label htmlFor="creditCard">Credit Card</label>
                                            <input type="radio" id="cod" name="paymentOrder" value="COD" />
                                            <label htmlFor="cod">COD</label>
                                            <input type="radio" id="purchaseOrder" name="paymentOrder" value="Purchase Order" />
                                            <label htmlFor="purchaseOrder">Purchase Order</label>
                                        </div> */}
                                        {/*<FormInput*/}
                                        {/*    type="text"*/}
                                        {/*    labelFor="other"*/}
                                        {/*    label="Other"*/}
                                        {/*    placeholder="Enter Other"*/}
                                        {/*    id="other"*/}
                                        {/*    name="other"*/}
                                        {/*/>*/}
                                        {/* <div className="col-md-6 col-6">
                                            <label>Do you have current Catalog:</label>
                                            <input type="radio" id="currentCatalogYes" name="currentCatalog" value="Yes" />
                                            <label htmlFor="currentCatalogYes">Yes</label>
                                            <input type="radio" id="currentCatalogNo" name="currentCatalog" value="No" />
                                            <label htmlFor="currentCatalogNo">No</label>
                                        </div> */}
                                        {/* <FormInput
                                            type="text"
                                            labelFor="style"
                                            label="* Product Style#"
                                            placeholder="Enter Product Style#"
                                            id="style"
                                            name="style"
                                        /> */}
                                        {/*<FormInput*/}
                                        {/*    type="text"*/}
                                        {/*    labelFor="specific"*/}
                                        {/*    label="Anything In Specific"*/}
                                        {/*    placeholder="Enter Specific Details"*/}
                                        {/*    id="specific"*/}
                                        {/*    name="specific"*/}
                                        {/*/>*/}
                                        
                                        <ReCAPTCHA
                                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                            onChange={onChange}
                                        />
                                        <div className="col-md-12 col-12 pt-2 text-center">
                                            <input
                                                className="submit-btn"
                                                type="submit"
                                                disabled={!verfied}
                                                value="Submit  Quiry"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    export default InquiryForm;
