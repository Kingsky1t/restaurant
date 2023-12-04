import React, { useContext } from "react";
import {
    Container,
    Typography,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { RestaurantContext } from "../context/RestaurantContext";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Awards = () => {
    const { awards } = useContext(RestaurantContext);

    return (
        <section style={{padding:"4rem"}}>
            <Container className='awards-container'>
                <Box sx={{
                    width:{
                        xs:'100%',
                        md:'50%',
                    }
                }} margin='auto'>
                <Typography align='center' sx={{
                fontSize:'3rem'}} gutterBottom>
                    <b>Awards</b>
                </Typography>
                    <List>
                        {awards.map((award, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <EmojiEventsIcon fontSize='large' sx={{ color: "white" }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={   
                                        <>
                                            <Typography
                                                
                                                component='span'
                                                sx={{ color: "white",}}>
                                                {award.year} {award.organization}
                                            </Typography>
                                        </>
                                    }
                                    secondary={
                                        <Typography sx={{ color: "white" }}>
                                            {award.award}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Container>
        </section>
    );
};

export default Awards;
