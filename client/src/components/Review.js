import React, { useContext } from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { RestaurantContext } from "../context/RestaurantContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Review = () => {
    const { reviews } = useContext(RestaurantContext);

    const settings = {
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const ReviewCard = ({ review }) => (
        <Card
            sx={{ textAlign: "center", width: "50%", padding: "1rem", margin: "4rem auto" }}
            elevation={3}>
            <CardContent>
                <Typography variant='h5' gutterBottom>
                    {review.customer_name}
                </Typography>
                <Typography variant='subtitle1' color='textSecondary' gutterBottom>
                    Rating: {review.rating}
                </Typography>
                <Typography variant='body1' paragraph>
                    {review.comment}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <section style={{ backgroundColor: "#2d1c24", padding: "1rem 0" }}>
            <Container className='review-container'>
                <Typography variant='h3' align='center' gutterBottom>
                    Customer Reviews
                </Typography>
                <Slider {...settings}>
                    {reviews.map((review, index) => (
                        <Box key={index} display='flex' justifyContent='center'>
                            <ReviewCard review={review} />
                        </Box>
                    ))}
                </Slider>
            </Container>
        </section>
    );
};
