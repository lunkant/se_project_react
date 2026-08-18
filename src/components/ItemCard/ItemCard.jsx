import { useContext } from "react";
import "./ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeEmpty from "../../assets/like_button_State_default.svg";
import likeFilled from "../../assets/like_button_State_liked.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  const handleImgCardClick = () => {
    onCardClick(item);
  };

  const isLiked = item.likes.some((id) => id === currentUser?._id);

  const handleLike = () => {
    onCardLike({ id: item._id, isLiked });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        {currentUser && (
          <button type="button" className="card__like-btn" onClick={handleLike}>
            <img
              src={isLiked ? likeFilled : likeEmpty}
              alt={isLiked ? "Unlike item" : "Like item"}
              className="card__like-icon"
            />
          </button>
        )}
      </div>
      <img
        onClick={handleImgCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}
export default ItemCard;
