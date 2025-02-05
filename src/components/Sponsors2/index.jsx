import React from 'react';
import sponsorData from '../Sponsors/sponsorData';
import SponsorLogo from '../Sponsors/SponsorLogo';

function Sponsors2() {
    return (
        <section className="our-brand-patners section-padding pt-0 section-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title-3 text-center">
                            {/* <p>users</p> */}
                            <h1>Association and Partners</h1>
                        </div>
                    </div>

                    <div className="col-lg-12 col-12">
                        <div className="brand-grid" style={{cursor:"pointer"}}>
                            {sponsorData.map((data) => (
                                <SponsorLogo key={data.id} sponsorLogo={data.sponsorLogo} sponsorUrl={data.url} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sponsors2;
