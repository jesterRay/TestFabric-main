import React from 'react';
import teamData from './teamData';
import TeamItem from './TeamItem';

function TeamMembers() {
    return (
        <section className="team-section section-padding">
            <div className="container">
                <div className="row mtm-30">
                    <h3>
                        Our Incredible Team is Our Core
                    </h3>
                    <p>
                        We have a team of experts who specialize in their respective fields, bringing extensive experience and a dedication to providing exceptional services.
                        Testfabrics, Inc. boasts a vast pool of team members and agents across multiple industrialized countries who collaborate with us to facilitate, valuable access, communication, technical services, and smooth international operations.  We are proud of our longstanding partnerships, with some agents collaborating with us for over four decades.
                    </p>
                    {teamData.map((data) => (
                        <TeamItem
                            key={data.id}
                            img={data.img}
                            name={data.name}
                            position={data.position}
                            fbLink={data.fbLink}
                            twitterLink={data.twitterLink}
                            behanceLink={data.behanceLink}
                            youtubeLink={data.youtubeLink}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamMembers;
