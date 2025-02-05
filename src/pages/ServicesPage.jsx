import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import galleryimage1 from '../assets/img/portfolio/serviceImage1.jpg';
import galleryimage2 from '../assets/img/portfolio/serviceImage2.jpg';
import galleryimage3 from '../assets/img/portfolio/serviceImage3.jpg';
import galleryimage4 from '../assets/img/portfolio/serviceImage4.jpg';
import dyieng from '../assets/img/portfolio/dyeing.jpg';
import sewing from '../assets/img/portfolio/sewing.jpg';
import padding from '../assets/img/portfolio/padding.jpg';
import testing from '../assets/img/portfolio/testing.jpg';
import skeim from '../assets/img/portfolio/skeim.jpg';
import cutting from '../assets/img/portfolio/cutting.jpg';
import paper from '../assets/img/portfolio/paper.jpg';
import slitting from '../assets/img/portfolio/slitting.jpg';


import Footer3 from "../components/Footer3";
import Header3 from "../components/Header3";
import PageBanner from "../components/PageBanner";
import { useApi } from "../middleware/middleware";

const useStyles = makeStyles((theme) => ({
    servicesPage: {
        padding: "50px 0",
        // backgroundColor: "#f7f7f7",
        minHeight: "100vh",
    },
    title: {
        textAlign: "center",
        marginBottom: "40px",
        fontWeight: "bold",
        fontSize: "2.5rem",
        color: "#333",
    },
    card: {
        borderRadius: "12px",
        minHeight: "350px",
        cursor: "pointer",
        padding: '5px',
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
    },
    cardThumb: {
        height: "60%",
        borderRadius: "12px 12px 0 0",
        overflow: "hidden",
    },
    cardImage: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
    },
    content: {
        padding: "15px",
        borderRadius: "0 0 12px 12px",
    },
    cardTitle: {
        fontWeight: "bold",
        marginBottom: "15px",
        fontSize: "1.3rem",
        color: "#333",
    },
    cardDescription: {
        marginBottom: "20px",
        color: "#666",
    },
    button: {
        backgroundColor: "#1976d2",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#1565c0",
        },
        textTransform: "none",
    },
    link: {
        textDecoration: "none",
    },
}));

function ServicesPage() {
    const classes = useStyles();
    const { data, error, isLoading } = useApi("services_list", {});
    const history = useHistory();
    
    // Array of service images
    const serviceImages = [
        galleryimage1,
        galleryimage2,
        galleryimage3,
        galleryimage4,
        dyieng,
        slitting,
        cutting,
        paper,
        sewing,
        padding,
        skeim,
      testing,
    ];

    const shuffledImages = [...serviceImages].sort(() => 0.5 - Math.random())
    // Default image in case of error
    const defaultImg = "/images/default-service.jpg";

    const handleServiceClick = (service) => {
        axios
            .get(`${process.env.REACT_APP_API_URL}services_list_detail?service_id=${service.associations_and_partners__ID}`)
            .then((response) => {
                const responseData = response.data;
                if (responseData.success && responseData.data.length > 0) {
                    const serviceDetail = responseData.data[0];
                    const formattedName = serviceDetail.associations_and_partners__Name.replace(/ /g, "_");
                    history.push({
                        pathname: `/services/${formattedName}`,
                        state: {
                            item: serviceDetail.associations_and_partners__Description,
                            heading: serviceDetail.associations_and_partners__Name,
                            category: serviceDetail.cat_name,
                        },
                    });
                }
            })
            .catch((error) => {
                console.error("Error fetching service details:", error);
            });
    };

    const sortedData = data ? [...data].sort((a, b) => 
        a.associations_and_partners__Name.localeCompare(b.associations_and_partners__Name)
    ) : [];


    return (
        <div>
            <Header3 />
            <PageBanner  currentPage="Services" />
            <div className={classes.servicesPage}>
                <Typography variant="h3" className={classes.title}>
                    
                </Typography>
                <Grid container spacing={4} justifyContent="flex-start">
                    {/* Map through the data to create service cards */}
                    {sortedData && sortedData.map((service, index) => (
                        <Grid item xs={12} sm={6} md={3} key={service.associations_and_partners__ID}>
                            <Card className={classes.card} onClick={() => handleServiceClick(service)}>
                                <div className={classes.cardThumb}>
                                    <img
                                        className={classes.cardImage}
                                        // Use a random image for each card
                                        src={serviceImages[index % serviceImages.length] || defaultImg}

                                        alt={service.associations_and_partners__Name}
                                        onError={(e) => (e.target.src = defaultImg)} // Fallback to default image on error
                                    />
                                </div>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6" className={classes.cardTitle}>
                                        {service.associations_and_partners__Name}
                                    </Typography>
                                    <Typography variant="body2" className={classes.cardDescription}>
                                        {service.associations_and_partners__Description}
                                    </Typography>
                                    <Link to={`/services/${service.associations_and_partners__Name.replace(/ /g, "_")}`} className={classes.link}>
                                        <Button variant="contained" fullWidth className={classes.button}>
                                            View Details
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <Footer3 />
        </div>
    );
}

export default ServicesPage;
