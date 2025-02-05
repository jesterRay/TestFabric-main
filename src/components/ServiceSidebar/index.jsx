import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaFilePdf, FaFilePowerpoint, FaFileWord, FaMapMarkerAlt } from 'react-icons/fa';
import ServiceCategory from './ServiceCategory';
import ServiceContact from './ServiceContact';
import ServiceDownload from './ServiceDownload';
import { useApi } from '../../middleware/middleware';
import { FacebookShareButton, FacebookIcon, LineShareButton, LinkedinShareButton, LinkedinIcon, EmailShareButton, EmailIcon } from'react-share';

function ServiceSidebar() {
    // next_steps
    const { data, error, isLoading } = useApi('next_steps', {});
    return (
        <div className="service-details-sidebar">
            <div className="single-service-sidebar">
                {/* <div className="sidebar-title">
                    <h3>Related Documentation :</h3>
                </div> */}
                <h5>Next Steps:</h5>
                <ul>
                    {
                        data?.map((item)=>(
                            <ServiceCategory key={item?.associations_and_partners__ID} link="/service-details" category={item?.associations_and_partners__Name} data={item?.associations_and_partners__Description} />
                        ))
                    }
                    {/* <ServiceCategory link="/service-details" category="HOW TO ORDER" />
                    <ServiceCategory link="/service-details" category="GENERAL INFO" /> */}
                    <ServiceCategory link="/calculator" category="CONVERSION CALCULATORRR " />
                    <ServiceCategory link="/contact" category="GET A QUOTE" />
                    <ServiceCategory link="/choose-region" category="CONTACT US" />
                    <ServiceCategory link="/tell-a-friend" category="TELL A FRIEND" />
                    <div className="brochures-download">
                    <ServiceDownload link="/service-details" text="PRINT" 
                        icon={<FaFilePdf style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />

                    </div>
                </ul>
                {/* <div>
                    <h6>Share This on Social Media</h6>
                    <FacebookShareButton
                        url={'https://www.testFabric.com'}
                        quote={'TestFabric'}
                        hashtag="#muo"
                        style={{margin:"0 10px"}}
                    >
                        <FacebookIcon size={32}round />
                    </FacebookShareButton>
                    <LinkedinShareButton
                        url={'https://www.testFabric.com'}
                        quote={'TestFabric'}
                        hashtag="#muo"
                        style={{margin:"0 10px"}}
                    >
                        <LinkedinIcon size={32}round />
                    </LinkedinShareButton>
                    <EmailShareButton
                        url={'https://www.testFabric.com'}
                        quote={'TestFabric'}
                        hashtag="#muo"
                        style={{margin:"0 10px"}}
                    >
                        <EmailIcon size={32}round />
                    </EmailShareButton>
                </div> */}
            </div>
           
            {/* <div className="single-service-sidebar">
                <div className="sidebar-title">
                    <h3>Download Brochures</h3>
                </div>
                <div className="brochures-download">
                    <ServiceDownload
                        link="/services-details"
                        text="Download .PDF"
                        icon={<FaFilePdf style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />
                    <ServiceDownload
                        link="/services-details"
                        text="Download .DOC"
                        icon={<FaFileWord style={{ marginTop: '-5px', marginRight: '5px' }} />}
                    />
                    <ServiceDownload
                        link="/services-details"
                        text="Download .PPT"
                        icon={
                            <FaFilePowerpoint style={{ marginTop: '-5px', marginRight: '5px' }} />
                        }
                    />
                </div>
            </div> */}
            {/* <div className="single-service-sidebar site_info_widget">
                <div className="sidebar-title">
                    <h3>Contact Us</h3>
                </div>
                <div className="contact-us">
                    <ServiceContact
                        title="Phone Number"
                        text="+1 (570) 603 0432"
                        icon={<AiOutlinePhone />}
                    />
                    <ServiceContact
                        title="Email Address"
                        text=" info@testfabrics.com"
                        icon={<AiOutlineMail />}
                    />
                    <ServiceContact
                        title="Office Address"
                        text="415 Delaware Avenue,
West Pittston, PA 18643, USA"
                        icon={<FaMapMarkerAlt />}
                    />

                </div>
            </div> */}
        </div>
    );
}

export default ServiceSidebar;
