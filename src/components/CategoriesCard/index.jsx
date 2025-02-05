import React from 'react';
import ServicesOneCard from '../Services1/ServicesOneCard';
import './AutoMarquee.css';
import icon1 from "../../assets/img/icon/s1.png";

function AutoMarquee({ data }) {
    function suCrypt(id) {
        return btoa(btoa(id));
    }

    const duplicatedData = data ? [...data, ...data] : [];

    return (
        <section className="auto-marquee-section">
            <div className="marquee">
                <div className="marquee__inner">
                    {duplicatedData.map((item, index) => (
                        <ServicesOneCard
                            key={`marquee-${index}-${item.category__ID}`}
                            categoryId={item.category__ID}
                            alterImg={`${process.env.REACT_APP_IMAGE_URL}cat_images/banner_${suCrypt(item.category__ID)}.jpg`}
                            bgImg={`${process.env.REACT_APP_IMAGE_URL}cat_images/${suCrypt(item.category__ID)}.jpg`}
                            defaultImg={`${process.env.REACT_APP_IMAGE_URL}images/product_testfabrics.jpg`}
                            icon={icon1}
                            index={index + 1}
                            heading={item.category__Name}
                            btnText="View Subcategories"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AutoMarquee;
