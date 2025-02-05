import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function About2() {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await fetch("https://testfabrics.com/apis/index.php/home_page_data");
                const result = await response.json();

                if (result.success) {
                    // Filter data for page_id 2
                    const pageData = result.data.find(item => item.page_id === "2");
                    if (pageData) {
                        setAboutData(pageData);
                    }
                }
            } catch (error) {
                console.error("Error fetching about data:", error);
            }
        };

        fetchAboutData();
    }, []);

    // Check if aboutData is not available yet
    if (!aboutData) {
        return <div></div>; // Display loading state
    }

    return (
        <section className="about-wrapper section-padding pb-0">
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-8 pl-xl-5 col-12">
                        <div className="block-contents ml-40">
                            {/* <span>About Our Company</span> */}
                            <h1>{aboutData.page_heading}</h1>
                            <h4>
                                {aboutData.page_sub_heading}
                            </h4>
                            <p>{aboutData.page_long_content}</p>
                            {/* Removed "Get In Touch" button as per your senior's request */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 d-none d-lg-block">
                        <div className="promo-img">
                            <img 
                                src={`https://testfabrics.com/apis/images/${aboutData.page_image}`} 
                                alt="About Section" 
                                style={{
                                    borderRadius: "22px",
                                  }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About2;



// import React from 'react';
// import { BsArrowRight } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import aboutTwoData from './aboutTwoData';
// import AgeImg3 from "../../assets/img/standing-4.jpg";


// function About2() {
//     return (
//         <section className="about-wrapper section-padding pb-0">
//             <div className="container">
//                 <div className="row align-center">
//                     <div className="col-lg-4 col-12 d-none d-lg-block">
//                         <div className="promo-img">
//                             <img src={AgeImg3} alt="" />
//                         </div>
//                     </div>
//                     <div className="col-lg-8 pl-xl-5 col-12">
//                         <div className="block-contents ml-40">
//                             <span>About Our Company</span>
//                             <h1>{aboutTwoData.heading}</h1>
//                             <h4>
//                                 {aboutTwoData.quote}
//                                 <span>
//                                     <b>{aboutTwoData.author}</b> {aboutTwoData.position}
//                                 </span>
//                             </h4>
//                             <p>{aboutTwoData.text}</p>
//                             <Link to="/request-quote" className="theme-btn theme-2 mb-30 mb-lg-0 white">
//                                 Get In Touch <BsArrowRight />
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default About2;
