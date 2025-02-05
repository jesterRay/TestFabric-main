import { SRLWrapper } from 'simple-react-lightbox';
import img1 from '../../assets/img/blog/ip1.jpg';
import img2 from '../../assets/img/blog/ip2.jpg';
import img3 from '../../assets/img/blog/ip3.jpg';
import img4 from '../../assets/img/blog/ip4.jpg';
import img5 from '../../assets/img/blog/ip5.jpg';
import img6 from '../../assets/img/blog/ip7.jpg';

function InstaWidget() {
    return (
        <div className="instagram-gallery">
            <SRLWrapper>
                <a href={img1} className="single-photo-item bg-cover ">
                    <img src={img1} alt="" />
                </a>
                <a href={img2} className="single-photo-item bg-cover ">
                    <img src={img2} alt="" />
                </a>
                <a href={img3} className="single-photo-item bg-cover ">
                    <img src={img3} alt="" />
                </a>
                <a href={img4} className="single-photo-item bg-cover ">
                    <img src={img4} alt="" />
                </a>
                <a href={img5} className="single-photo-item bg-cover ">
                    <img src={img5} alt="" />
                </a>
                <a href={img6} className="single-photo-item bg-cover ">
                    <img src={img6} alt="" />
                </a>
            </SRLWrapper>
        </div>
    );
}

export default InstaWidget;
