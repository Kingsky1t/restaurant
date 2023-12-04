import React, { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
import { Box, Card, CardContent, Container, Grid, Paper, Typography } from "@mui/material";

export const Initiatives = () => {
    const { sustainability } = useContext(RestaurantContext);
    const { initiatives } = sustainability;
    

    return (
        <section >
            <Container className="initiatives-container">
                <Paper elevation={3} sx={{
                    p:{xs:1,
                        md:3,
                    },
                    backgroundColor:"#656d5b",

                }}>
                    <Grid container spacing={2} justifyContent='center' >
                        {initiatives.map((initiative, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} >
                                <Card >
                                    <CardContent >
                                        <Typography variant='h5' gutterBottom>
                                            {initiative.name}
                                        </Typography>
                                        <Typography variant='body2' color='textSecondary'>
                                            {initiative.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Container>
        </section>
    );
};
