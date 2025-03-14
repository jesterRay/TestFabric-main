import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import TimelineItem from './TimelineItem';
import './App.css'; // Optional for your custom styles

// Install required Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function App() {
    const [heritageData, setHeritageData] = useState([]);

    useEffect(() => {
        const fetchHeritageData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/heritage_page_data`);
                const result = await response.json();

                if (result.success) {
                    setHeritageData(result.data); // Assuming `result.data` contains the timeline data array
                }
            } catch (error) {
                console.error("Error fetching heritage data:", error);
            }
        };

        fetchHeritageData();
    }, []);

    if (heritageData.length === 0) {
        return <div></div>; // Display loading state
    }

    return (
        <section className="timeline-wrapper section-padding">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-left">
                            <h1>Our Heritage</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                {/* Swiper instance with autoplay */}
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides
                    loop
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 2000, // Adjust speed
                        disableOnInteraction: false, // Keeps it autoplaying even after interaction
                    }}
                    speed={3000} // Smooth transition speed for the slides
                    className="timeline-carousel-wrapper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {heritageData.map((data) => (
                        <SwiperSlide key={data.page_id}>
                            <TimelineItem
                                year={data.page_year}
                                image={`https://testfabrics.com/apis/images/${data.page_image}`} // Assuming image URL prefix
                                heading={data.page_heading}
                                text={data.page_long_content}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Decorative SVG line */}
                <svg className="svg-line">
                    <path
                        fillRule="evenodd"
                        stroke="rgb(223, 223, 223)"
                        strokeWidth="2px"
                        strokeDasharray="32, 32"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        d="M2.000,2.000 C2.000,2.000 154.088,121.789 498.000,158.000 C841.912,194.211 878.088,39.793 1158.000,132.000 C1437.912,224.207 1574.088,59.779 1840.000,86.000"
                    />
                </svg>
            </div>
        </section>
    );
}



// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// import 'swiper/swiper-bundle.min.css';
// import timeLineData from './timeLineData';
// import TimelineItem from './TimelineItem';
// import './App.css'; // Optional for your custom styles

// // Install required Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]);

// export default function App() {
//     return (
//         <section className="timeline-wrapper section-padding">
//             <div className="container">
//                 <div className="row mb-30">
//                     <div className="col-12 col-lg-12">
//                         <div className="section-title text-center">
//                             <h1>Our Heritage</h1>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid">
//                 {/* Swiper instance with autoplay */}
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={30}
//                     centeredSlides
//                     loop
//                     pagination={{ clickable: true }}
//                     navigation={true}
//                     autoplay={{
//                         delay: 2000, // Adjust speed
//                         disableOnInteraction: false, // Keeps it autoplaying even after interaction
//                     }}
//                     speed={3000} // Smooth transition speed for the slides
//                     className="timeline-carousel-wrapper"
//                     breakpoints={{
//                         0: {
//                             slidesPerView: 1,
//                         },
//                         576: {
//                             slidesPerView: 2,
//                         },
//                         768: {
//                             slidesPerView: 3,
//                         },
//                         992: {
//                             slidesPerView: 4,
//                         },
//                     }}
//                 >
//                     {timeLineData.map((data) => (
//                         <SwiperSlide key={data.id}>
//                             <TimelineItem
//                                 year={data.year}
//                                 icon={data.icon}
//                                 heading={data.heading}
//                                 text={data.text}
//                                 transform={data.transform}
//                             />
//                         </SwiperSlide>
//                     ))}
//                 </Swiper>

//                 {/* Decorative SVG line */}
//                 <svg className="svg-line">
//                     <path
//                         fillRule="evenodd"
//                         stroke="rgb(223, 223, 223)"
//                         strokeWidth="2px"
//                         strokeDasharray="32, 32"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         fill="none"
//                         d="M2.000,2.000 C2.000,2.000 154.088,121.789 498.000,158.000 C841.912,194.211 878.088,39.793 1158.000,132.000 C1437.912,224.207 1574.088,59.779 1840.000,86.000"
//                     />
//                 </svg>
//             </div>
//         </section>
//     );
// }
