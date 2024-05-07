import React from "react";
import "./badges.css";
const Badges = () => {
    const badges = [
        {
            id: 1,
            url: "/assets/images/slide-1.svg",
        },
        {
            id: 2,
            url: "/assets/images/slide-2.svg",
        },
        {
            id: 3,
            url: "/assets/images/slide-3.svg",
        },
        {
            id: 4,
            url: "/assets/images/slide-4.png",
        },
        {
            id: 5,
            url: "/assets/images/slide-5.svg",
        },
    ];
    return (
        <div className="badge-container">
            {badges.map((badge) => (
                <img key={badge.id} src={badge.url} alt="/" />
            ))}
        </div>
    );
};

export default Badges;
