import React,{useEffect,useState,useContext} from 'react';
import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import axios from 'axios';

import servicesTwoData from './servicesTwoData';
import ServicesTwoCard from './SevicesTwoCard';

import thumb1 from '../../assets/img/service8.jpg';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import suCrypt from '../../helpers/suCrypt';
import { extractIdFromUrlPath } from '../../helpers/concatUrlPath';
import { Helmet } from 'react-helmet';


function Services2() {
    const {values} = useContext(UserContext)
    const location= useLocation();
    const [productId,setProductId] = useState('');
    const [title,setTitle] = useState("Product");
    


    // extract the name from the url
    useEffect(() => {

        let path = location.pathname.split("/");
        console.log(path) // Extract from hash
        const productSlug = path[2]; 
        
        if (productSlug) {
            // Remove last part (assumed to be an ID)
            const productName = productSlug.split("-").slice(0, -1).join(" ");   
            // Set document title
            console.log(productName)
            setTitle(productName.toUpperCase());
        }

        setProductId(
            extractIdFromUrlPath(location.pathname || '')
        );
    }, [location]);

    const { data, error, isLoading } = useApi('testfabrics_products_by_subcategory', {catID: productId});

    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${title}`}</title>
            </Helmet>
            <section className="page-banner-wrap-2 bg-cover" style={{background:"white"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="breadcrumb-wrap">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                           <Link to="/product-by-category"> {"Categories"}</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                           <Link to="/product-by-category"> {"Sub Categories"}</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {"Products"}
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            <div className="page-heading">
                                <h2>{"Products"}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        <section className="our-service-wrapper " style={{paddingBottom:"30px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        {/* <div className="section-title text-left">
                            <h1>Products</h1>
                        </div> */}
                    </div>
                </div>
                {/* <div className="row" style={{marginTop:"20px",width:"100%"}}>
                        <img src={'https://smilesdahub.com/tf/apis/cat_images/banner_'+suCrypt(lastWord)+'.jpg'}  />

                    </div> */}
                <div className="row">
                    {data?.length === 0 && <h4>No Products Found</h4>}
                    {data?.map((data, index) => (
                        <ServicesTwoCard
                            key={data.product__ID}
                            productId={data.product__ID}
                            thumbnail={data.product__ID}
                            defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                            icon={<FaDraftingCompass />}
                            productName={data.product__Name}
                            heading={data.product__Name}  // Adding numbers here
                            text={data?.product__Description?.slice(0, 95)+"..."}
                            subheading={data?.product__Number}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Services2;
