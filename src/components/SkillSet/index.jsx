import React from 'react';
import bgImg from '../../assets/img/skill_bg.jpg';
import leftImg from '../../assets/img/skill_img.jpg';
import SkillBar from './SkillBar';

function SkillSet() {
    return (
        <section className="skill-wrapper section-padding pt-0">
            <div className="container">
                <div
                    className="skill-bg pt-100 pb-100 bg-center bg-cover bg-overlay text-white"
                    style={{
                        backgroundImage: `url(${bgImg})`,
                    }}
                >
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-12 text-center d-none d-xl-block">
                            <img src={leftImg} className="mlm-100" alt="" />
                        </div>
                        <div className="col-xl-6 offset-1 offset-xl-0 col-10 pr-lg-5">
                            <div className="block-contents">
                                <span>Our Skill set</span>
                                <h1>Our Professional and Creative Team</h1>
                                <h4>
                                    Deliver high value to customers - provide significant benefits to fabric testing customers.
                                </h4>
                            </div>
                            {/* PROGRESS BARS */}
                            <SkillBar heading="Construction" progress="70%" />
                            <SkillBar heading="Factoring" progress="90%" />
                            <SkillBar heading="Industry" progress="85%" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSet;
