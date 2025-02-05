import React from 'react';
import analyticsData from './analyticsData';

function Analytics() {
    return (
        <section className="analytis-wrapper section-padding">
            <div className="container">
                <div className="row align-center">
                    <div className="col-xl-6 pr-xl-5 col-12">
                        <div className="block-contents">
                            <span>Business Analytics</span>
                            <h1>{analyticsData.heading}</h1>
                            <h4>{analyticsData.subHeading}</h4>
                            <p>{analyticsData.desc}</p>
                        </div>
                        <div className="user-data mr-45 d-flex align-items-center">
                            <div
                                className="user-img bg-cover"
                                style={{
                                    backgroundImage: `url(${analyticsData.userImg})`,
                                }}
                            />
                            <div className="user-info">
                                <h5>{analyticsData.userName}</h5>
                                <span>{analyticsData.userPosition}</span>
                            </div>
                            <div className="phone-info">
                                <a href="/">{analyticsData.userPhone}</a>
                                <span>Make An Call</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-12 mt-5 mt-xl-0">
                        <div className="chart-wrapper">
                            <img src={analyticsData.chart} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Analytics;
