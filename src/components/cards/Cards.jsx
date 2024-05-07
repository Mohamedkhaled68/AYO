import React, { useEffect, useState } from "react";
import "./cards.css";
import axios from "axios";
import Card from "./Card";
const Cards = () => {
    const [problems, setProblems] = useState([]);
    useEffect(() => {
        axios.get("src/data/problems.json").then((res) => {
            setProblems(res.data);
        });
    }, []);
    return (
        <>
            <div className="cards">
                <h1>
                    More than 70% of people suffer from circadian disruption.
                    This is linked to...
                </h1>
                <div className="cards-container">
                    {problems.map(({ id, imgUrl, description, name }) => {
                        return (
                            <Card
                                key={id}
                                img={imgUrl}
                                des={description}
                                name={name}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Cards;
