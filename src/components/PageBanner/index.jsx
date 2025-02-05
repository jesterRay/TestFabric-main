import React from 'react';

function PageBanner({ bannerBg, currentPage, heading, breadCrumb=true }) {
    return (
        <section
            className="page-banner-wrap-2 "
            // style={{ backgroundImage: `url(${bannerBg})` }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                           { breadCrumb && <div className="breadcrumb-wrap">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {currentPage}
                                        </li>
                                    </ol>
                                </nav>
                            </div>}

                            <div className="page-heading">
                                <h2>{heading}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default PageBanner;

// <section
//     className="page-banner-wrap bg-cover"
//     style={{ backgroundImage: `url(${bannerBg})` }}
// >
//     <div className="container">
//         <div className="row">
//             <div className="col-12 col-lg-12">
//                 <div className="breadcrumb-wrap">
//                     <nav>
//                         <ol className="breadcrumb">
//                             <li className="breadcrumb-item">
//                                 <a href="index.html">Home</a>
//                             </li>
//                             <li className="breadcrumb-item active" aria-current="page">
//                                 {currentPage}
//                             </li>
//                         </ol>
//                     </nav>
//                 </div>

//                 <div className="page-heading text-white">
//                     <h1>{heading}</h1>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>