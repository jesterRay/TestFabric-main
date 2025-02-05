import React, { useEffect, useState } from "react";


function Promo() {
  const [promoData, setPromoData] = useState(null);

  useEffect(() => {
    const fetchPromoData = async () => {
      try {
        const response = await fetch("https://testfabrics.com/apis/index.php/home_page_data");
        const result = await response.json();
        
        if (result.success && result.data.length > 0) {
          // Assuming you want the first entry in the data array
          setPromoData(result.data[0]);
        }
      } catch (error) {
        console.error("Error fetching promo data:", error);
      }
    };

    fetchPromoData();
  }, []);

  // Check if promoData is not available yet
  if (!promoData) {
    return <div></div>; // You can also display a loading spinner or placeholder
  }

  return (
    <section className="promo-featured-wrapper section-padding">
      <div className="container">
        <div className="row align-center">
          <div className="col-xl-6 col-12 text-center">
            <img
              src={`https://testfabrics.com/apis/images/${promoData.page_image}`} // Adjust this URL based on the actual image path
              alt={promoData.page_heading}
              style={{
                borderRadius: "22px",
              }}
            />
          </div>
          <div className="col-xl-6 col-12">
            <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
              <h2>{promoData.page_heading}</h2>
              <h4>{promoData.page_sub_heading}</h4>
              <p>{promoData.page_long_content}</p>
              {/* Removed the "Get In Touch" button as per your senior's request */}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;



// import { BsArrowRight } from "react-icons/bs";
// import React from "react";
// import { Link } from "react-router-dom";
// import AgeImg from "../../assets/img/age.png";
// import AgeImg2 from "../../assets/img/standing-3.jpg";


// function Promo() {
//   return (
//     <section className="promo-featured-wrapper section-padding">
//       <div className="container">
//         <div className="row align-center">
//           <div className="col-xl-6 col-12 text-center">
//             <img
//               src={AgeImg2}
//               alt="age"
//               style={{
//                 borderRadius: "70px",
                
//               }}
//             />

//             <h5>
//               Years Of Experience With <b>Creative Team</b>
//             </h5>
//           </div>
//           <div className="col-xl-6 col-12">
//             <div className="block-contents ml-xl-5 mt-5 mt-xl-0">
//               {/* <span>Easily import the whole Industry</span> */}
//               <h2>
//                 Your Source for Quality Test Materials, Standard Fabrics, Soiled
//                 Fabrics and much more!
//               </h2>
//               <h4>
//                 Deliver high value to customers - provide significant benefits
//                 to fabric testing customers
//               </h4>
//               <p>
//                 Our vision is to inspire, equip our partners, acting as a
//                 catalyst for their growth through relentless excellence and
//                 commitment while also driving our own exponential growth.
//               </p>
//               <Link to="/request-quote" className="theme-btn">
//                 Get In Touch
//                 <BsArrowRight
//                   style={{ fontSize: "20px", marginLeft: "15px" }}
//                 />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Promo;
