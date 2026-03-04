import "./ConfirmDeleteModal.css";
import closeButton from "../../assets/close_button.svg";

export default function ConfirmDeleteModal({
  activeModal,
  handleCloseClick,
  onConfirm,
}) {
  return (
    <div
      className={`modal ${activeModal === "confirm-delete" ? "modal_is-opened" : ""}`}
    >
      <div className="confirm-delete-modal__container">
        <button
          type="button"
          className="confirm-delete-modal__close-btn"
          onClick={handleCloseClick}
        >
          <img src={closeButton} alt="Close button" />
        </button>

        <p className="confirm-delete-modal__text t">
          Are you sure you want to delete this item? <br />
          This action is irreversible.
        </p>

        <button
          type="button"
          className="confirm-delete-modal__confirm-btn"
          onClick={onConfirm}
        >
          Yes, delete item
        </button>

        <button
          type="button"
          className="confirm-delete-modal__cancel-btn"
          onClick={handleCloseClick}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
