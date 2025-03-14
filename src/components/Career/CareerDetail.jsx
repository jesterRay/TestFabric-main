import { useHistory, useLocation } from 'react-router-dom';
import './Career.css'
import { useEffect } from 'react';
import Header3 from '../Header3';
import Footer3 from '../Footer3';
import PageBanner from '../PageBanner';
import bannerBg from '../../assets/img/page-banner.jpg';
import { Helmet } from 'react-helmet';


const CareerDetail = () => {
    const location = useLocation();
    const career = location.state?.career;
    const history = useHistory();
    
    useEffect(() => {
        // Redirect if no career data is present
        if (!career) {
            history.push('/carrers');
        }
    }, [career, history]);
    
    if (!career) {
        return null;
    }

    return(
        <>
            <Helmet>
                <title>{`Testfabrics.com: ${career?.career__Name?.slice(0,60).toUpperCase()}`}</title>

            </Helmet>
            <Header3 />
            <PageBanner bannerBg={bannerBg} heading={'Career Details'} currentPage={'Career Details'} />
            {/* <ContactUs /> */}
            <section className="career-detail container" style={{minHeight: '50vh'}}>
                <div className="row py-5">
                    <div className="col-12 col-md-3 mb-5 mb-md-0">
                        <img 
                            src={career.career_image} 
                            alt={career.career__Name} 
                            className="career-card-image" 
                        />
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="section-title text-left">
                            <h4>{career.career__Name} ({career.career__Abbriviation})</h4>
                        </div>
                        <div className="career-detail-content">
                            <p>{career.career__Description}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer3 />
        </>
    );
}

export default CareerDetail;