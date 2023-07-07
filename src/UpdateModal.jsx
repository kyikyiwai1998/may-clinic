import { useState } from "react";

import "./UpdateModal.css";
const Modal = (props) => {
  // Updated vallues
  const [updatePetName, setUpdatePetName] = useState(props.selectedVal.petName);
  const [updateStatus, setUpdateStatus] = useState(props.selectedVal.status);
  const [updatePawrent, setUpdatePawrent] = useState(props.selectedVal.pawrent);
  const [updateBreed, setUpdateBreed] = useState(props.selectedVal.breed);
  const [updateGender, setUpdateGender] = useState(props.selectedVal.gender);
  const [updateDateOfBirth, setUpdateDateOfBirth] = useState(
    props.selectedVal.dateOfBirth
  );
  const [updateContent, setUpdateContent] = useState(
    props.selectedVal.contactPhoneNo
  );
  const [updateAddress, setUpdateAddress] = useState(props.selectedVal.address);
  const [updateCity, setUpdateCity] = useState(props.selectedVal.city);
  const [updateTownship, setUpdateTownship] = useState(
    props.selectedVal.township
  );
  console.log("updateGender", updateGender);
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
            <img
              className="closebtn"
              src={require("./resources/clear-button.png")}
            />
          </button>
        </div>
        <div className="h1">Update patient</div>
        <div className="sub-title">Enter update patient information below</div>
        <div className="modalbody">
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <lable for="lable">Pet Name</lable>
              <input
                type="text"
                value={updatePetName}
                onChange={(e) => setUpdatePetName(e.target.value)}
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
                value={updateStatus}
                onChange={(e) => setUpdateStatus(e.target.value)}
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
                value={updatePawrent}
                onChange={(e) => setUpdatePawrent(e.target.value)}
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
                value={updateBreed}
                onChange={(e) => setUpdateBreed(e.target.value)}
              >
                <option disabled selected>
                  please choose breed
                </option>
                <option value="allergy">Beagle</option>
                <option value="picky">Spaniel</option>
                <option value="picky">Golden Retriever</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <lable for="lable">Gender</lable>
              <div
                className="radio"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={updateGender == "Male" ? true : false}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setUpdateGender(e.target.value);
                  }}
                />
                <label for="male" />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={updateGender == "Female" ? true : false}
                  onChange={(e) => setUpdateGender(e.target.value)}
                />
                <label for="female" />
                Female
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
                value={updateDateOfBirth}
                onChange={(e) => setUpdateDateOfBirth(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <lable for="lable">Contact Phone No</lable>
              <input
                type="text"
                value={updateContent}
                onChange={(e) => setUpdateContent(e.target.value)}
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
                value={updateAddress}
                onChange={(e) => setUpdateAddress(e.target.value)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
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
                value={updateCity}
                onChange={(e) => setUpdateCity(e.target.value)}
              >
                <option disabled selected>
                  please choose city
                </option>
                <option value="allergy">Yangon</option>
                <option value="picky">Mandalay</option>
                <option value="picky">Naypyitaw</option>
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
                value={updateTownship}
                onChange={(e) => setUpdateTownship(e.target.value)}
              >
                <option disabled selected>
                  please choose Township
                </option>
                <option value="allergy">Hlaing</option>
                <option value="picky">Mayangone</option>
                <option value="picky">Hlaing Thar Yar</option>
              </select>
            </div>
          </div>
          <div className="buttons1">
            <button
              className="update"
              onClick={() => {
                props.updateFunction({
                  ...props.selectedVal,
                  petName: updatePetName,
                  status: updateStatus,
                  pawrent: updatePawrent,
                  breed: updateBreed,
                  gender: updateGender,
                  dateOfBirth: updateDateOfBirth,
                  Content: updateContent,
                  address: updateAddress,
                  city: updateCity,
                  township: updateTownship,
                });
                props.handleOnClose();
                props.setShowUpdateAlert(true);
                setTimeout(() => {
                  props.setShowUpdateAlert(false);
                }, 3000);
              }}
            >
              Update
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
