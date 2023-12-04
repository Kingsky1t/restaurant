// MainPage.js
import React, { useContext } from "react";
import {
    Container,
    Typography,
    Button,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { RestaurantContext } from "../context/RestaurantContext";
import food from "../assets/img/food.avif";

export const BestOffer = () => {
    const { menu } = useContext(RestaurantContext);

    const sortedMenuItems = menu.categories
        .reduce((acc, category) => {
            acc.push(...category.items);
            return acc;
        }, [])
        .sort((a, b) => b.rating - a.rating);

    return (
        <Container className='best-offer-container'>
            <Typography variant='h3' gutterBottom align='center'>
                Trending Dishes
            </Typography>

            <Grid container spacing={3}>
                {sortedMenuItems.slice(0, 4).map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card>
                            <CardMedia component='img' height='140' image={food} alt={item.name} />
                            <CardContent>
                                <Typography variant='h6' gutterBottom>
                                    {item.name}
                                </Typography>
                                <Typography variant='body2' color='textSecondary' paragraph>
                                    {item.description}
                                </Typography>
                                <Typography variant='subtitle1' color='textPrimary'>
                                    ${item.price.toFixed(2)}
                                </Typography>
                                <Typography variant='subtitle2' color='textPrimary'>
                                    Rating: {item.rating}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box display='flex' justifyContent='center' marginTop={2}>
                <Button variant='contained' color='primary' component={Link} to='/menu'>
                    View Full Menu
                </Button>
            </Box>
        </Container>
    );
};
