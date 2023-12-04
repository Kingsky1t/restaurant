import React from "react";
import Awards from "./Awards";
import { BestOffer } from "./BestOffer";
import { Chef } from "./Chef";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Initiatives } from "./Initiatives";
import { Navbar } from "./Navbar";
import { Review } from "./Review";

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Initiatives />
            <Awards />
            <Chef />
            <BestOffer />
            <Review />
            <Contact />
        </>
    );
};
