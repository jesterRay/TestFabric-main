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
import defaultImage from '../../assets/img/gallery/9.jpg'

function Services4() {
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
   
    const { data, error, isLoading } = useApi('products_by_subcategory', {catID:lastWord});
    // const { data, error, isLoading } = useApi('products_by_subcategory', {catID:categoryId});

    // function suCrypt(id) {
    //     return btoa(btoa(id));
    // }
    // const [subCategories,setSubCategories] = useState(null)
    // useEffect(()=>{
    //     axios.get(process.env.REACT_APP_API_URL+"products_by_subcategory",{params:{catID:"44"}})
    //     .then(res=>setSubCategories(res?.data))
    // },[])
    // const defaultImg =
    // function onError(e){
    //     e.target.src = process.env.REACT_APP_API_URL +'cat_images/banner_'+suCrypt(values?.categoryId)+'.jpg'
    // }
    return (
        <>
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
                                bgImg={process.env.REACT_APP_IMAGE_URL +'cat_images/'+suCrypt(item?.subcategory__ID)+'.jpg'}
                                // defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/producfabrics.jpgt_test'}
                                defaultImg={defaultImage}
                                icon={Icon1}
                                heading={`${index+ 1}.${item.subcategory__Name}`}
                                btnText={"See Products"}
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
