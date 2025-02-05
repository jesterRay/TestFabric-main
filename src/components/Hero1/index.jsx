import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.min.css';
// import HeroBg1 from '../../assets/img/home1/hero1.jpg';
// import HeroBg2 from '../../assets/img/home1/hero2.jpg';
import slider1 from '../../assets/img/home1/slider1.jpg'
import slider2 from '../../assets/img/home1/slider2.jpg'
import fabrics from '../../assets/img/home1/fabrics.jpg'
// import slider3 from '../../assets/img/home1/slider3.jpg'


SwiperCore.use([Navigation, Pagination]);

function Hero1() {
    return (
        <section className="hero-slide-wrapper hero-1" style={{ backgroundColor: '#000' }}>
            <Swiper
                className="hero-slider-active"
                navigation
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={0}
                style={{ height: '100%', width: '100%' }} 
            >
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover desktop-slider"
                        style={{
                            backgroundImage: `url(${fabrics})`,
                            backgroundSize: ' 100% 100% ',
                            backgroundPosition: 'center top', // Shift the image downwards
                        }}
                    >
                        {}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="single-slide bg-cover desktop-slider"
                        style={{
                            // backgroundImage: `url(${slider2})`,
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center top', // Shift the image downwards
                        }}
                    >
                        {}
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

export default Hero1;
