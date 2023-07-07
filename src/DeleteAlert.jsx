import React from "react";
import "./DeleteAlert.css";
import success from "./resources/success.png";
const DeleteAlert = () => {
  return (
    <div className="delete-alert">
      <div>
        <img className="success-img" src={success} />
      </div>
      <div>Patient is successfully deleted!</div>
    </div>
  );
};
export default DeleteAlert;
