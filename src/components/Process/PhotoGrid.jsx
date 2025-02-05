import React from 'react';
import img3 from '../../assets/img/p_bottom_img.jpg';
import img2 from '../../assets/img/p_main_img.jpg';
import img1 from '../../assets/img/p_top_img.jpg';

function PhotoGrid() {
    return (
        <div className="col-xl-5 col-12">
            <div className="photo-style-grid">
                <div
                    className="top-img bg-cover"
                    style={{
                        backgroundImage: `url(${img1})`,
                    }}
                />
                <div
                    className="main-img bg-cover"
                    style={{
                        backgroundImage: `url(${img2})`,
                    }}
                />
                <div
                    className="bottom-img bg-cover"
                    style={{
                        backgroundImage: `url(${img3})`,
                    }}
                />
            </div>
        </div>
    );
}

export default PhotoGrid;
