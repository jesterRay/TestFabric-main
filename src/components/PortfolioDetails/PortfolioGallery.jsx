import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';

function PortfolioGallery({ galeryImg }) {
    return (
        <div className="col-lg-3 col-md-6 col-12">
            <div className="project-shot">
                <SRLWrapper>
                    <a href={galeryImg} className="popup-gallery">
                        {' '}
                        <img src={galeryImg} alt="" />
                    </a>
                </SRLWrapper>
            </div>
        </div>
    );
}

export default PortfolioGallery;
