
import Header3 from "../Header3"
import PageBanner from "../PageBanner"
import Footer3 from "../Footer3"
import bannerBg from "../../assets/img/page-banner.jpg"
import "./Portal.css"
import { useState } from "react"



const AgentPortal = () => {
    const [isSubmitted,setIsSubmitted] = useState(false);

    const [user,setUSer] = useState({
        user: "",
        pass: ""
    })

    const handleInput = (e) => {
        const {name,value} = e.target;
        setUSer({
            ...user,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return (
        <>
            <Header3/>
            <PageBanner bannerBg={bannerBg} currentPage="Agent Portal"  />
            <section className="portal ">
                {
                    isSubmitted ?  <div className="thanks-text">Thank you, admin will contact you later </div>
                    : (
                        <div class="portal-form-wrapper">
                            <form className="portal-form" onSubmit={handleSubmit}>
                                <h3 className="portal-form-heading">Agent Portal</h3>
                                <div className="portal-input-group">
                                    <input required name="user" type="text"  placeholder="Enter username..." onChange={handleInput}/>
                                    <input required name="pass" type="password" placeholder="Enter password...." onChange={handleInput}/>
                                </div>
                                <div className="portal-form-btn-group">
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    ) 
                }
            </section>

            <Footer3/>
        </>
    );
}


export default AgentPortal