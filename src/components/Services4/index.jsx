import React,{useEffect,useState,useContext} from 'react';
import axios from 'axios';

import ServicesOneCard from './ServicesOneCard';
import servicesOneData from './servicesOneData';
import { useParams } from 'react-router-dom';
import Bg2 from '../../assets/img/home1/power.jpg';
import Icon1 from '../../assets/img/icon/s1.png';
import { UserContext } from '../../App';
import { useApi } from '../../middleware/middleware';
import { useLocation } from 'react-router-dom';
import PageBanner from '../PageBanner';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import defaultImage from '../../assets/img/gallery/9.jpg';
import suCrypt from '../../helpers/suCrypt';
import { extractIdFromUrlPath } from '../../helpers/concatUrlPath';
import { Helmet } from 'react-helmet';

function Services4() {
    const {values} = useContext(UserContext);
    const location= useLocation();

    const [productId,setProductId] = useState(
        extractIdFromUrlPath(location.pathname || '')
    );
    useEffect(()=>{
        setProductId(
            extractIdFromUrlPath(location.pathname || '')
        )
    },[location.pathname])

    const [titleApi,setTitleApi] = useState('category_by_id');
    useEffect(()=>{},[]);
    
    const { data, error, isLoading } = useApi('products_by_subcategory', {catID:productId});
    console.log("data: ",data)
    const { data:page_title  , error: title_error,isLoading: title_isLoading } = useApi(titleApi, {id:productId});
    
    useEffect(() => {
        if (!page_title && titleApi === 'category_by_id') {
            console.log("No data found, switching API...");
            setTitleApi('category_by_id');  // Try alternative API
        }
    }, [page_title, titleApi]);



    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${(page_title?.[0]?.name)?.slice(0, 40) ?? 'PRODUCT BY SUBCATEGORY'}`}</title>
            </Helmet>
            <section
                className="page-banner-wrap-2 bg-cover"
                // style={{ backgroundImage: `url(${bannerBg})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="breadcrumb-wrap">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                           <Link to="/product-by-category"> {"Categories"}</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {"Sub Categories"}
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            <div className="page-heading">
                                <h2>{"SUB-CATEGORIES"}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-wrapper services-1 section-bg ">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            {/* <div className="section-title text-left">
                                <h1>SUB CATEGORIES</h1>
                            </div> */}
                        </div>
                    </div>
                    
                    {/* <div className="row" style={{marginTop:"20px",width:"100%"}}>
                        <img src={'https://smilesdahub.com/tf/apis/cat_images/banner_'+suCrypt(lastWord)+'.jpg'}  />

                    </div> */}


                    <div className="row">
                        {
                        data!=null?
                        data?.map((item, index) => (
                            <ServicesOneCard
                                key={item.subcategory__ID}
                                sucategoryId={item.subcategory__ID}
                                bgImg={item.img}
                                // defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/producfabrics.jpgt_test'}
                                defaultImg={defaultImage}
                                icon={Icon1}
                                heading={item.subcategory__Name}
                                btnText={"See Products"}
                                index={index}
                            />
                        ))
                        :<></>
                    
                    }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services4;
