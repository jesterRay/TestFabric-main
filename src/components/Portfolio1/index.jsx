import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import portfolioOneData from './porfolioOneData';
import PortfolioOneSlide from './PortfolioOneSlide';

SwiperCore.use([Navigation]);

function Porfolio1() {
    return (
        <section className="portfolio-section section-padding pt-0">
            <div className="container">
                <div className="project-wrapper">
                    <Swiper navigation className="portfolio-carousel-active owl-carousel">
                        {portfolioOneData.map((data) => (
                            <SwiperSlide key={data.id}>
                                <PortfolioOneSlide
                                    image={data.image}
                                    imgLink={data.imgLink}
                                    category={data.category}
                                    client={data.client}
                                    title={data.heading}
                                    desc={data.desc}
                                    btnText={data.btnText}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Porfolio1;
