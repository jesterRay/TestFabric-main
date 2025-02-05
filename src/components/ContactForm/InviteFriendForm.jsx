/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from './FormInput';
import { ToastContainer, toast } from 'react-toastify';

import { PostApi } from '../../middleware/postMiddleware';
import { useHistory } from 'react-router-dom';

function InviteFriendForm({ title, heading,url }) {
    // STATES
    const [message, setMessage] = useState('check out this page.');
    const history = useHistory()
    // HANDLER
    const onChangeHandler = (e) => {
        setMessage(e.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        // console.log("This is event : ",event.target.userEmail.value)
        const userName = event.target?.userName?.value;
        const userEmail = event.target?.userEmail?.value;
        const friendName = event.target?.friendName?.value;
        const friendEmail = event.target?.friendEmail?.value;
        
        

        if(userName&& userEmail && friendName && friendEmail){
            const data = {
                user_name: userName,
                user_email: userEmail,
                friend_name: friendName,
                friend_email: friendEmail,
                comments: message,
                };
                  const res = PostApi(url, data);
                //   console.log("post api res: ",res)
                  if(res){
                    toast.success('Invitation Sent Successfully', {
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
                                    labelFor="userName"
                                    label="* Your Name:"
                                    placeholder=""
                                    id="userName"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="userEmail"
                                    label="* Your Email Address"
                                    placeholder=""
                                    id="userEmail"
                                />
                                
                                <FormInput
                                    type="text"
                                    labelFor="productName"
                                    label="* Friend Name :"
                                    placeholder=""
                                    id="friendName"
                                />
                                <FormInput
                                    type="email"
                                    labelFor="friendEmail"
                                    label="* Friend Email :"
                                    placeholder=""
                                    id="friendEmail"
                                />

                                <div className="col-md-12 col-12">
                                    <div className="single-personal-info">
                                        <label htmlFor="subject">Add Comments</label>
                                        <textarea
                                            value={message}
                                            onChange={onChangeHandler}
                                            id="subject"
                                            placeholder={message}
                                        />
                                    </div>
                                </div>

                                <div className="col-md-12 col-12 text-center">
                                    <input
                                        className="submit-btn"
                                        type="submit"
                                        value="Invite"
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

export default InviteFriendForm;
