import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.min.css'; // Ensure Swiper styles are included
import { FaDraftingCompass } from 'react-icons/fa';
import ServicesTwoCard2 from './SevicesTwoCard2';

// Install Swiper modules
SwiperCore.use([Navigation]);

export default function AllSearch(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + 'search_methods', {
            params: {
                search: props?.search
            },
        })
        .then((response) => {
            setData(response?.data?.data || []);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [props?.search]);

    return (
        <>
            {props?.data?.length > 0 && (
                <Swiper
                    navigation
                    pagination={false} // Disable pagination dots
                    spaceBetween={20}
                    slidesPerView={3}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        700: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="portfolio-carousel-wrapper"
                    speed={600} // Smooth transition speed
                    loop={true} // Enable loop for continuous scrolling
                >
                    {props?.data.map((item) => (
                        <SwiperSlide key={item?.product__ID}>
                            <ServicesTwoCard2
                                productId={item?.product__ID}
                                thumbnail={item?.product__ID}
                                defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                icon={<FaDraftingCompass />}
                                heading={item?.product__Name}
                                text={item?.product__Description?.slice(0, 95) + "..." || ""}
                                subheading={item?.product__Number}
                                onHide={props.onHide}
                                searchType={props?.searchType}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            {data.length > 0 && (
                <>
                    <h4>Test Methods: ({data?.length})</h4>
                    <Swiper
                        navigation
                        pagination={false} // Disable pagination dots
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="portfolio-carousel-wrapper"
                        speed={600} // Smooth transition speed
                        loop={true} // Enable loop for continuous scrolling
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item?.product__ID}>
                                <ServicesTwoCard2
                                    productId={item?.product__ID}
                                    thumbnail={item?.product__ID}
                                    defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                    icon={<FaDraftingCompass />}
                                    heading={item?.product__Name}
                                    text={item?.product__Description?.slice(0, 95) + "..." || ""}
                                    subheading={item?.product__Number}
                                    onHide={props.onHide}
                                    searchType={props?.searchType}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}

            {data.length > 0 && (
                <>
                    <h4>Standard Methods: ({data?.length})</h4>
                    <Swiper
                        navigation
                        pagination={false} // Disable pagination dots
                        spaceBetween={20}
                        slidesPerView={3}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            700: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="portfolio-carousel-wrapper"
                        speed={600} // Smooth transition speed
                        loop={true} // Enable loop for continuous scrolling
                    >
                        {data.map((item) => (
                            <SwiperSlide key={item?.product__ID}>
                                <ServicesTwoCard2
                                    productId={item?.product__ID}
                                    thumbnail={item?.product__ID}
                                    defaultImg={process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'}
                                    icon={<FaDraftingCompass />}
                                    heading={item?.product__Name}
                                    text={item?.product__Description?.slice(0, 95) + "..." || ""}
                                    subheading={item?.product__Number}
                                    onHide={props.onHide}
                                    searchType={props?.searchType}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </>
    );
}
