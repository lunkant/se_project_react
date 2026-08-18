import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/Sidebar";
function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  handleSignOut,
  handleEditProfileClick,
  onCardLike,
}) {
  return (
    <section className="profile">
      <SideBar
        handleSignOut={handleSignOut}
        handleEditProfileClick={handleEditProfileClick}
      />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
        onCardLike={onCardLike}
      />
    </section>
  );
}
export default Profile;
