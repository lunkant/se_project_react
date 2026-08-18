import { useContext } from "react";
import closeButton from "../../assets/close_button.svg";
import "./ItemModal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ItemModal({ activeModal, handleCloseClick, card, onDeleteClick }) {
  const currentUser = useContext(CurrentUserContext);
  const ownerId = typeof card.owner === "string" ? card.owner : card.owner?._id;
  const isOwn = ownerId === currentUser?._id;

  return (
    <div
      className={`modal ${activeModal === "preview" ? "modal_is-opened" : ""}`}
    >
      <div className="modal__container_type_image">
        <button
          type="button"
          className="modal__close-btn_type_image"
          onClick={handleCloseClick}
        >
          <img src={closeButton} alt="Close Button modal" />
        </button>
        <img
          src={card.imageUrl}
          alt={card.name}
          className="modal__image_type_preview"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          {isOwn && (
            <button
              className="item-modal__delete-btn"
              onClick={onDeleteClick}
              type="button"
            >
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
