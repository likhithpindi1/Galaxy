import React, { useState } from "react";
import Model from "./Model";

const Calltoaction = () => {
  let [modal, setModal] = useState(false);
  let handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="modal-pop">
        <h1 className="modelhead">Herry Up To Watch Live!</h1>
        <button className="watch" onClick={handleModal}>
          Watch!
        </button>
      </div>
      {modal && <Model value={handleModal} />}
    </>
  );
};

export default Calltoaction;
