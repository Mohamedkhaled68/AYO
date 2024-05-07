import React from "react";
import "./hero.css";
const Hero = () => {
    return (
        <div className="video-container">
            <video
                muted
                autoPlay
                loop
                src="https://dl.dropboxusercontent.com/s/xfw7fnli1jcfnnz/AYO%20Light%20Therapy%20Glasses%20Video.mp4?dl=0"
            ></video>
            <div className="video-overlay">
                <div className="video-content">
                    <h1>Sleep Better,<br/> Boost Energy,<br/> Embrace Wellness</h1>
                    <p>
                        Become healthier, happier, and more active with the
                        World’s First Circadian Health Wearable.
                    </p>
                    <button>BUY AYO+</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
