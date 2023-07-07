import React from "react";
import { useState } from "react";
import search from "./resources/search.png";
import black_down from "./resources/black_down.png";
import green_down from "./resources/green_down.png";
import add from "./resources/add.png";
import close from "./resources/clear-button.png";
import "./App.css";
// import "./Modal.css";
import Modal from "./Modal";

const Head = ({ handleOnClick, handleOnSearch }) => {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openAddNewPatientModal = () => {
    setIsOpen(true);
    console.log("error");
  };
  return (
    <div className="headpart">
      <div className="head">Patient List</div>
      {/* search add button */}
      <div className="searchadd">
        <form className="headclass">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleOnSearch(e.target.value);
            }}
          />
          <img className="search-icon" src={search} />
        </form>

        <button className="addbutton" onClick={handleOnClick}>
          {<img src={add} />}
          Add new patient
        </button>
      </div>
      {/* DROPDOWN EXAMPLE */}
      <div className="flexdropdown">
        <div className="maindropdown">
          <div className="first-dropdown">
            <select>
              <option>Status All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="second-dropdown">
            <select>
              <option>Breed All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="rightdropdown">
          <p>Rows per pages:</p>
          <div className="third-dropdown">
            <select>
              <option>10</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Head;
