import React from 'react';
import suCrypt from '../../helpers/suCrypt';

// Base URL from environment variable
const BASE_URL = process.env.REACT_APP_IMAGE_URL || "https://testfabrics.com/";


const downloadFile = (fileId, fileName, fileExt) => {
    const encodedId = suCrypt(fileId);
    const fileUrl = `${BASE_URL}downloadfiles/${encodedId}.${fileExt}`; // Direct file URL

    fetch(fileUrl, { method: "GET" })
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${fileName.replace(/ /g, "_")}.${fileExt}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        })
        .catch(error => console.error("Download failed:", error));
};



// Function to get preview URL
const getPreviewUrl = (fileName, fileExt) => {
    return `${BASE_URL}download.php?filename=${fileName}&ext=${fileExt}`;
};

function DownloadItem({ 
    id,
    thumb,
    description,
    index_description,
    file_name,
    file_ext
}) {
    return (
        <div className="col-xl-4 col-md-6 col-12">
            <div className="single-news-card">
                <div
                    className="featured-thumb bg-cover"
                    style={{ backgroundImage: `url(${thumb})` }}
                />
                <div className="post-content">
                    <div className="post-meta d-flex">
                        <div className="post-author mr-2">
                            <i className="fal fa-user" />
                            <a href="#" onClick={(e) => e.preventDefault()}>{index_description}</a>
                        </div>
                    </div>
                    <h3>
                        {/* Open preview in new tab (direct file link) */}
                        <a 
                            href={getPreviewUrl(file_name, file_ext)}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {description}
                        </a>
                    </h3>
                    {/* Download button */}
                    <button 
                        className="btn btn-primary cursor-pointer mt-3"
                        onClick={() => downloadFile(id,file_name, file_ext)}
                    >
                        Download Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DownloadItem;
