import React from "react";

const Card = ({ id, img, des, name }) => {
    return (
        <>
            <div key={id} className="card-container">
                <div className="card-icon">
                    <img src={img} alt="/" />
                </div>
                <div className="card-details">
                    <h2>{name}</h2>
                    <p>{des}</p>
                </div>
            </div>
        </>
    );
};

export default Card;
