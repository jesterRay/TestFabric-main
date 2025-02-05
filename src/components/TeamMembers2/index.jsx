import React from 'react';
import TeamMembers from '../TeamMembers';

function TeamMembers2() {
    return (
        <>
            <section className="team-section team-section-2 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12 text-center">
                            <div className="section-title-2">
                                <span>Expertise</span>
                                <p>Our Expertise</p>
                                <h1>Our Expert Mates</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <TeamMembers />
            </section>
        </>
    );
}

export default TeamMembers2;
