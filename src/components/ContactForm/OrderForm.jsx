import React, { useState } from 'react';
import FormInput from './FormInput';
import FormSelector from './FormSelector';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { PostApi } from '../../middleware/postMiddleware';
import ReCAPTCHA from 'react-google-recaptcha';

function OrderForm({ title, heading, url }) {
    const history = useHistory();
    const [verified, setVerified] = useState(false);

    // ReCAPTCHA verification handler
    function onReCaptchaChange(value) {
        setVerified(!!value);
    }

    const validateForm = (event) => {
        const form = event.target;
        const requiredFields = ['billingFirstName', 'billingLastName', 'billingAddress', 'billingCity', 'billingCountry', 'billingState', 'billingZip', 'billingEmail'];
        return requiredFields.every(field => form[field]?.value);
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        if (!validateForm(event)) {
            toast.error('Please fill in all required fields.');
            return;
        }

        const formData = {
            Billing_Info: {
                FirstName: event.target.billingFirstName.value,
                LastName: event.target.billingLastName.value,
                Company: event.target.billingCompany.value,
                Address: event.target.billingAddress.value,
                City: event.target.billingCity.value,
                Country: event.target.billingCountry.value,
                State: event.target.billingState.value,
                Zip: event.target.billingZip.value,
                Phone: event.target.billingPhone.value,
                Email: event.target.billingEmail.value,
            },
            Shipping_Info: {
                FirstName: event.target.shippingFirstName.value,
                LastName: event.target.shippingLastName.value,
                Company: event.target.shippingCompany.value,
                Address: event.target.shippingAddress.value,
                City: event.target.shippingCity.value,
                Country: event.target.shippingCountry.value,
                State: event.target.shippingState.value,
                Zip: event.target.shippingZip.value,
                Phone: event.target.shippingPhone.value,
                Email: event.target.shippingEmail.value,
            },
            Items: Array.from({ length: 10 }, (_, i) => ({
                Serial: i + 1,
                ItemNumber: event.target[`itemNumber${i + 1}`]?.value || '',
                Quantity: event.target[`quantity${i + 1}`]?.value || '',
                Description: event.target[`description${i + 1}`]?.value || ''
            }))
        };

        const res = await PostApi(url, formData);
        res ? toast.success('Response Sent Successfully') : toast.error('Please Fill all the required data');
        setTimeout(() => history.push('/'), 2500);
    };

    return (
        <>
            <ToastContainer autoClose={3000} />
            <section className="contact-form-wrapper section-padding pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-left mb-20">
                            <h1>{heading}</h1>
                        </div>
                        <form onSubmit={onSubmitHandler} className="row contact-form">
                            {/* Billing Information */}
                            <div className="col-md-6 mb-3">
                                <h2>Billing Information</h2>
                                <FormInput label="* First Name" name="billingFirstName" />
                                <FormInput label="* Last Name" name="billingLastName" />
                                <FormInput label="Company" name="billingCompany" />
                                <FormInput label="* Address" name="billingAddress" />
                                <FormInput label="* City" name="billingCity" />
                                <FormSelector label="* Country" name="billingCountry" />
                                <FormInput label="* State" name="billingState" />
                                <FormInput label="* Zip/Postal Code" name="billingZip" />
                                <FormInput label="Phone Number" name="billingPhone" />
                                <FormInput label="* Email" name="billingEmail" />
                            </div>

                            {/* Shipping Information */}
                            <div className="col-md-6 mb-3">
                                <h2>Shipping Information</h2>
                                <FormInput label="* First Name" name="shippingFirstName" />
                                <FormInput label="* Last Name" name="shippingLastName" />
                                <FormInput label="Company" name="shippingCompany" />
                                <FormInput label="* Address" name="shippingAddress" />
                                <FormInput label="* City" name="shippingCity" />
                                <FormSelector label="* Country" name="shippingCountry" />
                                <FormInput label="* State" name="shippingState" />
                                <FormInput label="* Zip/Postal Code" name="shippingZip" />
                                <FormInput label="Phone Number" name="shippingPhone" />
                                <FormInput label="* Email" name="shippingEmail" />
                            </div>

                            {/* Item Form Table */}
                            <div className="col-12 mt-4">
                                <h2>Item Form</h2>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '10%' }}>Sr#</th>
                                                <th style={{ width: '30%' }}>Item Number</th>
                                                <th style={{ width: '30%' }}>Quantity</th>
                                                <th style={{ width: '30%' }}>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Array.from({ length: 10 }, (_, i) => (
                                                <tr key={i}>
                                                    <td>{i + 1}</td>
                                                    <td>
                                                        <input type="text" name={`itemNumber${i + 1}`} className="form-control" />
                                                    </td>
                                                    <td>
                                                        <input type="text" name={`quantity${i + 1}`} className="form-control" />
                                                    </td>
                                                    <td>
                                                        <input type="text" name={`description${i + 1}`} className="form-control" />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Shipping Method Dropdown */}
                            <div className="col-12 col-md-6 mt-3">
                                <h3>Choose Shipping Method:</h3>
                                <select name="shippingMethod" className="form-select">
                                    <option value="">Please select</option>
                                    <option value="UPS">UPS</option>
                                    <option value="Fedex">Fedex</option>
                                    <option value="DHL">DHL</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            {/* Payment Method Dropdown */}
                            <div className="col-12 col-md-6 mt-3">
                                <h3>Choose Payment Method:</h3>
                                <select name="paymentMethod" className="form-select">
                                    <option value="">Please select</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="COD">COD</option>
                                    <option value="Purchase Order">Purchase Order</option>
                                </select>
                            </div>

                            {/* ReCAPTCHA */}
                            <div className="col-12 my-4 text-center">
                                <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={onReCaptchaChange} />
                            </div>

                            {/* Submit Button */}
                            <div className="col-12 text-center">
                                <button type="submit" className="submit-btn" disabled={!verified}>
                                    Order
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default OrderForm;





// /* eslint-disable jsx-a11y/label-has-associated-control */
// import React, { useState } from 'react';
// import FormInput from './FormInput';
// import FormSelector from './FormSelector';
// import { ToastContainer, toast } from 'react-toastify';
// import { useHistory } from 'react-router-dom';
// import { PostApi } from '../../middleware/postMiddleware';
// import ReCAPTCHA from "react-google-recaptcha";
// import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

// function OrderForm({ title, heading }) {
//     const history = useHistory();
//     const [cityId, setCity] = useState('');
//     const [verfied, setVerifed] = useState(false);
//     const [token, setToken] = useState(null);
//     const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);


//     //recaptcha function
//     function onChange(value) {
//         console.log("Captcha value:", value);
//         setVerifed(true);
//     }
//     const validateForm = (event) => {
//         const form = event.target;
//         const requiredFields = [
//             'contactPerson',
//             'title',
//             'city',
//             'state',
//             'zipcode',
//             'street',
//             'phone',
//             'ext',
//             'fax',
//             'email',
//             'website',
//             'style',
//         ];

//         for (const field of requiredFields) {
//             if (!form[field]?.value) {
//                 return false;
//             }
//         }
//         return true;
//     };

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();

//         if (!validateForm(event)) {
//             toast.error('Please fill in all required fields.', {
//                 position: "top-center",
//                 autoClose: 3000,
//                 hideProgressBar: true,
//                 closeOnClick: true,
//                 pauseOnHover: false,
//                 draggable: false,
//                 progress: undefined,
//                 theme: "colored",
//             });
//             return;
//         }

//         const data = {
//             Fabrics_Swatch_Request__Company_Name: event.target?.companyName?.value,
//             Fabrics_Swatch_Request__Company_person: event.target?.contactPerson?.value,
//             Fabrics_Swatch_Request__Title: event.target?.title?.value,
//             Fabrics_Swatch_Request__Address: event.target?.street?.value,
//             Fabrics_Swatch_Request__City: event.target?.city?.value,
//             Fabrics_Swatch_Request__State: event.target?.state?.value,
//             Fabrics_Swatch_Request__Zip_Code: event.target?.zipcode?.value,
//             Fabrics_Swatch_Request__Country: event.target?.country?.value,
//             Fabrics_Swatch_Request__Tel: event.target?.phone?.value,
//             Fabrics_Swatch_Request__Fax: event.target?.fax?.value,
//             Fabrics_Swatch_Request__Email: event.target?.email?.value,
//             Fabrics_Swatch_Request__Web_Site: event.target?.website?.value,
//             Fabrics_Swatch_Request__Your_Experience: '',
//             Fabrics_Swatch_Request__Related_to: '',
//             Fabrics_Swatch_Request__Other: event.target?.other?.value,
//             Fabrics_Swatch_Request__Do_You_Have_Our_Current_Catalog: false,
//             Fabrics_Swatch_Request__Anything_in_specific: event.target?.specific?.value,
//             Fabrics_Swatch_Request__Product_style: event.target?.style?.value,
//         };

//         const res = await PostApi('testfabrics_fabrics_swatch_request', data);

//         if (res) {
//             toast.success('Response Sent Successfully', {
//                 position: "top-center",
//                 autoClose: 3000,
//                 hideProgressBar: true,
//                 closeOnClick: true,
//                 pauseOnHover: false,
//                 draggable: false,
//                 progress: undefined,
//                 theme: "colored",
//             });
//             setTimeout(() => {
//                 history.push('/');
//             }, 2500);
//         } else {
//             toast.error('Please Fill all the required data ', {
//                 position: "top-center",
//                 autoClose: 3000,
//                 hideProgressBar: true,
//                 closeOnClick: true,
//                 pauseOnHover: false,
//                 draggable: false,
//                 progress: undefined,
//                 theme: "colored",
//             });
//         }
//     };

//     return (
//         <>
//             <ToastContainer
//                 position="top-center"
//                 autoClose={3000}
//                 hideProgressBar
//                 newestOnTop={false}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss={false}
//                 draggable={false}
//                 pauseOnHover={false}
//                 theme="colored"
//             />
//             <section className="contact-form-wrapper section-padding pt-0">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 text-left mb-20">
//                             <span>{title}</span>
//                             <h1>{heading}</h1>
//                         </div>
//                         <div className="col-12 col-lg-12 pb-4">
//                             <div className="contact-form">

//                                 <form onSubmit={onSubmitHandler} className="row conact-form">
//                                     <FormSelector
//                                         type="text"
//                                         labelFor="country"
//                                         label="* Select Your Country"
//                                         placeholder=""
//                                         id="country"
//                                         setCity={setCity}
//                                         cityId={cityId}
//                                         name="country"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="contactPerson"
//                                         label="* Contact Person"
//                                         placeholder="Enter Contact Person"
//                                         id="contactPerson"
//                                         name="contactPerson"
//                                         style={{marginLeft:"0"}}
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="title"
//                                         label="* Title"
//                                         placeholder="Enter Title"
//                                         id="title"
//                                         name="title"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="city"
//                                         label="* City"
//                                         placeholder="Enter City"
//                                         id="city"
//                                         name="city"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="state"
//                                         label="* State"
//                                         placeholder="Enter State"
//                                         id="state"
//                                         name="state"
//                                     />
//                                     <FormInput
//                                         type="number"
//                                         labelFor="zipcode"
//                                         label="* Zip Code:"
//                                         placeholder="Enter Zip Code"
//                                         id="zipcode"
//                                         name="zipcode"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="street"
//                                         label="* Street:"
//                                         placeholder="Enter Street"
//                                         id="street"
//                                         name="street"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="phone"
//                                         label="Phone (optional):"
//                                         placeholder="Enter Number"
//                                         id="phone"
//                                         name="phone"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="ext"
//                                         label="* Ext Applicable:"
//                                         placeholder="Enter Ext Applicable"
//                                         id="ext"
//                                         name="ext"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="fax"
//                                         label="* Fax:"
//                                         placeholder="Enter Fax"
//                                         id="fax"
//                                         name="fax"
//                                     />
//                                     <FormInput
//                                         type="email"
//                                         labelFor="email"
//                                         label="* Email"
//                                         placeholder="Enter Email"
//                                         id="email"
//                                         name="email"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="website"
//                                         label="* Web Site"
//                                         placeholder="Enter Website"
//                                         id="website"
//                                         name="website"
//                                     />

//                                     <FormInput
//                                         type="text"
//                                         labelFor="other"
//                                         label="* Other"
//                                         placeholder=""
//                                         id="other"
//                                         name="other"
//                                     />
//                                     {/*<div className="col-md-6 col-12">*/}
//                                     {/*    <label>Do you have current Catalog: </label>*/}
//                                     {/*    <input type="radio" id="currentCatalogYes" name="currentCatalog" value="yes" />*/}
//                                     {/*    <label htmlFor="currentCatalogYes">Yes</label>*/}
//                                     {/*    <input type="radio" id="currentCatalogNo" name="currentCatalog" value="no" />*/}
//                                     {/*    <label htmlFor="currentCatalogNo">No</label>*/}
//                                     {/*</div>*/}


//                                     <FormInput
//                                         type="text"
//                                         labelFor="specific"
//                                         label="* Anything In Specific: "
//                                         placeholder=""
//                                         id="specific"
//                                         name="specific"
//                                     />
//                                     <FormInput
//                                         type="text"
//                                         labelFor="style"
//                                         label="* Product Style#: "
//                                         placeholder=""
//                                         id="style"
//                                         name="style"
//                                     />
//                                     {/* <div className="col-md-6 col-6">
//                                         <label>Do you have current Catalog: </label>
//                                         <div>
//                                             <label htmlFor="currentCatalogYes" style={{width:"50%"}}>Yes</label>
//                                             <input type="radio" id="currentCatalogYes" name="currentCatalog" value="yes" style={{width:"50%"}} />
//                                             <label htmlFor="currentCatalogNo" style={{width:"50%"}}>No</label>
//                                             <input type="radio" id="currentCatalogNo" name="currentCatalog" value="no" style={{width:"50%"}} />
//                                         </div>
//                                     </div> */}
//                                     <div className="col-md-6 col-12">
//                                             <label >Chose Shipping Method: </label>
//                                             <div>
//                                                 <label htmlFor="html" style={{ width: "50%" }}>UPS</label>
//                                                 <input type="radio" id="html" name="shippingOrder" value="ups" style={{ width: "50%" }} />
//                                                 <label htmlFor="css" style={{ width: "50%" }}>Fedex</label>
//                                                 <input type="radio" id="css" name="shippingOrder" value="fesex" style={{ width: "50%" }} />
//                                                 <label htmlFor="javascript" style={{ width: "50%" }}>Other</label>
//                                                 <input type="radio" id="javascript" name="shippingOrder" value="other" style={{ width: "50%" }} />
//                                             </div>
//                                         </div>
//                                     <div className="col-md-6 col-6">
//                                         <label>Chose Payment Method: </label>
//                                         <div>
//                                         <label htmlFor="creditCard" style={{width:"50%"}}>Credit Card</label>
//                                         <input type="radio" id="creditCard" name="paymentOrder" value="credit card" style={{width:"50%"}}/>
//                                         <label htmlFor="cod" style={{width:"50%"}}>COD</label>
//                                         <input type="radio" id="cod" name="paymentOrder" value="cod" style={{width:"50%"}} />
//                                         <label htmlFor="purchaseOrder" style={{width:"50%"}}>Purchase Order</label>
//                                         <input type="radio" id="purchaseOrder" name="paymentOrder" value="Purchase Order" style={{width:"50%"}} />
//                                         </div>
//                                     </div>
//                                     <ReCAPTCHA

//                                         sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
//                                         onChange={onChange}
//                                     />
//                                     {/* <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
//                                         <GoogleReCaptcha
//                                             className="google-recaptcha-custom-class"
//                                             refreshReCaptcha={refreshReCaptcha}
//                                             onVerify={token => {
//                                                 setToken(token);
//                                             }}
//                                         />
//                                     </GoogleReCaptchaProvider> */}
//                                     <div className="col-md-12 col-12 text-center pt-2">
//                                         <input
//                                             className="submit-btn"
//                                             type="submit"
//                                             disabled={!verfied}
//                                             value="Send Request"
//                                             onSubmit={onSubmitHandler}
//                                         />
//                                     </div>
//                                 </form>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default OrderForm;
