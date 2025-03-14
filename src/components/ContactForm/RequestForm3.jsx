/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import { ToastContainer, toast } from 'react-toastify';

import { PostApi } from '../../middleware/postMiddleware';
import { useHistory } from 'react-router-dom';
import FormSelector from './FormSelector';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';

function  RequestForm3({ title, heading, url }) {
    // STATES
    const [cityId, setCity] = useState('');
    const [citySelected, setCitySelect] = useState(false)
    const [message, setMessage] = useState('');
    const history = useHistory()
    const [token, setToken] = useState(null);
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [verfied, setVerifed] = useState(false);

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerifed(true);
    }

    // HANDLER
    const onSelectCity = (e) => {

        if (cityId != '') {

            setCitySelect(true);
        }
        else {
            if (citySelected == false) {
                toast.error('Select the City First', {
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
        }
    };


    const onSubmitHandler = (event) => {
        event.preventDefault();

        const companyName = event.target?.companyName?.value;
        if (event.target?.email?.value && event.target?.phone?.value && cityId != '' && event.target?.shippingOrder?.value && token) {
            const data = {
                track_your_order__Company_Name: companyName,
                track_your_order__Contact_Person: event.target?.companyName?.value,
                track_your_order__Title: event.target?.contactPerson?.value,
                hiddCountry: event.target?.title?.value,
                track_your_order__City: event.target?.city?.value,
                track_your_order__State: event.target?.state?.value,
                track_your_order__Zip_code: event.target?.zipcode?.value,
                track_your_order__Street: event.target?.street?.value,
                track_your_order__Tel: event.target?.phone?.value,
                track_your_order__Ext_applicable: event.target?.ext?.value,
                track_your_order__Fax: event.target?.fax?.value,
                track_your_order__Email: event.target?.email?.value,
                track_your_order__Website: event.target?.website?.value,
                track_your_order__Order_placed_date: event.target?.date?.value,
                track_your_order__Quote_number: event.target?.quote?.value,
                track_your_order__Items: event.target?.items?.value,
                track_your_order__Method_payment_order: event.target?.paymentOrder?.value,
                track_your_order__Po_number: event.target?.poNumber?.value,
                track_your_order__Method_Shipping_Order: event.target?.shippingOrder?.value,
                track_your_order__Specify_method_of_shipping: event.target?.shipping?.value,
                track_your_order__method_contact: event.target?.contact?.value
            };
            const res = PostApi(url, data);
            // console.log("post api res: ", res)
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
                }, 2500)
            }
            else {
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
        } else {
            if (!token) {
                toast.error('Please Verify reCAPTCHA.', {
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
            else {
                toast.error('Enter the Values First', {
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
                        <div className="col-12 text-left mb-20">
                            <span>{title}</span>
                            {cityId && <div><h6>Your Order placed country is "{cityId}"</h6></div>}
                            <h1>{heading}</h1>
                        </div>

                        <div className="col-12 col-lg-12">
                            <div className="contact-form">
                                {!citySelected ?
                                    <form className="row conact-form pb-4" onSubmit={(event) => onSelectCity(event)}>
                                        <FormSelector
                                            type="text"
                                            labelhtmlFor="country"
                                            label="* Select Your Country"
                                            placeholder=""
                                            id="country"
                                            setCity={setCity}
                                            cityId={cityId}
                                            style={{ width: "100%" }}
                                        />
                                        <div className="col-md-12 col-12 text-center">
                                            <input
                                                className="submit-btn"
                                                type="submit"
                                                value="Select Country"

                                            />
                                        </div>
                                    </form>
                                    :
                                    <form action="" className="row conact-form" onSubmit={onSubmitHandler}>
                                        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
                                            <GoogleReCaptcha
                                                className="google-recaptcha-custom-class"
                                                refreshReCaptcha={refreshReCaptcha}
                                                onVerify={token => {
                                                    setToken(token);
                                                }}
                                            />
                                        </GoogleReCaptchaProvider>
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="companyName:"
                                            label="* Company Name:"
                                            placeholder="Company Name"
                                            id="companyName"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="contactPerson"
                                            label="* Contact Person"
                                            placeholder="Enter Contact Person"
                                            id="contactPerson"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Title"
                                            label="* Title"
                                            placeholder="Enter Title"
                                            id="title"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="city"
                                            label="* City"
                                            placeholder="Enter City"
                                            id="city"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="State"
                                            label="* State"
                                            placeholder="Enter State"
                                            id="state"
                                        />
                                        <FormInput
                                            type="number"
                                            labelhtmlFor="Zip Code"
                                            label="* Zip Code:"
                                            placeholder="Enter Zip Code"
                                            id="zipcode"
                                        />
                                        <FormInput
                                            type="street"
                                            labelhtmlFor="Street"
                                            label="* Street:"
                                            placeholder="Enter Street"
                                            id="street"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="phone"
                                            label="* Tel:"
                                            placeholder="Enter Number"
                                            id="phone"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Ext Applicable"
                                            label="* Ext Applicable:"
                                            placeholder="Enter Ext Applicable"
                                            id="ext"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Fax"
                                            label="* Fax:"
                                            placeholder="Enter Fax"
                                            id="fax"
                                        />
                                        <FormInput
                                            type="email"
                                            labelhtmlFor="email"
                                            label="* Eamil"
                                            placeholder="Enter Email"
                                            id="email"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="web site"
                                            label="* Web Site"
                                            placeholder="Enter Website"
                                            id="website"
                                        />
                                        <FormInput
                                            type="date"
                                            labelhtmlFor="date"
                                            label="* Order Placed Date:"
                                            placeholder="Order Placed Date:"
                                            id="date"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Quote Number:"
                                            label="* Quote Number:"
                                            placeholder="Enter Quote Number:"
                                            id="quote"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Items"
                                            label="*  Items:"
                                            placeholder="Enter Items"
                                            id="items"
                                        />


                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Po Number"
                                            label="*  Po Number:"
                                            placeholder="Enter Po Number"
                                            id="poNumber"
                                        />

                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Specify Method Of Shipping:"
                                            label="* Specify Method Of Shipping:"
                                            placeholder="Enter Shipping Method"
                                            id="shipping"
                                        />
                                        <FormInput
                                            type="text"
                                            labelhtmlFor="Method Contact:"
                                            label="* Method Contact:"
                                            placeholder="Enter Method Contact:"
                                            id="contact"
                                        />
                                        <div className="col-md-6 col-6">
                                            <div className='row'>
                                                <label >Method Payment Order: </label>
                                                <div>
                                                    <label htmlhtmlFor="credietCard" style={{ width: "50%" }}>Credit Card</label>
                                                    <input type="radio" id="credietCard" name="paymentOrder" value="crediet card" style={{ width: "50%" }} />
                                                    <label htmlFor="css" style={{ width: "50%" }}>COD</label>
                                                    <input type="radio" id="css" name="paymentOrder" value="cod" style={{ width: "50%" }} />
                                                    <label htmlFor="javascript" style={{ width: "50%" }}>Purchase Order</label>
                                                    <input type="radio" id="javascript" name="paymentOrder" value="Purchase Order" style={{ width: "50%" }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-12">
                                            <label >Method Shipping Order: </label>
                                            <div>
                                                <label htmlFor="html" style={{ width: "50%" }}>UPS</label>
                                                <input type="radio" id="html" name="shippingOrder" value="ups" style={{ width: "50%" }} />
                                                <label htmlFor="css" style={{ width: "50%" }}>Fedex</label>
                                                <input type="radio" id="css" name="shippingOrder" value="fesex" style={{ width: "50%" }} />
                                                <label htmlFor="javascript" style={{ width: "50%" }}>Other</label>
                                                <input type="radio" id="javascript" name="shippingOrder" value="other" style={{ width: "50%" }} />
                                            </div>
                                        </div>
                                        <ReCAPTCHA

                                            sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                            onChange={onChange}
                                        />

                                        <div className="col-md-12 col-12 text-center">
                                            <input
                                                className="submit-btn"
                                                type="submit"
                                                value="Track Order"
                                            // onSubmit={onSubmitHandler}
                                            />
                                        </div>
                                    </form>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RequestForm3;
