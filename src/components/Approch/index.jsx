import React from 'react';
import ApprochCard from './ApprochCard';
import approchData from './approchData';

function Approch() {
    return (
        <section className="our-approch-wrapper section-padding section-bg">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            {/* <span>Approch</span>
                            <p>Our Approch</p> */}
                            <h1>Capitalise On Hanging</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {approchData.map((data) => (
                        <ApprochCard
                            key={data.id}
                            thumbnail={data.thumb}
                            icon={data.icon}
                            heading={data.heading}
                            text={data.text}
                            btnText={data.btnText}
                            pageLink={data.pageLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Approch;
