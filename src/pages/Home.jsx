import React from "react";
import Hero from "../components/hero/Hero";
import Badges from "../components/badges/Badges";
import Meet from "../components/meet/Meet";
import Cards from "../components/cards/Cards";

const Home = () => {
    return (
        <>
            <Hero />
            <Badges />
            <Meet />
            <Cards />
        </>
    );
};

export default Home;
