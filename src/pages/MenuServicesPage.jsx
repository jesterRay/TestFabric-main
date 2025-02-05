import React, { useEffect, useState } from 'react';
import Header3 from '../components/Header3';
import Footer3 from '../components/Footer3';
import MenuServiceCard from '../components/MenuServices/MenuServicesCard';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import ProjectDetails from '../components/PortfolioDetails/';

const MenuServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch services data from API
    axios
      .get(`${process.env.REACT_APP_API_URL}services_list`)
      .then((response) => {
        if (response.data.success) {
          setServices(response.data.data);
        } else {
          console.error('Failed to fetch services');
        }
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });
  }, []);

  return (
    <div>
      <Header3 />
      
      {/* Render service cards */}
      <Grid container spacing={3} style={{ padding: '20px' }}>
        {services.length > 0 ? (
          services.map((service) => (
            <ProjectDetails key={service.associations_and_partners__ID} service={service} />
          ))
        ) : (
          <p>.</p> // Changed loading message
        )}
      </Grid>

      <Footer3 />
    </div>
  );
};

export default MenuServicesPage;
