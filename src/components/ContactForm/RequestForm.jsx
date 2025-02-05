/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import { ToastContainer, toast } from 'react-toastify';

import { PostApi } from '../../middleware/postMiddleware';
import { useHistory } from 'react-router-dom';

function RequestForm({ title, heading,url }) {
    // STATES
    const [message, setMessage] = useState('');
    const history = useHistory()
    // HANDLER
    const onChangeHandler = (e) => {
        setMessage(e.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log("This is event : ",event.target.email.value)
        const email = event.target?.email?.value;
        const lotNumber = event.target?.lotNumber?.value;
        const productName = event.target?.productName?.value;
        
        

        if(email&& lotNumber && productName){
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
                inquiry__Lot: lotNumber,
                inquiry__Product_Item: productName,
                inquiry__pack_list: ''
                };
                  const res = PostApi(url, data);
                //   console.log("post api res: ",res)
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
                                    labelFor="lotNumber"
                                    label="* Product Lot Number:"
                                    placeholder="Enter lot Number"
                                    id="lotNumber"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="email"
                                    label="* Email Address"
                                    placeholder="Enter Email Address"
                                    id="email"
                                />
                                
                                {/* <FormInput
                                    type="text"
                                    labelFor="phone"
                                    label="Phone Number"
                                    placeholder="Enter Number"
                                    id="phone"
                                /> */}

                                <FormInput
                                    type="text"
                                    labelFor="productName"
                                    label="* Product Name :"
                                    placeholder="Enter product Name"
                                    id="productName"
                                />
                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Send Request"
                                        // onSubmit={onSubmitHandler}
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

export default RequestForm;
