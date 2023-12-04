import React, { useContext } from "react";
import {
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Box,
} from "@mui/material";
import { RestaurantContext } from "../context/RestaurantContext";
import chefPic from "../assets/img/chef.png";
import kitchen from '../assets/img/kitchen.jpg'

export const Chef = () => {
    const { chef } = useContext(RestaurantContext);
    const heroStyles = {
        backgroundImage: `url(${kitchen})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        paddingBlock:'4rem'
      };
    
      const overlayStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'red', 
        backdropFilter: 'blur(10px)', 
        zIndex:'-1'
      };

    return (
        <section style={heroStyles}>
            <div style={overlayStyles}></div>
            <Container className='chef-container'>
                    <Typography variant='h3' align='center' gutterBottom>
                        About Our Chef
                    </Typography>
                    <Paper
                        elevation={3}
                        sx={{
                            width: "30%",
                            margin:"auto",
                            backgroundColor: "#474e60",
                            padding:"1rem",
                            display:"flex",
                            flexDirection:"column",
                            alignItems:"center",
                        }}>
                        <CardMedia
                            component='img'
                            image={chefPic} 
                            alt='Chef'
                            sx={{
                                width: "90%",
                                backgroundColor:"white",
                                borderRadius:"20px",
                            }}
                        />
                        <CardContent sx={{ color: "white" }}>
                            <Typography variant='h4' align='left' gutterBottom>
                                {chef?.name}
                            </Typography>
                            <Typography variant='body1' align='left' component='p'>
                                {chef?.bio}
                            </Typography>
                            <Typography variant='h6' align='left' style={{ marginTop: "10px" }}>
                                Signature Dish: {chef?.signature_dish}
                            </Typography>
                        </CardContent>
                    </Paper>
            </Container>
        </section>
    );
};
