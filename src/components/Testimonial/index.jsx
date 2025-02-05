import React from 'react';
import img1 from '../../assets/img/blog/author3.jpg';

function Testimonial() {
    return (
        <section className="testimonial-section section-padding section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12 text-center">
                        <div className="section-title-2">
                            <div className="icon">
                                <img src="assets/img/logo-icon.png" alt="logo" />
                            </div>
                            <p>Testimonials</p>
                            <h1>Our User Feedback</h1>
                        </div>
                    </div>
                </div>

                <div className="row testimonial-tabs-wrapper">
                    <div className="col-xl-3 p-xl-0 order-2 order-xl-1">
                        <div className="testimonial-nav">
                            <div
                                className="nav flex-column nav-pills"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    className="nav-link"
                                    id="testimonial-id1"
                                    data-toggle="pill"
                                    href="#testimonial1"
                                    role="tab"
                                >
                                    <div className="single-client-tab">
                                        <div
                                            className="profile-img bg-cover"
                                            style={{ backgroundImage: `url(${img1})` }}
                                        />
                                        <div className="client-info">
                                            <h3>Romoda D. Dilnolik</h3>
                                            <p>Founder, Romada Co.</p>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="nav-link active"
                                    id="testimonial-id2"
                                    data-toggle="pill"
                                    href="#testimonial2"
                                    role="tab"
                                >
                                    <div className="single-client-tab">
                                        <div
                                            className="profile-img bg-cover"
                                            style={{ backgroundImage: `url(${img1})` }}
                                        />
                                        <div className="client-info">
                                            <h3>Salman Ahmed</h3>
                                            <p>Founder, ModinaBD Co.</p>
                                        </div>
                                    </div>
                                </a>
                                <a
                                    className="nav-link"
                                    id="testimonial-id3"
                                    data-toggle="pill"
                                    href="#testimonial3"
                                    role="tab"
                                >
                                    <div className="single-client-tab">
                                        <div
                                            className="profile-img bg-cover"
                                            style={{ backgroundImage: `url(${img1})` }}
                                        />
                                        <div className="client-info">
                                            <h3>Rahul D. Joy</h3>
                                            <p>CEO, LocalMal Co.</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-9 pl-xl-5 order-1 order-xl-2">
                        <div className="testimonial-contents">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade show"
                                    id="testimonial1"
                                    role="tabpanel"
                                >
                                    <div className="single-testimonial-content align-items-center">
                                        <div className="engginer-img">
                                            <img src="assets/img/team/team1.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="rating-star">
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fal fa-star" />
                                            </div>
                                            <h3>
                                                The average national hourly rate for house cleaning
                                                services is $25 to $90 per individual, or $50 to $90
                                                per hour. The size and condition of your home will
                                                strongly impact.
                                            </h3>
                                            <a
                                                href="project-details.html"
                                                className="theme-btn theme-2"
                                            >
                                                Case Details{' '}
                                                <i className="fal fa-long-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade show active"
                                    id="testimonial2"
                                    role="tabpanel"
                                >
                                    <div className="single-testimonial-content">
                                        <div className="engginer-img">
                                            <img src="assets/img/team/team2.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="rating-star">
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                            </div>
                                            <h3>
                                                The average national hourly rate for house cleaning
                                                services is $25 to $90 per individual, or $50 to $90
                                                per hour. The size and condition of your home will
                                                strongly impact.
                                            </h3>
                                            <a
                                                href="project-details.html"
                                                className="theme-btn theme-2"
                                            >
                                                Case Details{' '}
                                                <i className="fal fa-long-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade show"
                                    id="testimonial3"
                                    role="tabpanel"
                                >
                                    <div className="single-testimonial-content">
                                        <div className="engginer-img">
                                            <img src="assets/img/team/team3.png" alt="" />
                                        </div>
                                        <div className="content">
                                            <div className="rating-star">
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fas fa-star" />
                                                <span className="fal fa-star" />
                                            </div>
                                            <h3>
                                                The average national hourly rate for house cleaning
                                                services is $25 to $90 per individual, or $50 to $90
                                                per hour. The size and condition of your home will
                                                strongly impact.
                                            </h3>
                                            <a
                                                href="project-details.html"
                                                className="theme-btn theme-2"
                                            >
                                                Case Details{' '}
                                                <i className="fal fa-long-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
