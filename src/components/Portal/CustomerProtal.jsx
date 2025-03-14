
import Header3 from "../Header3"
import PageBanner from "../PageBanner"
import Footer3 from "../Footer3"
import bannerBg from "../../assets/img/page-banner.jpg"
import "./Portal.css"
import { useState } from "react"
import { Helmet } from "react-helmet"
import CustomerLogin from "./CustomerLogin"
import CustomerSignup from "./CustomerSignup"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import querystring from 'querystring';
import { useHistory } from "react-router-dom"




const CustomerPortal = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [pageType, setPageType] = useState('login'); //keep track of login and signup page
    const history = useHistory();
    const [user,setUSer] = useState({
        first_name: "",
        last_name: "",
        company: "",
        phone: "",
        email: "", 
        password: "",
        confirm_password:""
    });

    const handleTogglePage = (type) => {
        setUSer(prev => ({...prev, 
                            password: "",
                            confirm_password: ""}))
        setPageType(type);
    }
    const handleInput = (e) => {
        const {name,value} = e.target;
        setUSer({
            ...user,
            [name]: value
        });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit function: ")
        if(pageType === "login"){
            // login logic
            const { email, password} = user;
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}"customer-login"`,
                querystring.stringify({email,password})
            );
            if(res?.data?.success === true){
                localStorage.setItem('auth_token',res?.data?.token); 
            }
        }
        else{ // signup logic
            
            // check password and confirm password
            if(user.password !== user.confirm_password){
                toast.error('Confirm password and password must be same', {
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
            console.log("sign up ")

            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}customer-signup`,
                querystring.stringify({user})
            );
            if(res.data.success === true){
                toast.success('Signup successfully. Now login to continue', {
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
                handleTogglePage('login');
                return;
            }
             else{
                toast.error(res.data.message, {
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

        }
    }

    let page_title = pageType === 'login' ? "Customer Login Portal".toUpperCase() : "Customer Signup Portal".toUpperCase();

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
            <Helmet>
                <title>{`Testfabrics.com: ${page_title}`}</title>
            </Helmet>
            <Header3/>
            <PageBanner bannerBg={bannerBg} currentPage="Customer Portal" />
            <section className="portal ">
                {
                    pageType === "login" ? 
                        <CustomerLogin 
                            user={user} 
                            handleInput={handleInput} 
                            handleSubmit={handleSubmit}
                            handleTogglePage={handleTogglePage}    
                        /> :
                        <CustomerSignup
                            user={user} 
                            handleInput={handleInput} 
                            handleSubmit={handleSubmit}
                            handleTogglePage={handleTogglePage}   
                        />
                }

            </section>

            <Footer3/>
        </>
    );
}


export default CustomerPortal