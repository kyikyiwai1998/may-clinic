import close from "./resources/clear-button.png";
import "./DeleteModal.css";
const Modal = ({ handleOnClose, deleteFunction, setShowDeleteAlert }) => {
  return (
    <div
      className="delete_modal_div"
      style={{
        display: "block",
      }}
    >
      <div className="delete_modal">
        <div className="closeimgdiv">
          <button onClick={handleOnClose}>
            <img className="closebtn" src={close} />
          </button>
        </div>
        <div className="h2">
          <h2>Confirmation</h2>
        </div>
        <div className="p">Are you sure you want to delete this patient?</div>
        <div className="btngp">
          <button
            className="delete"
            onClick={() => {
              deleteFunction();
              setShowDeleteAlert(true);
              setTimeout(() => {
                setShowDeleteAlert(false);
              }, 3000);
              handleOnClose();
            }}
          >
            Delete
          </button>
          <button onClick={handleOnClose} className="cancle">
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
