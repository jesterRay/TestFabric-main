// // import React, { useState } from "react";
// // import {
// //   Stepper,
// //   Step,
// //   StepLabel,
// //   Button,
// //   TextField,
// //   FormControl,
// //   Dialog,
// //   DialogActions,
// //   DialogContent,
// //   DialogContentText,
// //   DialogTitle,
// // } from "@material-ui/core";
// // import ReCAPTCHA from "react-google-recaptcha";
// // import { BsArrowRight } from "react-icons/bs";
// // import FormInput from "../ContactForm/FormInput";
// // import { ToastContainer, toast } from 'react-toastify';
// // import { Link } from "react-router-dom";

// // const ContactPPt = ({ productDetails }) => {
// //   const { productName, categoryName, subcategoryName } = productDetails || {};
  
// //   const [formValues, setFormValues] = useState({
// //     firstName: "",
// //     company: "",
// //     email: "",
// //     telephone: "",
// //   });
// //   const [modalOpen, setModalOpen] = useState(false);
// //   const [verfied, setVerifed] = useState(false);

// //   const handleModalOpen = () => setModalOpen(true);
// //   const handleModalClose = () => setModalOpen(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormValues({
// //       ...formValues,
// //       [name]: value,
// //     });
// //   };

// //   const onChange = (value) => setVerifed(true);

// //   return (
// //     <div style={{ padding: "20px", maxWidth: "700px", margin: "0 auto" }}>
// //       <Stepper activeStep={0} alternativeLabel>
// //         <Step key="Contact Details">
// //           <StepLabel>Contact Details</StepLabel>
// //         </Step>
// //       </Stepper>

// //       <div>
// //         {/* <FormControl fullWidth margin="normal">
// //           <strong style={{ position: "relative", top: "-8px" }}>Product</strong>
// //           <TextField
// //             value={productName || "No product selected"} // Display the product name
// //             variant="outlined"
// //             fullWidth
// //             disabled 
// //           />
// //         </FormControl> */}

// //         <div className="col-12 col-lg-12">
// //                         <div className="contact-form">
// //                             <form className="row conact-form">
                            
                                
// //                                 <FormInput
// //                                     type="text"
// //                                     labelFor="Name"
// //                                     label="* Name"
// //                                     placeholder="Enter Name"
// //                                     id="email2"
// //                                 />

// //                                 <FormInput
// //                                     type="text"
// //                                     labelFor="Email"
// //                                     label="* Email :"
// //                                     placeholder="Enter Email"
// //                                     id="Email"
// //                                 />
// //                                     <FormInput
// //                                         type="text"
// //                                         labelFor="Comapny"
// //                                         label="* Comapny :"
// //                                         placeholder="Enter Comapny Name"
// //                                         id="Email"
// //                                     />
// //                                 <FormInput
// //                                     type="text"
// //                                     labelFor="Mobile"
// //                                     label="* Mobile :"
// //                                     placeholder="Enter Mobile "
// //                                     id="Email"
// //                                 />
// //                                  <ReCAPTCHA
                                        
// //                                         sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
// //                                         // onChange={()=>setToken(true)}
// //                                     />

// // <div className="col-md-12 col-12 text-center" style={{ marginTop: "20px" }}>
// //             <Button
// //               variant="contained"
// //               color="primary"
// //               type="submit"
// //               className="submit-btn"
// //               fullWidth
// //               onClick={handleModalOpen} // Trigger modal
// //             >
// //               Submit
// //             </Button>
// //           </div>
                               
// //                                 {/* <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
// //                                 <GoogleReCaptcha
// //                                     className="google-recaptcha-custom-class"
// //                                     refreshReCaptcha={refreshReCaptcha}
// //                                     onVerify={token => {
// //                                     setToken(token);
// //                                     }}
// //                                 />
// //                             </GoogleReCaptchaProvider> */}
// //                             </form>
// //                         </div>
// //                     </div>
// //       </div>

// //       {/* Modal */}
// //       <Dialog
// //         open={modalOpen}
// //         onClose={handleModalClose}
// //         aria-labelledby="form-dialog-title"
// //         fullWidth
// //         maxWidth="sm"
// //         style={{
// //           borderRadius: "15px", 
// //           border: "3px solid", 
// //           borderImageSlice: 1,
// //           borderWidth: "3px",
// //           borderImageSource: "linear-gradient(45deg, #f3ec78, #af4261)",
// //           boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
// //           overflow: "hidden",
// //         }}
// //         PaperProps={{
// //           style: {
// //             borderRadius: "15px", 
// //             position: "relative",
// //             top: "50%",
// //             transform: "translateY(-150%)", 
// //           },
// //         }}
// //       >
// //         <DialogTitle id="form-dialog-title" style={{ padding: "30px 20px 0" }}>
// //           <h3 style={{ color: "#333", fontWeight: "bold", fontSize: "1.8rem", margin: "0" }}>
// //             Thank you for contacting Testfabrics
// //           </h3>
// //         </DialogTitle>
// //         <DialogContent style={{ padding: "20px" }}>
// //           <DialogContentText>
// //             <h4 style={{ fontSize: "1.2rem", color: "#666", marginTop: "15px", marginBottom: "30px", textAlign: "center" }}>
// //               One of our product experts will contact you shortly.
// //             </h4>
// //           </DialogContentText>
// //         </DialogContent>
// //         <DialogActions style={{ justifyContent: "space-between", padding: "15px 30px 30px" }}>
// //           <Button
// //             onClick={handleModalClose}
// //             style={{
// //               color: "#fff",
// //               backgroundColor: "#ff5f6d", 
// //               backgroundImage: "linear-gradient(45deg, #ff5f6d, #ffc371)",
// //               padding: "10px 20px",
// //               borderRadius: "30px", 
// //               textTransform: "none",
// //               fontSize: "1rem",
// //             }}
// //           >
// //             Close
// //           </Button>
// //           <Link to="/product/:id" style={{ textDecoration: "none" }}>
// //             <Button
// //               color="primary"
// //               variant="contained"
// //               style={{
// //                 backgroundColor: "#3C62A9",
// //                 padding: "10px 20px",
// //                 borderRadius: "30px",
// //                 textTransform: "none",
// //                 fontSize: "1rem",
// //               }}
// //             >
// //               Continue browsing
// //               <BsArrowRight style={{ fontSize: "20px", marginLeft: "10px" }} />
// //             </Button>
// //           </Link>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // };

// // export default ContactPPt;




// /* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import FormInput from '../ContactForm/FormInput';
import { ToastContainer, toast } from 'react-toastify';
import { Button } from '@material-ui/core';
import { PostApi } from '../../middleware/postMiddleware';
import { useHistory } from 'react-router-dom';
import { GoogleReCaptcha, GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ReCAPTCHA from 'react-google-recaptcha';
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,

  TextField,
  FormControl,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
function ContactPPt({ title, heading,url, input1="Product Lot Number:" ,   bannerHeading,
  formTitle,
  formHeading,}) {
    // STATES
    const [message, setMessage] = useState('');
    const history = useHistory()
    const [token, setToken] = useState(null);
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => setModalOpen(true);
    const handleModalClose = () => setModalOpen(false);
  //    const handleChange = (e) => {
  //       const { name, value } = e.target;
  //     setFormValues({
  //      ...formValues,
  //         [name]: value,
  //  });
  //      };

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
                      <h2>{bannerHeading}</h2>
                        <span>{formTitle}</span>
                        <h1>{formHeading}</h1>
                    </div>

                    <div className="col-12 col-lg-12">
                        <div className="contact-form">
                            <form className="row conact-form" onSubmit={(event)=>onSubmitHandler(event)}>
                            
                                <FormInput
                                    type="text"
                                    labelFor="Name"
                                    label="* Enter Name"
                                    placeholder="Enter Name"
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
                                    labelFor="Company"
                                    label="* Company  :"
                                    placeholder="Enter Company Name"
                                    id="productName2"
                                />
                                <FormInput
                                    type="text"
                                    labelFor="Phone"
                                    label=" Phone  (optional): "
                                    placeholder=""
                                    id="productName2"
                                />
                                 <ReCAPTCHA
                                        
                                        sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                                        onChange={()=>setToken(true)}
                                    />

<div className="col-md-12 col-12 text-center" style={{ marginTop: "20px" }}>
         <Button
              variant="contained"
              color="primary"
            type="submit"
             className="submit-btn"
            fullWidth
              onClick={handleModalOpen} // Trigger modal
            >
               Submit
            </Button>
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

            <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="sm"
        style={{
          borderRadius: "15px", 
          border: "3px solid", 
          borderImageSlice: 1,
          borderWidth: "3px",
          borderImageSource: "linear-gradient(45deg, #f3ec78, #af4261)",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
        PaperProps={{
          style: {
            borderRadius: "15px", 
            position: "relative",
            top: "50%",
            transform: "translateY(-150%)", 
          },
        }}
      >
        <DialogTitle id="form-dialog-title" style={{ padding: "30px 20px 0" }}>
          <h3 style={{ color: "#333", fontWeight: "bold", fontSize: "1.8rem", margin: "0" }}>
            Thank you for contacting Testfabrics
          </h3>
        </DialogTitle>
        <DialogContent style={{ padding: "20px" }}>
          <DialogContentText>
            <h4 style={{ fontSize: "1.2rem", color: "#666", marginTop: "15px", marginBottom: "30px", textAlign: "center" }}>
              One of our product experts will contact you shortly.
            </h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "space-between", padding: "15px 30px 30px" }}>
          <Button
            onClick={handleModalClose}
            style={{
              color: "#fff",
              backgroundColor: "#ff5f6d", 
              backgroundImage: "linear-gradient(45deg, #ff5f6d, #ffc371)",
              padding: "10px 20px",
              borderRadius: "30px", 
              textTransform: "none",
              fontSize: "1rem",
            }}
          >
            Close
          </Button>
          <Link to="/product/:id" style={{ textDecoration: "none" }}>
            <Button
              color="primary"
              variant="contained"
              style={{
                backgroundColor: "#3C62A9",
                padding: "10px 20px",
                borderRadius: "30px",
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              Continue browsing
              <BsArrowRight style={{ fontSize: "20px", marginLeft: "10px" }} />
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
        </section>
        </>
    );
}

export default ContactPPt;
