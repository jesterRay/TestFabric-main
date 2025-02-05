import React from 'react';

function SponsorLogo({ sponsorLogo,sponsorUrl }) {
    return (
        <div className="single-brand-logo">
            <a href={sponsorUrl} target='_blank'>
                <img src={sponsorLogo} alt="" 
                // style={{filter: "grayscale(100%)"}}
                />
            </a>
        </div>
    );
}

export default SponsorLogo;
