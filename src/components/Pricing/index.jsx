import React from 'react';
import PricingCard from './PricingCard';
import pricingData from './pricingData';

function Pricing() {
    return (
        <section className="pricing-wrapper section-padding section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            <span>Planning</span>
                            <p>Easy Planning</p>
                            <h1>Price &#38; Plans</h1>
                        </div>
                    </div>
                </div>

                <div className="row no-padding">
                    {pricingData.map((data) => (
                        <PricingCard
                            key={data.id}
                            bgImg={data.bgImg}
                            dollar={data.dollar}
                            cent={data.cent}
                            plan={data.plan}
                            type={data.plan}
                            btnText={data.btnText}
                            link={data.btnLink}
                            status={data.status}
                            features={data.features}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
