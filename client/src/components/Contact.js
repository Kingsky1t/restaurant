import React, { useContext } from 'react'
import { Box, Container, Typography, IconButton } from '@mui/material';
import { Link, Facebook, Instagram, Twitter } from '@mui/icons-material';
import { RestaurantContext } from '../context/RestaurantContext';


export const Contact = () => {
    const {online_presence}=useContext(RestaurantContext)

    return (
        <section style={{ backgroundColor: '#141a18', padding: '1rem 0' }}>
          <Container>
            <Typography variant="h6" gutterBottom textAlign="center">
              Connect with Us
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
              <IconButton component="a" href={online_presence.website} target="_blank" rel="noopener noreferrer" color="inherit">
                <Link />
              </IconButton>
              <IconButton component="a" href={online_presence.social_media.facebook} target="_blank" rel="noopener noreferrer" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton component="a" href={online_presence.social_media.instagram} target="_blank" rel="noopener noreferrer" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton component="a" href={online_presence.social_media.twitter} target="_blank" rel="noopener noreferrer" color="inherit">
                <Twitter />
              </IconButton>
            </Box>
          </Container>
        </section>
      );
}
