import { useState } from "react";
import close from "./resources/clear-button.png";
import "./Modal.css";
const Modal = (props) => {
  // Added values
  const [petName, setPetName] = useState(" ");
  const [status, setStatus] = useState("");
  const [pawrent, setPawrent] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [Content, setContent] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [township, setTownship] = useState("");
  console.log("createForm");
  console.log("petName", petName);
  return (
    <div
      className="addmodaldiv"
      style={{
        display: "block",
      }}
    >
      <div className="addmodalbox">
        <div className="closeimgdiv">
          <button onClick={props.handleOnClose}>
            <img className="closebtn" src={close} />
          </button>
        </div>
        <div className="h1">Add new patient</div>
        <div className="sub-title">Enter new patient information below</div>
        <div className="modalbody">
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                flex: 1,
              }}
            >
              <lable for="lable">Pet Name</lable>
              <input
                type="text"
                value={petName}
                onChange={(e) => {
                  setPetName(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "10px",
              }}
            >
              <label for="lable">Status</label>
              <select
                // value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose status
                </option>
                <option value="allergy">allergy</option>
                <option value="picky">picky</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <lable for="lable">Patient</lable>
              <input
                type="text"
                value={pawrent}
                onChange={(e) => {
                  setPawrent(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "10px",
              }}
            >
              <label for="lable">Breed</label>
              <select
                // value={breed}
                onChange={(e) => {
                  setBreed(e.target.value);
                }}
              >
                <option value="choose" disabled selected>
                  please choose breed
                </option>
                <option value="beagle">Beagle</option>
                <option value="spaniel">Spaniel</option>
                <option value="goldenretriever">Golden Retriever</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <lable for="lable">Gender</lable>
              <div
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className="radio"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input type="radio" id="male" name="gender" value="male" />
                <label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label for="female">Female</label>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "10px",
              }}
            >
              <label for="lable">Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <lable for="lable">Content</lable>
              <input
                type="text"
                value={Content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "10px",
              }}
            >
              <lable for="lable">Address</lable>
              <input
                type="text"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
              }}
            >
              <label for="lable">City</label>
              <select
                // value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose city
                </option>
                <option value="yangon">Yangon</option>
                <option value="mandalay">Mandalay</option>
                <option value="naypyitaw">Naypyitaw</option>
              </select>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                marginLeft: "10px",
              }}
            >
              <label for="lable">Township</label>
              <select
                // value={township}
                onChange={(e) => {
                  setTownship(e.target.value);
                }}
              >
                <option disabled selected>
                  please choose Township
                </option>
                <option value="hlaing">Hlaing</option>
                <option value="mayangone">Mayangone</option>
                <option value="hlaingtharyar">Hlaing Thar Yar</option>
              </select>
            </div>
          </div>
          <div className="buttons">
            <button
              className="save"
              onClick={() => {
                const newPet = {
                  id: Math.floor(Math.random() * 1000),
                  petName: petName,
                  status: status,
                  pawrent: pawrent,
                  breed: breed,
                  gender: gender,
                  dateOfBirth: dateOfBirth,
                  contactPhoneNo: Content,
                  address: address,
                  city: city,
                  township: township,
                };
                console.log(newPet);
                props.handleOnSave(newPet);
                props.handleOnClose();
                props.setShowSaveAlert(true);
                setTimeout(() => {
                  props.setShowSaveAlert(false);
                }, 3000);
              }}
            >
              Save
            </button>
            <button onClick={props.handleOnClose} className="cancle">
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
