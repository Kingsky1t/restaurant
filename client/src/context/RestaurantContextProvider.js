import React, { useEffect, useState } from "react";
import { RestaurantContext } from "./RestaurantContext";
import axios from "axios";

export const RestaurantContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [restaurant, setRestaurant] = useState({});

    const fetchRestaurant = () => {
        axios
            .get("http://localhost:3000/")
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
