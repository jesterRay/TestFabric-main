
import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuServiceCard = ({ service }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card style={{ height: '100%' }}>
        <CardActionArea component={Link} to={`/services/${service.associations_and_partners__Name.replace(/ /g, "_")}`}>
          <CardMedia
            component="img"
            height="140"
            image={service.image || 'https://via.placeholder.com/150'}
            alt={service.associations_and_partners__Name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {service.associations_and_partners__Name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {/* Add check to avoid calling slice on undefined */}
              {service.associations_and_partners__Description 
                ? service.associations_and_partners__Description.slice(0, 100)
                : ""}
              ...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MenuServiceCard;
