import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/Sidebar";
function Profile({ clothingItems, handleCardClick, handleAddClick }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}
export default Profile;
