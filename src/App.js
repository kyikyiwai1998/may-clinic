import React from "react";
import { useState } from "react";
import TopBar from "./topbar";
import Head from "./header";
import Table from "./table";
import allergy from "./resources/allergy.png";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";
import DeleteModal from "./DeleteModal";
import DeleteAlert from "./DeleteAlert";
import UpdateAlert from "./UpdateAlert";
import SaveAlert from "./SaveAlert";
const App = () => {
  const data = [
    {
      id: 1,
      petName: "Milo",
      status: "allergy",
      pawrent: "The Nu San",
      breed: "Beagle",
      gender: "Female",
      dateOfBirth: "1.5.2021",
      contactPhoneNo: "09797122499",
      address: "Yangon",
    },
  ];

  const [tableData, setTableData] = useState(data);
  const [item, setItem] = useState();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showUpdateAlert, setShowUpdateAlert] = useState(false);
  const [showSaveAlert, setShowSaveAlert] = useState(false);
  const [selectedVal, setSelectedVal] = useState(null); //store table object data

  //delete function
  const deleteFunction = () => {
    if (selectedVal) {
      console.log(selectedVal);
      setTableData((prev) => {
        const filteredData = prev.filter((val) => val.id !== selectedVal.id);
        return filteredData;
      });
    }
  };
  //Update function
  const updateFunction = (updatedVal) => {
    setTableData((prev) => {
      const filteredData = prev.map((selectedVal) =>
        selectedVal.id == updatedVal?.id ? updatedVal : selectedVal
      );
      return filteredData;
    });
  };

  const search = (value) => {
    const reg = new RegExp(value.toLowerCase());

    console.log(reg);
  };
  return (
    <div className="allui">
      <TopBar />
      <Head
        handleOnClick={() => setShowAddModal(true)}
        handleOnSearch={(value) => search(value)}
      />
      <Table
        setSelectedVal={setSelectedVal}
        tableData={tableData}
        handleOnUpdate={(val) => {
          setSelectedVal(val);
          setShowUpdateModal(true);
        }}
        handleOnDelete={(val) => {
          setShowDeleteModal(true);
          setSelectedVal(val);
          console.log(val);
        }}
      />
      {showAddModal && (
        <Modal
          handleOnClose={() => setShowAddModal(false)}
          handleOnSave={(newPet) => setTableData([...tableData, newPet])}
          setShowSaveAlert={setShowSaveAlert}
        />
      )}
      {showUpdateModal && (
        <UpdateModal
          handleOnClose={() => setShowUpdateModal(false)}
          selectedVal={selectedVal}
          updateFunction={updateFunction}
          setShowUpdateAlert={setShowUpdateAlert}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          deleteFunction={deleteFunction}
          setShowDeleteAlert={setShowDeleteAlert}
          handleOnClose={() => {
            setShowDeleteModal(false);
          }}
        />
      )}
      {showDeleteAlert && <DeleteAlert />}
      {showUpdateAlert && <UpdateAlert />}
      {showSaveAlert && <SaveAlert />}
    </div>
  );
};
export default App;
