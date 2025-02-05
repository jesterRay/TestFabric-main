import React from 'react';
import ServicesOneCard from './ServicesOneCard';
import Icon1 from '../../assets/img/icon/s1.png';
import defaultImage from '../../assets/img/gallery/9.jpg';
import { useApi } from '../../middleware/middleware';
import { useLocation } from 'react-router-dom';
import { extractIdFromUrlPath } from '../../helpers/concatUrlPath';

function Services6() {
    const location = useLocation();
    const categoryId = extractIdFromUrlPath(location.pathname || ''); 

    const { data, error, isLoading } = useApi('products_by_standards_subcategory', { catID: categoryId });


    function suCrypt(id) {
        return btoa(btoa(id));
    }

    return (
        <section className="services-wrapper services-1 section-bg section-padding">
            <div className="container">
                <div className="row">
                </div>
                <div className="row">
                    {
                        (data && data.length > 0) ? (
                            data.map((item, index) => (
                                <ServicesOneCard
                                    key={item.methods__ID}
                                    sucategoryId={item.methods__ID}
                                    bgImg={process.env.REACT_APP_IMAGE_URL + 'standards_images/' + suCrypt(categoryId) + '.jpg'}
                                    defaultImg={defaultImage}
                                    icon={Icon1}
                                    heading={`${index + 1}.${item.methods__Name}`}
                                    subHeading={item?.methods__Description}
                                    btnText={"See Products"}
                                />
                            ))
                        ) : <h3>No result Found</h3>
                    }
                </div>
            </div>
        </section>
    );
}

export default Services6;
