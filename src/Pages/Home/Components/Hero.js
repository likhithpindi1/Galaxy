import React from "react";
import video from "../../../video/5194-183786499_small.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay muted loop className="video"></video>
      <div className="content">
        <h1 className="world">Amazing World</h1>
        <p className="para">
          At the heart of globalisation is a new kind of intolerance in the West
          towards other cultures.
        </p>
        <div className="buttons">
          <Link className="link" to="">
            Next
          </Link>
          <Link className="link" to="">
            Load More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
