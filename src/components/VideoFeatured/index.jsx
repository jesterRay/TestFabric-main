import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import videoBg from '../../assets/img/home3/video_bg.jpg';
import videoFeaturedData from './videoFeaturedData';
import VideoFeaturedItem from './VideoFeaturedItem';

function VideoFeatrued() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId="ZRHrlJDU0OQ"
                onClose={() => setOpen(false)}
            />
            <section className="video-featured-wrapper section-padding section-bg">
                <div className="container-fluid pl-xl-5 pl-50">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-12 ">
                            <div className="section-title-3 pr-xl-0 mr-lg-5">
                                <p>Core Features</p>
                                <h1>
                                Testfabrics: The World's Leading Textile Testing Media Provider
                                </h1>
                            </div>

                            <div className="core-features-list pr-xl-5 pr-50">
                                <div className="row">
                                    {videoFeaturedData.map((data) => (
                                        <VideoFeaturedItem
                                            key={data.id}
                                            icon={data.icon}
                                            heading={data.heading}
                                            text={data.text}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-12 mt-5 mt-xl-0">
                            <div className="video-wrapper text-center d-flex justify-content-center align-items-center">
                                <div className="video-play-btn">
                                    <button
                                        type="button"
                                        className="play-video popup-video"
                                        onClick={() => setOpen(true)}
                                    >
                                        <FaPlay />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="video_bg d-none d-xl-block bg-cover"
                    style={{ backgroundImage: `url(${videoBg})` }}
                />
            </section>
        </>
    );
}

export default VideoFeatrued;
