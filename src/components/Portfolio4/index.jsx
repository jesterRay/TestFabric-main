import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import portfolioTwoData from './porfolioTwoData';
import PortfolioTwoItem from './PortfolioTwoItem';
import { useApi } from '../../middleware/middleware';
import HeroBg1 from '../../assets/img/home1/hero1.jpg';

function Portfolio4() {
    const { data, error, isLoading } = useApi('best_seller_products', {});
    // const data=[
    //     {
    //         name:"products by categories",
    //         url:"product-by-category",
    //     },{
    //         name:"Products By Standards",
    //         url:"product-by-standards",
    //     },{
    //         name:"Products By Equipment",
    //         url:"equipment-category",
    //     },{
    //         name:"products By Interest Group",
    //         url:"product-by-category",
    //     }
    // ]
    function suCrypt(id) {
        return btoa(btoa(id));
    }
    return (
        <section className="portfolio-wrapper cases-carousel-wrapper section-padding section-bg " 
        style={{backgroundColor:"transparent"}} 
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center mb-30 ">
                        <div className="section-title-3">
                            {/* <p>Products</p> */}
                            <h1>Top Selling</h1>
                        </div>
                    </div>
                </div>
            </div>
            {
                data?.map((cat)=>{
                    return(
                    <Swiper
                    spaceBetween={40}
                    autoplay
                    className="portfolio-carousel-wrapper owl-carousel px-4"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
    
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                   
                        {cat?.map((item,index) => (
                            
                            <SwiperSlide>
                                    <PortfolioTwoItem
                                        // key={data.id}
                                        key={item.product__ID}
                                        categoryId={item?.product__ID}
                                        img={process.env.REACT_APP_IMAGE_URL +'cat_images/'+item?.product_image+'.jpg'}
                                        name={item?.product__Name}
                                        categoryName={item?.category__Name}
                                        cost={"23"}
                                        // heading={data.heading}
                                        heading={(index+1)+"\n"+item.category__Name}
                                        // link={data?.link}
                                        link={'/'}
                                        url={item?.url}
    
                                    />                    
                            </SwiperSlide>
                        ))}
                    
                 </Swiper>
                    )
                })
            }
           
        </section>
    );
}

export default Portfolio4;
