import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import backgroundImage from "../assets/img/hero-background.jpg";
import { Box, Typography, Container, Button } from "@mui/material";
import {Link} from 'react-router-dom'

export const Hero = () => {
    const { ambiance } = useContext(RestaurantContext);

    const heroStyles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
      };
    
      const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
        backdropFilter: 'blur(5px)', // Blur effect
        zIndex:'-1'
      };
    
    return (
        <Box sx={heroStyles} className="hero-image">
            <div style={overlayStyles}></div>
            <Container maxWidth="md" >
                <Typography variant='h2' gutterBottom>
                    Life's Too Short For Boring Food
                </Typography>  
                <Typography sx={{fontSize:{
                  
                }}} gutterBottom>
                    {ambiance.description}
                </Typography>
            </Container>
            
            <Button variant="contained" size='large' color="primary" component={Link} to='/menu' sx={{marginBlock:"2rem"}}>
          Explore Menu
        </Button>
        </Box>
    );
};
