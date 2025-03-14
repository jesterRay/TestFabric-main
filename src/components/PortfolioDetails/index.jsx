import React, { useEffect, useState } from 'react';
import galleryImg1 from '../../assets/img/portfolio/serviceImage1.jpg';
import galleryImg2 from '../../assets/img/portfolio/serviceImage2.jpg';
import galleryImg3 from '../../assets/img/portfolio/serviceImage3.jpg';
import galleryImg4 from '../../assets/img/portfolio/serviceImage4.jpg';
import detailsCardData from './detailsCardData';
import PortfolioDetailsCard from './PortfolioDetailsCard';
import PortfolioGallery from './PortfolioGallery';
import Parser from 'html-react-parser';
import { useHistory } from 'react-router-dom';
import CustomPadding from '../ServicesPageComponents/CustomPadding';
import CustomDyeing from '../ServicesPageComponents/CustomDeying';
import CustomSoiling from '../ServicesPageComponents/CustomSoiling';
import CuttingSlitting from '../ServicesPageComponents/CuttingSluitting';
import CustomDies from '../ServicesPageComponents/CustomDies';
import DigitalPrinting from '../ServicesPageComponents/DigitalPrinting';
import PaperBacking from '../ServicesPageComponents/PaperBacking';
import Sewing from '../ServicesPageComponents/Sewing';


function PortfolioDetails({ pageData, heading, category }) {
    const history = useHistory();
    const [src, setSrc] = useState("");
    const [htmlData, setHtmlData] = useState(pageData);

    const extractImageSrc = (htmlCode) => {

        const regex = /src="([^"]+)"/g; //regex to extract the src from the image tag
        const match = regex.exec(htmlCode);
        if (match) {
            setSrc(process.env.REACT_APP_IMAGE_URL + match[1]);
        }

        // const regex2 = /<em>(.*?)<\/em>/g;
        // const pageDataHtml = htmlCode.replace(regex2, "$1");
        // setHtmlData(pageDataHtml)
    };


    useEffect(() => {
        extractImageSrc(pageData);
        // console.log(pageData)
    }, [pageData])
    // console.log("pageData : "+pageData);
    return (
        <section className="project-details-wrapper section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        {/* <div
                            className="project-thumb bg-cover"
                            style={{
                                backgroundImage: `url(${src})`,
                            }}
                        /> */}
                        {/* <div className="project-meta-data">
                            
                            <div className="project-info">
                                <span>Services</span>
                                <h3>{heading}</h3>
                            </div>
                            <div className="project-info">
                                <span>Keyword</span>
                                <h3>{category}</h3>
                            </div>
                            <div className="project-info">
                            </div>
                            <div className="project-info">
                                <a href="portfolio.html" className="theme-btn white">
                                    live preview
                                </a>
                            </div>
                        </div> */}
                        <div className="project-details-content">
                            {/* {
                                pageData&&
                                Parser(pageData)
                            } */}
                            {/* {
                                heading?.toLowerCase() == 'custom dyeing' ?
                                    <CustomDyeing /> :
                                    heading?.toLowerCase() == 'custom padding' ?
                                        <CustomPadding /> :
                                        heading?.toLowerCase() == 'custom soiling' ?
                                            <CustomSoiling /> :
                                            heading?.toLowerCase() == 'cutting & slitting' ?
                                                <CuttingSlitting /> :
                                                heading?.toLowerCase() == 'cutting dies' ?
                                                    <CustomDies /> :
                                                    heading?.toLowerCase() == 'grounds for digital printing' ?
                                                        <DigitalPrinting /> :
                                                        heading?.toLowerCase() == 'paper backing' ?
                                                            <PaperBacking /> :
                                                            heading?.toLowerCase() == 'sewing' ?
                                                                <Sewing /> : null
                                                                
                            } */}
                            <div className='my-5'>
                                {
                                    pageData &&
                                    Parser(pageData)
                                }
                            </div>
                            {/* <CustomPadding/> 
 */}
                            <div className="row py-2">
                                <PortfolioGallery galeryImg={galleryImg1} />
                                <PortfolioGallery galeryImg={galleryImg2} />
                                <PortfolioGallery galeryImg={galleryImg3} />
                                <PortfolioGallery galeryImg={galleryImg4} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-2">
                    {detailsCardData.map((data) => (
                        <PortfolioDetailsCard
                            key={data.id}
                            icon={data.icon}
                            heading={data.heading}
                            num={data.num}
                            text={data.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioDetails;
