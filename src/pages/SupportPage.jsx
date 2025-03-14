import React from "react";
import { Card, CardContent, Typography, Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom"; 
import Footer3 from "../components/Footer3";
import Header3 from "../components/Header3";
import certificate from '../assets/img/certificate.jpg'
import customr from '../assets/img/customerss.jpg'
import Customer from '../assets/img/Customer.png'

import orders from '../assets/img/orders.jpg'
import quotes from '../assets/img/quotes.png'
import msdss from '../assets/img/msdss.jpg'
import tracks from '../assets/img/tracks.png'
import downloads from '../assets/img/Downloads.png'
import PageBanner from "../components/PageBanner";
import { Helmet } from "react-helmet";

// Define styles using Material-UI makeStyles
const useStyles = makeStyles((theme) => ({
  supportPage: {
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


function SupportPage() {
  const classes = useStyles();

  // Default image in case any specific image fails to load
  const defaultImg = process.env.REACT_APP_IMAGE_URL + 'images/product_testfabrics.jpg'; 

  return (
    <div>
      <Helmet>
        <title>{`Testfabrics.com: SUPPORT`}</title>
      </Helmet>
      <Header3 />
      <PageBanner currentPage='Support options' heading='Support'/> 
      <div className={classes.supportPage}>
        <Container>
          <Typography variant="h3" className={classes.title}>
            
          </Typography>
          <Grid container spacing={4} justifyContent="flex-start">
            {/* Support Card 1 */}
            <Grid item xs={12} sm={6} md={3}>
                  <Link to="/request-certifiate" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={certificate}
                    alt="Request Certificate of Conformity"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Request Certificate of Conformity
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                    Request your certificate by filling out the form.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                      Request Now
                    </Button>
                </CardContent>
              </Card>
                  </Link>
            </Grid>

            {/* Additional Cards */}
            {/* Support Card 2 */}
            <Grid item xs={12} sm={6} md={3}>
                  <Link to="/msds-request" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={msdss}
                    alt="Request MSDS"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Request MSDS (Material Safety Data Sheet)
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                    Fill out the form to request your MSDS document.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                      Request Now
                    </Button>
                </CardContent>
              </Card>
                  </Link>
            </Grid>

            {/* Support Card 3 */}
            <Grid item xs={12} sm={6} md={3}>
                  <Link to="/order-request" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={orders}
                    alt="Order Request"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Order Request
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                    Submit your order request here.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                      Submit Request
                    </Button>
                </CardContent>
              </Card>
                  </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                  <Link to="/quote-request" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={quotes}
                    alt="Order Request"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                    Quote Request
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                    Submit your quote request here.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                      Submit Request
                    </Button>
                </CardContent>
              </Card>
                  </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                  <Link to="/track-order" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={tracks}
                    alt="Order Request"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                   Track Order 
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                    Track your order  here.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                      Track order
                    </Button>
                </CardContent>
              </Card>
                  </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Link to="/downloads" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={downloads}
                    alt="Order Request"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                  Downloads
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                  Download product guides.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                    Download Now
                    </Button>
                </CardContent>
                
              </Card>
                  </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                  <Link to="/customer-feedback" className={classes.link}>
              <Card className={classes.card}>
                <div className={classes.cardThumb}>
                  <img
                    className={classes.cardImage}
                    src={Customer}
                    alt="Order Request"
                    onError={(e) => e.target.src = defaultImg}  // Set default image on error
                  />
                </div>
                <CardContent className={classes.content}>
                  <Typography variant="h6" className={classes.cardTitle}>
                  Contact Us
                  </Typography>
                  <Typography variant="body2" className={classes.cardDescription}>
                  Reach out to us here.
                  </Typography>
                    <Button variant="contained" fullWidth className={classes.button}>
                    Contact Now
                    </Button>
                </CardContent>
                
              </Card>
                  </Link>
            </Grid>

            {/* More cards can be added here following the same structure */}
          </Grid>
        </Container>
      </div>
      <Footer3 />
    </div>
  );
}

export default SupportPage;
