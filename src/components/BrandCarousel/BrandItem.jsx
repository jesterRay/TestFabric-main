import React from 'react';

function BrandItem({ brandLogo }) {
    return (
        <div className="single-brand">
            <img src={brandLogo} alt="" />
        </div>
    );
}

export default BrandItem;
