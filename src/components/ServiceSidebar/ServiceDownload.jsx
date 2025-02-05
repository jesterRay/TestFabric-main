import React from 'react';

function ServiceDownload({ link, text, icon }) {
    return (
        <>
            <a href={link} className="theme-btn">
                {icon}
                {text}
            </a>
        </>
    );
}

export default ServiceDownload;
