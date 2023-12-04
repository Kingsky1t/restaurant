import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { RestaurantContext } from "../context/RestaurantContext";
import logo from "../assets/img/logo.png";

export const Navbar = () => {
    const { name, location } = useContext(RestaurantContext);

    return (
        <AppBar position='relative'>
            <Toolbar>
                <IconButton edge='start' color='inherit' aria-label='menu'>
                    <img src={logo} alt='Logo' style={{ width: "50px", height: "50px" }} />
                </IconButton>
                <Typography variant='h6' style={{ flexGrow: 1 }}>
                    {name}
                </Typography>

                <Button
                    component='a'
                    href={`https://www.google.com/maps/@${location.latitude},${location.longitude},18z?entry=ttu`}
                    target='_blank'
                    rel='noopener noreferrer'
                    color='inherit'>
                    <LocationOnIcon />
                    <Typography
                        variant='subtitle1'
                        sx={{
                            marginLeft: "5px",
                            display: {
                                xs: "none",
                                md: "block",
                            },
                        }}>
                        {location.address}
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    );
};
