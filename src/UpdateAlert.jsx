import React from "react";
import "./UpdateAlert.css";
import success from "./resources/success.png";
const UpdateAlert = () => {
  return (
    <div className="update-alert">
      <div>
        <img className="success-img" src={success} />
      </div>
      <div>Patient is successfully created!</div>
    </div>
  );
};
export default UpdateAlert;
