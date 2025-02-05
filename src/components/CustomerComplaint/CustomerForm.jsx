import React, { useState } from "react";
import FormInput from "../ContactForm/FormInput";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, IconButton } from "@material-ui/core";
import { PostApi } from "../../middleware/postMiddleware"; // Ensure this is capable of handling file uploads
import { useHistory } from "react-router-dom";
import { Close as CloseIcon } from "@material-ui/icons";
import ReCAPTCHA from "react-google-recaptcha";

function CustomerForm({ bannerHeading, formTitle, formHeading }) {
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [verified, setVerified] = useState(false);
  const [token, setToken] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  function onCaptchaChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
    setToken(value);
  }

  const onChangeHandler = (e) => setMessage(e.target.value);

  const onFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const validFiles = selectedFiles.filter((file) =>
      file.size <= 5000000 && ["image/jpeg", "image/png", "application/pdf"].includes(file.type)
    );

    if (validFiles.length !== selectedFiles.length) {
      toast.error("Some files are invalid or too large and have been excluded.");
    }

    setFiles((prevFiles) => [...prevFiles, ...validFiles]);
  };

  const removeFile = (index) => setFiles(files.filter((_, i) => i !== index));

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const name = event.target?.Name?.value;
    const email = event.target?.email2?.value;
    const lotNumber = event.target?.lotNumber2?.value;
    const itemNumber = event.target?.productName2?.value;

    if (!name || !email || !lotNumber || !itemNumber || !message || !verified) {
      toast.error("Please complete all required fields and verify the CAPTCHA.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("lot_number", lotNumber);
    formData.append("item_number", itemNumber);
    formData.append("description", message);
    
    // Append files to the form data
    files.forEach(file => {
      formData.append("attachments", file);
    });

    try {
      const resStatus = await PostApi("https://testfabrics.com/apis/index.php/customer_complaint", formData);

      if (resStatus === 200) {
        toast.success("Complaint submitted successfully.", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
        setTimeout(() => {
          history.push("/");
        }, 2500);

        setMessage("");
        setFiles([]);
      } else {
        throw new Error("Failed to submit complaint.");
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar theme="colored" />
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
                <form className="row contact-form" onSubmit={onSubmitHandler}>
                  <FormInput type="text" labelFor="Name" label="* Name" placeholder="Enter your name" id="Name" />
                  <FormInput type="email" labelFor="email" label="* Email Address" placeholder="Enter Email Address" id="email2" />
                  <FormInput type="text" labelFor="Lot #" label="* Lot # :" placeholder="Enter Lot #" id="lotNumber2" />
                  <FormInput type="text" labelFor="Item #" label="* Item # :" placeholder="Enter Item #" id="productName2" />

                  <TextField
                    placeholder="Enter your report here..."
                    multiline
                    rows={2}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={message}
                    onChange={onChangeHandler}
                  />

                  <div className="file-input-wrapper">
                    <label htmlFor="file-upload" className="theme-btn">Browse</label>
                    <input id="file-upload" type="file" onChange={onFileChange} multiple className="file-input" />
                  </div>

                  <div className="selected-files">
                    {files.map((file, index) => (
                      <div key={index} style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                        <span>{file.name}</span>
                        <IconButton onClick={() => removeFile(index)} size="small" aria-label="remove" style={{ marginLeft: "5px" }}>
                          <CloseIcon />
                        </IconButton>
                      </div>
                    ))}
                  </div>

                  {/* <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPTCHA_KEY} onChange={onCaptchaChange} /> */}

                  <div style={{ display: "flex", justifyContent: "center", gap: "10px" }} className="col-md-12 col-12 text-center">
                    <Button type="submit" className="submit-btn" variant="contained" color="primary" disabled={loading}>
                      {loading ? "Submitting..." : "Submit"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .file-input-wrapper {
          position: relative;
          display: inline-block;
        }
        .file-input {
          opacity: 0;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default CustomerForm;
