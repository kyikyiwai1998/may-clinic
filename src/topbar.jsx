import React from "react";
import "./App.css";
import logo from "./resources/Logo(2).png";
import noti from "./resources/Notifications.png";
import user from "./resources/user image.png";

const TopBar = () => {
    return (
        <div className="topbar">
            <div>
                <img src={logo}/>
            </div>
            <div className="topbar1">
                <img src={noti}/>
                <img src={user}/>
                <div>
                    <p>Lisa</p>
                    <p>Operator</p>
                </div>
            </div>
        </div>
    )
}
export default TopBar;