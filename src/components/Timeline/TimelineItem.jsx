import React from 'react';

function TimelineItem({ year, icon, heading, text, transform , image}) {
    return (
        <div className={`single-time-line ${transform}`}>
            <h2>{year}</h2>
            <div className="timeline-img">
                <img src={image} alt={heading} />
            </div>
            <div className="content">
                <h4>{heading}</h4>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default TimelineItem;
