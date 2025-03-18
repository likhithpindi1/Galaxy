import React from "react";
import { FaTimes } from "react-icons/fa";

const Model = ({ value }) => {
  console.log(value);
  return (
    <div className="model">
      <div className="modal-div">
        <p className="modalcontent">
          Control how much text is generated with a number suffix, such as
          lorem10 to generate 10 words of dummy text.
        </p>
        <FaTimes className="cross" onClick={value}></FaTimes>
      </div>
    </div>
  );
};

export default Model;
