import React from 'react';
// import blogThreeData from './blogThreeData';
import { useApi } from '../../middleware/middleware';
import BlogThreeItem from './BlogThreeItem';

function Downloads() {
    const { data, error, isLoading } = useApi('downloads', {});

    return (
        <section className="blog-wrapper section-padding" style={{paddingTop:"30px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12 mb-20">
                        <div className="section-title-3">
                            {/* <p>Downloads</p> */}
                            <h1>Downloads</h1>
                        </div>
                    </div>
                </div>
                <div className="row" style={{paddingBottom:"2rem"}}>
                    {data?.map((item) => (
                        <BlogThreeItem
                            key={item?.files__ID}
                            thumb={item?.thumbnail}
                            title={item?.files__Description}
                            author={item?.files__Description}
                            meta={item?.meta}
                            postLink={item?.link}
                            category={"Download"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Downloads;
