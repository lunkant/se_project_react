import "./ItemCard.css";
function ItemCard({ item, onCardClick }) {
  const handleImgCardClick = () => {
    onCardClick(item);
  };
  return (
    <li className="card">
      <h2 className="card__name">{item.name}</h2>
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
