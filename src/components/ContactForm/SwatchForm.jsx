/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelector from './FormSelector';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { PostApi } from '../../middleware/postMiddleware';
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function SwatchForm({ title, heading }) {
    const history = useHistory();
    const [cityId, setCity] = useState('');
    const [verfied, setVerifed] = useState(false);
    const [token, setToken] = useState(null);
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);


    //recaptcha function
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
            'street',
            'phone',
            'ext',
            'fax',
            'email',
            'website',
            'style',
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
            Fabrics_Swatch_Request__Company_Name: event.target?.companyName?.value,
            Fabrics_Swatch_Request__Company_person: event.target?.contactPerson?.value,
            Fabrics_Swatch_Request__Title: event.target?.title?.value,
            Fabrics_Swatch_Request__Address: event.target?.street?.value,
            Fabrics_Swatch_Request__City: event.target?.city?.value,
            Fabrics_Swatch_Request__State: event.target?.state?.value,
            Fabrics_Swatch_Request__Zip_Code: event.target?.zipcode?.value,
            Fabrics_Swatch_Request__Country: event.target?.country?.value,
            Fabrics_Swatch_Request__Tel: event.target?.phone?.value,
            Fabrics_Swatch_Request__Fax: event.target?.fax?.value,
            Fabrics_Swatch_Request__Email: event.target?.email?.value,
            Fabrics_Swatch_Request__Web_Site: event.target?.website?.value,
            Fabrics_Swatch_Request__Your_Experience: '',
            Fabrics_Swatch_Request__Related_to: '',
            Fabrics_Swatch_Request__Other: event.target?.other?.value,
            Fabrics_Swatch_Request__Do_You_Have_Our_Current_Catalog: false,
            Fabrics_Swatch_Request__Anything_in_specific: event.target?.specific?.value,
            Fabrics_Swatch_Request__Product_style: event.target?.style?.value,
        };

        const res = await PostApi('testfabrics_fabrics_swatch_request', data);

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
            toast.error('Please Fill all the required data ', {
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
                        <div className="col-12 text-left mb-20">
                            <span>{title}</span>
                            <h1>{heading}</h1>
                        </div>
                        <div className="col-12 col-lg-12 pb-4">
                            <div className="contact-form">

                                <form onSubmit={onSubmitHandler} className="row conact-form">
                                    <FormSelector
                                        type="text"
                                        labelFor="country"
                                        label="* Select Your Country"
                                        placeholder=""
                                        id="country"
                                        setCity={setCity}
                                        cityId={cityId}
                                        name="country"
                                    />
                                    <FormInput
                                        type="text"
                                        labelFor="contactPerson"
                                        label="* Contact Person"
                                        placeholder="Enter Contact Person"
                                        id="contactPerson"
                                        name="contactPerson"
                                        style={{marginLeft:"0"}}
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
                                        label="* Zip Code:"
                                        placeholder="Enter Zip Code"
                                        id="zipcode"
                                        name="zipcode"
                                    />
                                    <FormInput
                                        type="text"
                                        labelFor="street"
                                        label="* Street:"
                                        placeholder="Enter Street"
                                        id="street"
                                        name="street"
                                    />
                                    <FormInput
                                        type="text"
                                        labelFor="phone"
                                        label="* Tel:"
                                        placeholder="Enter Number"
                                        id="phone"
                                        name="phone"
                                    />
                                    <FormInput
                                        type="text"
                                        labelFor="ext"
                                        label="* Ext Applicable:"
                                        placeholder="Enter Ext Applicable"
                                        id="ext"
                                        name="ext"
                                    />
                                    <FormInput
                                        type="text"
                                        labelFor="fax"
                                        label="* Fax:"
                                        placeholder="Enter Fax"
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
                                        label="* Web Site"
                                        placeholder="Enter Website"
                                        id="website"
                                        name="website"
                                    />

                                    <FormInput
                                        type="text"
                                        labelFor="other"
                                        label="* Other"
                                        placeholder=""
                                        id="other"
                                        name="other"
                                    />
                                    {/*<div className="col-md-6 col-12">*/}
                                    {/*    <label>Do you have current Catalog: </label>*/}
                                    {/*    <input type="radio" id="currentCatalogYes" name="currentCatalog" value="yes" />*/}
                                    {/*    <label htmlFor="currentCatalogYes">Yes</label>*/}
                                    {/*    <input type="radio" id="currentCatalogNo" name="currentCatalog" value="no" />*/}
                                    {/*    <label htmlFor="currentCatalogNo">No</label>*/}
                                    {/*</div>*/}


                                    <FormInput
                                        type="text"
                                        labelFor="specific"
                                        label="* Anything In Specific: "
                                        placeholder=""
                                        id="specific"
                                        name="specific"
                                    />
                                    <FormInput
                                        type="text"
                                        labelFor="style"
                                        label="* Product Style#: "
                                        placeholder=""
                                        id="style"
                                        name="style"
                                    />
                                    <div className="col-md-6 col-6">
                                        <label>Do you have current Catalog: </label>
                                        <div>
                                            <label htmlFor="currentCatalogYes" style={{width:"50%"}}>Yes</label>
                                            <input type="radio" id="currentCatalogYes" name="currentCatalog" value="yes" style={{width:"50%"}} />
                                            <label htmlFor="currentCatalogNo" style={{width:"50%"}}>No</label>
                                            <input type="radio" id="currentCatalogNo" name="currentCatalog" value="no" style={{width:"50%"}} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <label>Method Payment Order: </label>
                                        <div>
                                        <label htmlFor="creditCard" style={{width:"50%"}}>Credit Card</label>
                                        <input type="radio" id="creditCard" name="paymentOrder" value="credit card" style={{width:"50%"}}/>
                                        <label htmlFor="cod" style={{width:"50%"}}>COD</label>
                                        <input type="radio" id="cod" name="paymentOrder" value="cod" style={{width:"50%"}} />
                                        <label htmlFor="purchaseOrder" style={{width:"50%"}}>Purchase Order</label>
                                        <input type="radio" id="purchaseOrder" name="paymentOrder" value="Purchase Order" style={{width:"50%"}} />
                                        </div>
                                    </div>
                                    {/* <ReCAPTCHA

                                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                        onChange={onChange}
                                    /> */}
                                    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
                                        <GoogleReCaptcha
                                            className="google-recaptcha-custom-class"
                                            refreshReCaptcha={refreshReCaptcha}
                                            onVerify={token => {
                                                setToken(token);
                                            }}
                                        />
                                    </GoogleReCaptchaProvider>
                                    <div className="col-md-12 col-12 text-center pt-2">
                                        <input
                                            className="submit-btn"
                                            type="submit"
                                            disabled={!verfied}
                                            value="Send Request"
                                            onSubmit={onSubmitHandler}
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

export default SwatchForm;
