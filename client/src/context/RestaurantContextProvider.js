import React, { useEffect, useState } from "react";
import { RestaurantContext } from "./RestaurantContext";
import axios from "axios";

export const RestaurantContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState({});

    const fetchRestaurant = () => {
        axios
            .get("https://restaurant-backend-jkxb.onrender.com")
            .then((res) => {
                setRestaurant(res.data.restaurant);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchRestaurant();
    }, []);

    return (
        <RestaurantContext.Provider value={{ ...restaurant }}>
            { loading ? <p>Loading...</p> : children }
        </RestaurantContext.Provider>
    );
};
