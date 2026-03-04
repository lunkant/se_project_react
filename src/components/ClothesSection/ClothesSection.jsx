import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

export default function ClothesSection({
  clothingItems,
  handleCardClick,
  handleAddClick,
}) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        <p className="clothes-section__text">Your items</p>
        <button
          className="clothes-section__add-new-btn"
          onClick={handleAddClick}
          type="button"
        >
          + Add new
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
}
