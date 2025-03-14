import React from 'react';
import { FaBehance, FaFacebookF, FaPlus, FaTwitter, FaYoutube } from 'react-icons/fa';

function TeamItem({ img, position, name, fbLink, twitterLink, behanceLink, youtubeLink, bio }) {
    return (
        // <div className="col-xl-4 col-md-6 col-12">
        //     <div className="single-team-member">
        //         <div className="member-img">
        //             <img src={img} alt="member" />
        //         </div>
        //         <div className="member-details text-center">
        //             <span>{position}</span>
        //             <h3>{name}</h3>
        //         </div>
        //         <div className="social-icons">
        //             <div className="plus-icon">
        //                 <FaPlus />
        //             </div>
        //             <div className="top">
        //                 <a href={fbLink}>
        //                     <FaFacebookF />
        //                 </a>
        //                 <a href={twitterLink}>
        //                     <FaTwitter />
        //                 </a>
        //             </div>
        //             <div className="right">
        //                 <a href={behanceLink}>
        //                     <FaBehance />
        //                 </a>
        //                 <a href={youtubeLink}>
        //                     <FaYoutube />
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className='col-md-6 col-12 mt-3'>
            <h4><span style={{ color: '#3C62A8' }}>{name}</span></h4>
            <strong style={{ color: '#3C62A8' }} >{position}</strong>
            <p className=''>{bio}</p>
        </div>
    );
}

export default TeamItem;
