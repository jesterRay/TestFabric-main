import React from 'react';

function SkillBar({ heading, progress }) {
    return (
        <div className="single-skill-bar">
            <h4>{heading}</h4>
            <div className="progress" style={{ width: '95%' }}>
                <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{
                        width: `${progress}`,
                    }}
                >
                    {progress}
                </div>
            </div>
        </div>
    );
}

export default SkillBar;
