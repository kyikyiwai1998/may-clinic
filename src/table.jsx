import React from "react";
import { useState } from "react";
import more from "./resources/more.png";
import edit from "./resources/edit.png";
import del from "./resources/delete.png";
import "./App.css";
{
  /* UPDATE PATIENT MODAL */
}
const Table = ({
  tableData,
  handleOnDelete,
  setSelectedVal,
  setUpdate,
  handleOnUpdate,
}) => {
  return (
    <div>
      <table className="table1">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>ID</th>
            <th>Pet Name</th>
            <th>Status</th>
            <th>Pawrent</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Contact Phone No.</th>
            <th>Address</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((val, index) => {
            return (
              <tr key={index}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{index + 1}</td>
                <td>{val.petName}</td>
                <td>{val.status}</td>
                <td>{val.pawrent}</td>
                <td>{val.breed}</td>
                <td>{val.gender}</td>
                <td>{val.dateOfBirth}</td>
                <td>{val.contactPhoneNo}</td>
                <td>{val.address}</td>
                <td>
                  <div className="editdelete">
                    <img className="more-img" src={more} />

                    <div className="btn">
                      <button
                        className="editbutton"
                        onClick={() => {
                          handleOnUpdate(val);
                        }}
                      >
                        {<img src={edit} />}Edit
                      </button>
                      <button
                        className="delbutton"
                        onClick={() => {
                          handleOnDelete(val);
                        }}
                      >
                        {<img src={del} />}Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
