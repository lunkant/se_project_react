import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/Sidebar";
function Profile({
  clothingItems,
  handleCardClick,
  handleAddClick,
  handleSignOut,
  handleEditProfileClick,
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
      />
    </section>
  );
}
export default Profile;
