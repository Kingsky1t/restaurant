// MenuPage.js
import React, { useContext } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { RestaurantContext } from "../context/RestaurantContext";
import food from '../assets/img/food.avif'
export const Menu = () => {
  const { menu } = useContext(RestaurantContext);

  return (
    <section>

    <Container className='menu-container'> 
      <Typography variant="h2" align="center" gutterBottom>
        Menu
      </Typography>

      {menu.categories.map((category, index) => (
        <div key={index}>
          <Typography variant="h4" gutterBottom>
            {category.name}
          </Typography>

          <Grid container spacing={3} sx={{backgroundColor:'#d2cfc9',
          padding:'2rem',
          marginBlock:'1rem',
          borderRadius:'5px'
        }}>
            {category.items.map((item, itemIndex) => (
              <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                <Card elevation={6}>
                  <CardMedia
                    component="img"
                    height="80%"
                    image={food} 
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}

      <Typography variant="h4" gutterBottom>
        {menu.seasonal_menu.name}
      </Typography>

      <Grid container spacing={3} sx={{backgroundColor:'#d2cfc9',
          padding:'2rem',
          marginBlock:'1rem',
          borderRadius:'5px'
        }}>
            {menu.seasonal_menu.items.map((item, itemIndex) => (
              <Grid item xs={12} sm={6} md={4} key={itemIndex}>
                <Card elevation={6}>
                  <CardMedia
                    component="img"
                    height="80%"
                    image={food} 
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {item.description}
                    </Typography>
                    <Typography variant="subtitle1" color="textPrimary">
                      ${item.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
    </Container>
    </section>
  );
};


