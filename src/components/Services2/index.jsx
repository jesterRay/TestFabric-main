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



function Services2() {
    const {values} = useContext(UserContext)
    const location= useLocation()
    const pathData = location?.pathname;
    function suCrypt(id) {
        return btoa(btoa(id));
    }

    const words = pathData?.split("-");
    // Get the last word that starts with a hyphen
    const lastHyphenatedWord = words?.reverse()?.find(word => word.startsWith("-"));
    // If no word starting with hyphen is found, handle it gracefully
    const lastWord = words[0];

    // const { categoryId } = useParams();
    // console.log("pathData---- :",lastWord);

    const { data, error, isLoading } = useApi('testfabrics_products_by_subcategory', {catID:lastWord});

    // const [produts,setProducts] = useState(null)
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_URL+"testfabrics_products_by_subcategory",{params:{catID:"205"}})
    //     .then(res=>{console.log(res);setProducts(res?.data)})
    // },[])
    return (
        <>
            <section
                className="page-banner-wrap-2 bg-cover" style={{background:"white"}}
                // style={{ backgroundImage: `url(${bannerBg})` }}
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
                            heading={`${index + 1}. ${data.product__Name}`}  // Adding numbers here
                            text={data?.product__Description?.slice(0, 95)+"..."}
                            subheading={data?.product__Number}
                        />
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default Services2;
