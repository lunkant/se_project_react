import closeButton from "../../assets/close_button2.svg";
import "./ItemModal.css";
function ItemModal({ activeModal, handleCloseClick, card }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_is-opened"}`}>
      <div className="modal__container_type_image">
        <button
          type="button"
          className="modal__close-btn_type_image"
          onClick={handleCloseClick}
        >
          <img src={closeButton} alt="Close Button modal" />
        </button>
        <img
          src={card.link}
          alt={card.name}
          className="modal__image_type_preview"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
