import React from 'react';
// import blogThreeData from './blogThreeData';
import { useApi } from '../../middleware/middleware';
// import BlogThreeItem from './BlogThreeItem';
import DownloadItem from './DownloadItem';

function Downloads() {
    const { data, error, isLoading } = useApi('downloads', {});
    console.log(data);

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
                    {data?.map((item,index) => (
                        <DownloadItem
                            key={item?.files__ID}
                            id={item?.files__ID}
                            thumb={item?.thumbnail}
                            title={item?.files__Name}
                            description={item?.files__Description}
                            index_description={++index + '. ' + item?.files__Description}
                            file_name={item?.files__Name}
                            file_ext={item?.files__Ext}

                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Downloads;
