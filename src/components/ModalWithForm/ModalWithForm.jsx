import "./ModalWithForm.css";
import closeButton from "../../assets/close_button.svg";
function ModalWithForm({
  title,
  name,
  buttonText = "Add garment",
  handleCloseClick,
  children,
  activeModal,
  onSubmit,
  isSubmitDisabled,
  altActionText,
  onAltClick,
}) {
  return (
    <div
      className={`modal modal_type_${name} ${
        activeModal === name ? "modal_is-opened" : ""
      }`}
    >
      <div className="modal__container">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close-btn"
          onClick={handleCloseClick}
        >
          <img src={closeButton} alt="Close Button modal" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__actions">
            <button
              type="submit"
              className="modal__submit-btn"
              disabled={isSubmitDisabled}
            >
              {buttonText}
            </button>
            {altActionText && (
              <button
                type="button"
                className="modal__alt-btn"
                onClick={onAltClick}
              >
                {altActionText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
