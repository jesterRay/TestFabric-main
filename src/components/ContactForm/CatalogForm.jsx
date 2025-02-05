/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelector from './FormSelector';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { PostApi } from '../../middleware/postMiddleware';
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function CatalogForm({ title, heading }) {
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
            catalog__Company_Name: event.target?.companyName?.value,
            catalog__Company_person: event.target?.contactPerson?.value,
            catalog__Title: event.target?.title?.value,
            catalog__Address: event.target?.street?.value,
            catalog__City: event.target?.city?.value,
            catalog__State: event.target?.state?.value,
            catalog__Zip_Code: event.target?.zipcode?.value,
            catalog__Country: event.target?.country?.value,
            catalog__Tel: event.target?.phone?.value,
            catalog__Fax: event.target?.fax?.value,
            catalog__Email: event.target?.email?.value,
            catalog__Web_Site: event.target?.website?.value,
            catalog__Related_To: event.target?.email?.value,
            catalog__Your_Experience: '',
            catalog__Other: '',
            catalog__Do_you_like_any_sample_swatch: '',
            catalog__Anything_in_specific: event.target?.specific?.value,
            catalog__Product_style: event.target?.style?.value,
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
                                        <label>Your Experience: </label>
                                        <div>
                                            <label htmlFor="currentCatalogYes" style={{width:"50%"}}>Beginner</label>
                                            <input type="radio" id="currentCatalogYes" name="currentCatalog" value="Beginner" style={{width:"50%"}} />
                                            <label htmlFor="currentCatalogNo" style={{width:"50%"}}>Intermediate</label>
                                            <input type="radio" id="currentCatalogNo" name="currentCatalog" value="Intermediate" style={{width:"50%"}} />
                                            <label htmlFor="currentCatalogNo" style={{width:"50%"}}>Expert</label>
                                            <input type="radio" id="currentCatalogExpert" name="currentCatalog" value="Expert" style={{width:"50%"}} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6">
                                        <label>Do you like any sample swatch </label>
                                        <div>
                                        <label htmlFor="creditCard" style={{width:"50%"}}>yes</label>
                                        <input type="radio" id="creditCard" name="paymentOrder" value="yes" style={{width:"50%"}}/>
                                        <label htmlFor="cod" style={{width:"50%"}}>No</label>
                                        <input type="radio" id="cod" name="paymentOrder" value="no" style={{width:"50%"}} />
                                    
                                        </div>
                                    </div>
                                    <ReCAPTCHA

                                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                        onChange={onChange}
                                    />
                                    {/* <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
                                        <GoogleReCaptcha
                                            className="google-recaptcha-custom-class"
                                            refreshReCaptcha={refreshReCaptcha}
                                            onVerify={token => {
                                                setToken(token);
                                            }}
                                        />
                                    </GoogleReCaptchaProvider> */}
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

export default CatalogForm;
