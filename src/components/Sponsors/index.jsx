import React from 'react';
import sponsorData from './sponsorData';
import SponsorLogo from './SponsorLogo';

function Sponsors() {
    return (
        <section className="our-sponsors-wrapper section-padding section-bg">
            <div className="container">
                <div className="row mb-30">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            {/* <span>clients</span> */}
                            {/* <p>Sponsors</p> */}
                            <h1>Our Sponsors</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="brand-grid">
                            {sponsorData.map((data) => (
                                <SponsorLogo key={data.id} sponsorLogo={data.sponsorLogo} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsors;
