import React, { useEffect, useState } from 'react';
import bannerBg from '../assets/img/page-banner.jpg';
import PageBanner from '../components/PageBanner';
import PortfolioDetails from '../components/PortfolioDetails';
import { useLocation, useParams } from "react-router-dom";
import Header3 from '../components/Header3';
import Parser from 'html-react-parser';
import Footer3 from '../components/Footer3';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function ProjectDetails() {
    let location = useLocation();
    let { serviceName } = useParams();
    const [data, setData] = useState(location.state);
    const [loading, setLoading] = useState(!location.state);
    const [error, setError] = useState(null);

    console.log("data is: ",data);
    console.log(serviceName);

    useEffect(() => {

        const fetchServiceList = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}services_list`);
                if (response.data.success && response.data.data.length > 0) {
                    const serviceList = response.data.data;
                    const service = serviceList.find(item => item.associations_and_partners__Name.replace(/ /g, '_') === serviceName);
                    if (service) {
                        fetchData(service.associations_and_partners__ID);
                    } else {
                        setError('No service found with the specified name.');
                        setLoading(false);
                    }
                } else {
                    setError('Error fetching service list.');
                    setLoading(false);
                }
            } catch (error) {
                setError('Error fetching service list.');
                setLoading(false);
            }
        };

        const fetchData = async (serviceId) => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}services_list_detail?service_id=${serviceId}`);
                if (response.data.success && response.data.data.length > 0) {
                    const serviceDetail = response.data.data[0];
                    setData({
                        heading: serviceDetail.associations_and_partners__Name,
                        item: serviceDetail.associations_and_partners__Description,
                        category: serviceDetail.cat_name
                    });
                } else {
                    setError('No data found for the specified service.');
                }
            } catch (error) {
                setError('Error fetching service details.');
            } finally {
                setLoading(false);
            }
        };

        if (!location.state) {
            fetchServiceList();
        }

      
    }, [location.state, serviceName]);

    // if (loading) return <div>Loading...</div>;
    // if (error) return <div>{error}</div>;

    return (
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${data?.heading?.slice(0,50) || "SERVICE"}`}</title>
            </Helmet>
            <Header3 />
            <section className="page-banner-wrap-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">
                            <div className="breadcrumb-wrap">
                                <nav>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {data?.heading}
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                            <div className="page-heading">
                                <h2>{data?.heading}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {
                data && (
                    <PortfolioDetails pageData={data?.item} heading={data?.heading} category={data?.category} />
                )
            }
            <Footer3 />
        </>
    );
}

export default ProjectDetails;
