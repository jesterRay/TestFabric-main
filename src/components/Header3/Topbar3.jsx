import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useApi } from "../../middleware/middleware";
import logo from "../../assets/img/logo-3.png";
import { ArrowDropDown } from "@material-ui/icons";
import "./Topbar3.css";

function Topbar3() {
  const { data, error, isLoading } = useApi("services_list", {});
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu
  const history = useHistory();
  const location = useLocation(); // Get current location to highlight active link

     const {
     data: location2,
    error: locationError,
     isLoading: locationLoading,
   } = useApi("get_ip_details", {});

  const handleServiceClick = (service) => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}services_list_detail?service_id=${service.associations_and_partners__ID}`
      )
      .then((response) => {
        const responseData = response.data;
        if (responseData.success && responseData.data.length > 0) {
          const serviceDetail = responseData.data[0];
          const formattedName =
            serviceDetail.associations_and_partners__Name.replace(/ /g, "_");
          history.push({
            pathname: `/services/${formattedName}`,
            state: {
              item: serviceDetail.associations_and_partners__Description,
              heading: serviceDetail.associations_and_partners__Name,
              category: serviceDetail.cat_name,
            },
          });
        } else {
          console.error("No data found for service:", service);
        }
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  };

  // Function to check if the current route is active
  const isActiveLink = (path) => location.pathname === path;

  return (
    <header className="desktop-menu header-wrap header-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-12 pl-lg-3 header-none">
            <div className="main-menu">
              <ul>
                <li
                  className={`menu-item ${
                    hoveredMenu === "services" ? "hovered" : ""
                  }`}
                >
                  <Link
                    to="/product-by-category"
                    className={
                      location.pathname === "/product-by-category"
                        ? "active"
                        : ""
                    }
                  >
                    Products
                  </Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("standard")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("standard")}
                  className={`menu-item ${
                    hoveredMenu === "standard" ||
                    activeMenu === "standard" ||
                    isActiveLink("/product-by-standards")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to="/product-by-standards"
                  >Standard Test Method</Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("equipment")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("equipment")}
                  className={`menu-item ${
                    hoveredMenu === "equipment" ||
                    activeMenu === "equipment" ||
                    isActiveLink("/equipment-category")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to="/equipment-category">Equipment</Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("services")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("services")}
                  className={`menu-item ${
                    hoveredMenu === "services" ||
                    activeMenu === "services" ||
                    isActiveLink("/services")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to="/services">Services</Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("support")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("support")}
                  className={`menu-item ${
                    hoveredMenu === "support" ||
                    activeMenu === "support" ||
                    isActiveLink("/support")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to="/support">Support</Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("contact")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("contact")}
                  className={`menu-item ${
                    hoveredMenu === "contact" ||
                    activeMenu === "contact" ||
                    isActiveLink("/choose-region")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to={`/choose-region/${location2?.country}`}>
                    Contact Us
                  </Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("international")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("international")}
                  className={`menu-item ${
                    hoveredMenu === "international" ||
                    activeMenu === "international" ||
                    isActiveLink("/international-distribution")
                      ? "active-menu"
                      : ""
                  }`}
                >
                <Link to="/international-distribution">International Distribution</Link>
              </li>

                <li
                  onMouseEnter={() => setHoveredMenu("about")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("about")}
                  className={`menu-item ${
                    hoveredMenu === "about" ||
                    activeMenu === "about" ||
                    isActiveLink("/heritage")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to="/heritage">About Us</Link>
                </li>

                <li
                  onMouseEnter={() => setHoveredMenu("verification")}
                  onMouseLeave={() => setHoveredMenu(null)}
                  onClick={() => setActiveMenu("verification")}
                  className={`menu-item ${
                    hoveredMenu === "verification" ||
                    activeMenu === "verification" ||
                    isActiveLink("/product-verification")
                      ? "active-menu"
                      : ""
                  }`}
                >
                  <Link to="/product-verification">Verification</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar3;

// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// import { useApi } from "../../middleware/middleware";
// import logo from "../../assets/img/logo-3.png";
// import { ArrowDropDown } from "@material-ui/icons";
// // import './Topbar3.css'
// function Topbar3() {
//   const { data, error, isLoading } = useApi("services_list", {});
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const history = useHistory();

//   const {
//     data: location,
//     error: locationError,
//     isLoading: locationLoading,
//   } = useApi("get_ip_details", {});

//   const handleServiceClick = (service) => {
//     axios
//       .get(
//         `${process.env.REACT_APP_API_URL}services_list_detail?service_id=${service.associations_and_partners__ID}`
//       )
//       .then((response) => {
//         console.log("API response:", response.data);
//         const responseData = response.data;
//         if (responseData.success && responseData.data.length > 0) {
//           const serviceDetail = responseData.data[0];
//           console.log(
//             "the item is ",
//             serviceDetail.associations_and_partners__Description
//           );
//           console.log(
//             "the heading is ",
//             serviceDetail.associations_and_partners__Name
//           );
//           console.log("the catogory is ", serviceDetail.cat_name);
//           const formattedName =
//             serviceDetail.associations_and_partners__Name.replace(/ /g, "_");
//           history.push({
//             pathname: `/services/${formattedName}`,
//             state: {
//               item: serviceDetail.associations_and_partners__Description,
//               heading: serviceDetail.associations_and_partners__Name,
//               category: serviceDetail.cat_name,
//             },
//           });
//           console.log(
//             "Navigating to:",
//             `/project-details/${serviceDetail.associations_and_partners__Name}`
//           );
//         } else {
//           console.error("No data found for service:", service);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching service details:", error);
//       });
//   };

//   return (
//     <header className="desktop-menu header-wrap header-5">
//       <div className="container">
//         <div className="row align-items-center justify-content-between">
//           <div className="col-lg-12 pl-lg-3 header-none">
//             <div className="main-menu">
//               <ul>
//                 <li
//                   onMouseEnter={() => setHoveredMenu("services")}
//                   onMouseLeave={() => setHoveredMenu(null)}
//                   className={`menu-item ${
//                     hoveredMenu === "services" ? "hovered" : ""
//                   }`}
//                 >
//                   <Link to="/product-by-category">
//                     Products

//                   </Link>
//                   {/* <ul className="sub-menu"  >
//                     <li  >
//                       <Link to="/product-by-category">
//                         Browse By Product Category
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/product-by-standards">
//                         Browse By Standard test Method
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/product-by-interest-group">
//                         Browse By Interest Group
//                       </Link>
//                     </li>
//                   </ul> */}
//                 </li>
//                     <li>
//                 <Link to="/product-by-standards">
//                        Standard test Method
//                       </Link>
//                       </li>
//                 <li>
//                   <Link to="/equipment-category">
//                     Equipment

//                   </Link>
//                   {/* <ul className="sub-menu">
//                     <li>
//                       <Link to="/equipment-category">
//                         Browse By Equipment Category
//                       </Link>
//                     </li>
//                   </ul> */}
//                 </li>
//                 <li>

//                   <Link to="/services">

//                     Services

//                   </Link>

//                   </li>
//                   {/* <ul>
//                     {data?.map((item) => (
//                       <li
//                         key={item?.associations_and_partners__ID}
//                         onClick={() => handleServiceClick(item)}
//                       >
//                         <Link
//                           to={`/services/${item?.associations_and_partners__Name.replace(
//                             / /g,
//                             "_"
//                           )}`}
//                         >
//                           {item?.associations_and_partners__Name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul> */}

//                 <li>
//                   <Link to="/support">
//                     Support

//                   </Link>
//                   {/* <ul className="sub-menu">
//                     <li>
//                       <Link to="/request-certifiate">
//                         REQUEST CERTIFICATE OF CONFORMITY
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/msds-request">
//                         {" "}
//                         REQUEST MATERIAL SAFETY DATA SHEET(MSDS)
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/order-request">ORDER REQUEST</Link>
//                     </li>
//                     <li>
//                       <Link to="/quote-request">QUOTE REQUEST</Link>
//                     </li>
//                     <li>
//                       <Link to="/track-order">TRACK YOUR ORDER</Link>
//                     </li>
//                     <li>
//                       <Link to="/downloads">DOWNLOADS</Link>
//                     </li>
//                   </ul> */}
//                 </li>
//                 <li>
//                   <Link to={`/choose-region/${location?.country}`}>Contact us</Link>
//                 </li>

//                 {/* <ul className="sub-menu">

//                                         <li>
//                                             <Link to="/choose-country">Choose your Country or Region</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/swatch-request">Fabric Swatch Request</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/catalog-request">Catalog Request</Link>
//                                         </li>
//                                         <li>
//                                             <Link to="/business-inquiry">Business Inquiry Form</Link>
//                                         </li>
//                                     </ul>  */}

//                 <li>
//                   <Link to="/heritage">
//                     About us

//                   </Link>
//                   {/* <ul className="sub-menu">
//                     <li>
//                       <Link to="/heritage">Heritage</Link>
//                     </li>
//                     <li>
//                       <Link to="/associate-and-partners">
//                         Associate & Partners
//                       </Link>
//                     </li>
//                     <li>
//                       <Link to="/team">Team</Link>
//                     </li>
//                   </ul> */}
//                 </li>
//                 <li>
//                   <Link to="/product-verification">
//                     Verification
//                   </Link>
//                   {/* <ul className="sub-menu">
//                     <li>
//                       <Link to="/product-verification">
//                         Validate Your Product Here
//                       </Link>
//                     </li>
//                   </ul> */}
//                 </li>
//                 {/* <li>
//                   <Link to="/">
//                     portal
//                   </Link>
//                   <ul className="sub-menu">
//                     <li>
//                       <Link to="/customer_portal">Customer Portal</Link>
//                     </li>
//                     <li>
//                       <Link to="/agent_portal">Agent Portal</Link>
//                     </li>
//                   </ul>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Topbar3;
