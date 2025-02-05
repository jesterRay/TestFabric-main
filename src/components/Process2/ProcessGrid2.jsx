import React from 'react';

function ProcessGrid2({ img1, img2, img3 }) {
    return (
        <div className="featured-img bg-cover" style={{ backgroundImage: `url(${img1})` }}>
            <div className="top-img bg-cover" style={{ backgroundImage: `url(${img2})` }} />
            <div className="bottom-img bg-cover" style={{ backgroundImage: `url(${img3})` }} />
        </div>
    );
}

export default ProcessGrid2;
