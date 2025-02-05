import React, { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import PageBanner from "../components/PageBanner";



function ServiceCardDetails() {
 
  return (
    <div >
     {/* <PageBanner  currentPage="Services" heading="Services" /> */}
     <ProjectDetails/>
    </div>
  );
}

export default ServiceCardDetails;
