import "./Modal.css";

function Modal({ confirmation, onTodoDelete }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{confirmation}</p>
        <div className="modal__buttons">
          <button
            onClick={onTodoDelete}
            className="btn btn__cancel"
          >
            Cancel
          </button>
          <button onClick={onTodoDelete} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  ); 
}

export default Modal;
