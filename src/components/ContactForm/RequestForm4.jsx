/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import { ToastContainer, toast } from 'react-toastify';

import { PostApi } from '../../middleware/postMiddleware';
import { useHistory } from 'react-router-dom';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';

function RequestForm4({ title, heading,url, input1="Product Lot Number:" }) {
    // STATES
    const [message, setMessage] = useState('');
    const history = useHistory()
    const [token, setToken] = useState(null);
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);


    // HANDLER
    const onChangeHandler = (e) => {
        setMessage(e.target.value);
    };

     const onSubmitHandler = async (event) => {
        event.preventDefault();
  
        const lotNumber2 = event.target?.lotNumber2?.value;
        const productName2 = event.target?.productName2?.value;

        const email =  event.target?.email2?.value;
        

        if(email&& lotNumber2 && productName2 && token){
            const data = {
                inquiry__Country: '',
                inquiry__Company_Name: '',
                inquiry__Company_person: '',
                inquiry__Title: '',
                inquiry__Address: '',
                inquiry__City: '',
                inquiry__State: '',
                inquiry__Zip_Code: '',
                inquiry__Tel: '',
                inquiry__Fax: '',
                inquiry__Email: email,
                inquiry__Web_Site: '',
                inquiry__Inquiry: '',
                inquiry__Lot: lotNumber2,
                inquiry__Product_Item: productName2,
                inquiry__pack_list: ''
                };
                  const res = PostApi(url, data);
                  console.log("post api res: ",res)
                  if(res){
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
                        setTimeout(()=>{
                            history.push('/');
                        },2500)
                  }
                  else{
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
        }else{
            if(!token){
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
            else{
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
                        <h1>{heading}</h1>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="contact-form">
                            <form className="row conact-form" onSubmit={(event)=>onSubmitHandler(event)}>
                            
                                <FormInput
                                    type="text"
                                    labelFor={"lotNumber2"}
                                    label={`* ${input1}`}
                                    placeholder={input1}
                                    id="lotNumber2"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="* Email Address"
                                    placeholder="Enter Email Address"
                                    id="email2"
                                />

                                <FormInput
                                    type="text"
                                    labelFor="productName2"
                                    label="* Product Name :"
                                    placeholder="Enter product Name"
                                    id="productName2"
                                />
                                 <ReCAPTCHA
                                        
                                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                        onChange={()=>setToken(true)}
                                    />

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Send Request"
                                    />
                                </div>
                               
                                {/* <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
                                <GoogleReCaptcha
                                    className="google-recaptcha-custom-class"
                                    refreshReCaptcha={refreshReCaptcha}
                                    onVerify={token => {
                                    setToken(token);
                                    }}
                                />
                            </GoogleReCaptchaProvider> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default RequestForm4;
