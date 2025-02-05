import React, { useEffect, useState } from 'react';
import ServiceDetails from '../components/ServiceDetails';
import Header3 from '../components/Header3';
import DetailsCarousel from '../components/ServiceDetails/DetailsCarousel';
import Footer3 from '../components/Footer3';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useApi } from '../middleware/middleware';
import { useLocation,useHistory } from 'react-router-dom';
import axios from 'axios';
import { extractIdFromUrlPath, concatUrlPath } from '../helpers/concatUrlPath';

function ServicesDetails({match}) {

    const location = useLocation();
    const history = useHistory();

    // get product id from url
    const productId = extractIdFromUrlPath(location.pathname || '');

    const [testingStandards, setTestingStandards] = useState([]);
    const [testMethods, setTestMethods] = useState([]);

    useEffect(() => {
        // Fetch Testing Standards
        let isMounted = true;
        async function fetchTestingStandards() {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/associated_testing_standards?ProductId=${productId}`
                );
                if (response.data && response.data.success) {
                    setTestingStandards(response.data.data);
                } else {
                    console.error('Error fetching testing standards:', response);
                }
            } catch (error) {
                console.error('Fetch error for testing standards:', error);
            }
        }

        // Fetch Test Methods
         
        async function fetchTestMethods() {
            try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}associated_test_methods?ProductId=${productId}`
            );
            if (response.data && response.data.success) {
                setTestMethods(response.data.data);
            } else {
                console.error('Error fetching test methods:', response);
            }
            } catch (error) {
            console.error('Fetch error for test methods:', error);
            }
        }
  

        // Ensure productId is available before making the API calls
        if (productId && isMounted) {
            fetchTestingStandards();
            fetchTestMethods();
        }

        return () => {
            isMounted = false;
        }
    }, [productId]);

    // Breadcrumb API Call
    const { data, error, isLoading } = useApi('product_breadcrumb', { id: productId });

    // Handle errors for breadcrumb API
    if (error) {
        console.error('Breadcrumb API Error:', error);
    }

    // Navigation handler
    function handleNavigation(url, heading, Id) {
        const urlPath = concatUrlPath(url, heading, Id)
        history.push(urlPath);
    }



    return (
        <>
            <Header3 />
            <section
                className="page-banner-wrap-2 bg-cover mb-2 mb-md-5"
                style={{ background: "white" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="breadcrumb-wrap">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page" onClick={() => handleNavigation("product-by-subcategory", data?.[0]?.category__Name, data?.[0]?.category__ID)}>
                                            {data?.[0]?.category__Name}
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page" onClick={() => handleNavigation("product", data?.[0]?.subcategory__Name, data?.[0]?.subcategory__ID)}>
                                            {data?.[0]?.subcategory__Name}
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {data?.[0]?.product__Name}
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="service-details-wrapper ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5 mt-5 mt-md-0 col-12 order-1 order-md-1">
                            <div className="service-details-content-wrapper pl-0 pl-md-4">
                                <DetailsCarousel />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-12 order-2 order-md-2">
                            <ServiceDetails />
                        </div>
                    </div>
                </div>
            </section>

            <div
                style={{
                    display: "flex",
                    marginTop: "60px",
                    gap: "2px",
                    justifyContent:'center'
                }}
            >
                {/* Testing Standards Section */}
                <div
                    style={{
                        marginRight: "30px",
                        width: "35%",
                        padding: "20px",
                        borderRadius: "5px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderLeft: "5px solid #001659",
                    }}
                >
                    <h5 style={{ color: "#001659", fontWeight: "bold", marginBottom: "15px" }}>
                        Associated to Testing Standards:
                    </h5>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        {testingStandards.map((standard) => (
                            <li
                                key={standard.standards__Name+standard.standards__ID}
                                style={{
                                    marginBottom: "10px",
                                    padding: "10px",
                                    backgroundColor: "#fff",
                                    borderRadius: "5px",
                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    cursor: "pointer"
                                }}
                                data-value = {standard.standards__ID}
                                onClick={() => 
                                    handleNavigation('product-by-standards-subcategory',standard.standards__Name,standard.standards__ID)
                                }
                            >
                                <p
                                    style={{
                                        margin: "0",
                                        color: "#333",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    {standard.standards__Name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Test Methods Section */}
                <div
                    style={{
                        width: "35%",
                        padding: "20px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        borderLeft: "5px solid #001659",
                    }}
                >
                    <h5 style={{ color: "#001659", fontWeight: "bold", marginBottom: "15px" }}>
                        Associated to Test Method(s):
                    </h5>
                    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                        {testMethods.map((method) => (
                            <li data-value = {method.methods__ID}
                                key={method.methods__Name+method.methods__ID}
                                style={{
                                    marginBottom: "10px",
                                    padding: "10px",
                                    backgroundColor: "#fff",
                                    borderRadius: "5px",
                                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    cursor: "pointer"
                                }}
                                onClick={() => 
                                    handleNavigation('products-by-standard-methods',method.methods__Name,method.methods__ID)
                                }
                            >
                                <p
                                    style={{
                                        margin: "0",
                                        color: "#333",
                                        fontSize: "16px",
                                        fontWeight: "600",
                                        letterSpacing: "0.5px",
                                    }}
                                >
                                    {method.methods__Name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <Footer3 />
        </>
    );
}

export default ServicesDetails;
