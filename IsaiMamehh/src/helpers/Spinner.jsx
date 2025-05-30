import React from "react";
import "./spinner.css";

const Spinner = () => {
  return (
    <>
      <div className="spinnerContainer">
        <div className="spinner">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div>Loading...</div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
