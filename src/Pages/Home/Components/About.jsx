import React from "react";
import image from "../../../images/photorealistic-galaxy-background.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="head">
        <h1>About Us</h1>
      </div>

      <div className="image_img">
        <img src={image} alt="galaxy" className="image"></img>
        <div>
          <h1>Improve</h1>
          <p className="content-2">
            Explore Authentic Roller World Stock Videos & Footage For Your
            Project Or Campaign. Less Searching, More Finding With Getty Images.
          </p>
          <p className="content-2">
            Explore Authentic Roller World Stock Videos & Footage For Your
            Project Or Campaign. Less Searching, More Finding With Getty Images.
          </p>
          <p className="content-2">
            Explore Authentic Roller World Stock Videos & Footage For Your
            Project Or Campaign. Less Searching, More Finding With Getty Images.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
