import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import brandData from './brandData';
import BrandItem from './BrandItem';

function BrandCarousel() {
    return (
        <div className="brand-wrapper section-bg mb-0 pt-20 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="brand-logo-grid">
                            <Swiper slidesPerView="4" loop>
                                {brandData.map((data) => (
                                    <SwiperSlide key={data.id}>
                                        <BrandItem brandLogo={data.brandLogo} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandCarousel;
