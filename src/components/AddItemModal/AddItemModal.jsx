import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
const AddItemModal = ({ activeModal, onAddItem, handleCloseClick }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
    evt.target.reset();
    resetForm();
  }
  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      {" "}
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          name="imageUrl"
          id="imageUrl"
          placeholder="Image URL"
          required
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      {/* radio */}
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type;</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="hot"
            name="weatherType"
            value="hot"
            required
            onChange={handleChange}
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="warm"
            name="weatherType"
            value="warm"
            required
            onChange={handleChange}
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            className="modal__radio-input"
            id="cold"
            name="weatherType"
            value="cold"
            required
            onChange={handleChange}
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
