import React from "react";
import img1 from "../../../slick/pexels-felixmittermeier-956999.jpg";
import img2 from "../../../slick/pexels-felixmittermeier-957061.jpg";
import img3 from "../../../slick/pexels-jnovphoto-924824.jpg";
import img4 from "../../../slick/pexels-kaip-1341279.jpg";
import img5 from "../../../slick/pexels-minan1398-920534.jpg";
import img6 from "../../../slick/pexels-neale-lasalle-197020-631477.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Service = () => {
  // let new_array = [img1, img2, img3, img4, img5, img6, img7];
  let new_array = [img1];
  console.log(new_array);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="service">
      <h1 className="heads">Service</h1>
      <Slider {...settings}>
        <div>
          <img src={img1} alt="" className="img1"></img>
        </div>
        <div>
          <img src={img2} alt="" className="img1"></img>
        </div>
        <div>
          <img src={img3} alt="" className="img1"></img>
        </div>
        <div>
          <img src={img4} alt="" className="img1"></img>
        </div>
        <div>
          <img src={img5} alt="" className="img1"></img>
        </div>
        <div>
          <img src={img6} alt="" className="img1"></img>
        </div>
      </Slider>
    </div>
  );
};

export default Service;
