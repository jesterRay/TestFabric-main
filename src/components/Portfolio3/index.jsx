import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import portfolioTwoData from './porfolioTwoData';
import PortfolioTwoItem from './PortfolioTwoItem';
import { useApi } from '../../middleware/middleware';

function Portfolio3() {
    const { data, error, isLoading } = useApi('products_by_categories_card', {});

    function suCrypt(id) {
        return btoa(btoa(id));
    }
    return (
        <section className="portfolio-wrapper cases-carousel-wrapper section-padding section-bg mbm-30 desktop-portfolio3" 
        style={{backgroundColor:"transparent"}} 
        >
            {/* <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-12 text-center mb-30">
                        <div className="section-title-3">
                            <p>Products</p>
                            <h1>Browse By Category</h1>
                        </div>
                    </div>
                </div>
            </div> */}

            <Swiper
                spaceBetween={40}
                autoplay
                className="portfolio-carousel-wrapper owl-carousel"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },

                    992: {
                        slidesPerView: 4,
                    },
                }}
            >
                <div className='container' >
                    <div className='row'>
                    {data?.slice(0, 8)?.map((item,index) => (
                        <div className='col-sm-3 col-12 '>
                            <PortfolioTwoItem
                                key={item.category__ID}
                                categoryId={item?.category__ID}
                                img={process.env.REACT_APP_IMAGE_URL +'cat_images/'+suCrypt(item?.category__ID)+'.jpg'}
                                name={item?.category__Name}
                                cost={"23"}
                                heading={(index+1)+"\n"+item.category__Name}
                                link={'/'}
                                url={item?.url}
                                imageUrl={item?.subcategory__image}

                            />
                        </div>
                    ))}
                    </div>
                 </div>
            </Swiper>
        </section>
    );
}

export default Portfolio3;
