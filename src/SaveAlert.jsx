import React from "react";
import "./SaveAlert.css";
import success from "./resources/success.png";
const SaveAlert = () => {
  return (
    <div className="save-alert">
      <div>
        <img className="success-img" src={success} />
      </div>
      <div>Patient is successfully saved!</div>
    </div>
  );
};
export default SaveAlert;
