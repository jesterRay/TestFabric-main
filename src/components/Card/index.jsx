import React from 'react';
import blogOneData from './BlogOneData';
import BlogOneItem from './BlogOneItem';
import { useApi } from '../../middleware/middleware';

function AssociateCard() {
    const { data, error, isLoading } = useApi('associations_and_partners', {});

    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="section-title text-center">
                            {/* <span style={{color:"lightgray"}}>News</span> */}
                            {/* <p>News Feed</p> */}
                            <h1>Associate & Partners</h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {data?.map((data) => (
                        <BlogOneItem
                            key={data?.associations_and_partners__ID}
                            thumb={data?.associations_and_partners__ID}

                            title={data?.associations_and_partners__Name}
                            description={data?.associations_and_partners__Description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AssociateCard;
