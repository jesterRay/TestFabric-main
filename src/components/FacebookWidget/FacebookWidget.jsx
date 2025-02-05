// src/FacebookFeed.js

import React, { useEffect } from 'react';
import './FacebookWidget.css'; // Import the CSS file for styling

const FacebookWidget = () => {
  useEffect(() => {
    // Dynamically load Elfsight platform script
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true; // Load the script asynchronously
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="marquee">
      {/* Update this div to include the Elfsight app for Testfabrics */}
      <div 
        className="elfsight-app-dcd4b0fb-e0d0-43da-a153-2cccbb70b7e9"  
        data-elfsight-app-lazy 
        data-elfsight-app-url="https://web.facebook.com/p/Testfabrics-Inc-100070179757613/?_rdc=1&_rdr" // Update the Facebook page link here
      ></div>
    </div>
  );
};

export default FacebookWidget;
