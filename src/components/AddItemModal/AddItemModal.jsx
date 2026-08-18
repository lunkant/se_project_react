import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
const AddItemModal = ({ activeModal, onAddItem, handleCloseClick }) => {
  const defaultValues = {
    name: "",
    imageUrl: "",
    weatherType: "",
  };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  useEffect(() => {
    if (activeModal === "add-garment") {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModal]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values);
  }

  const isFormValid = Object.values(values).every(
    (value) => value.trim() !== "",
  );

  return (
    <ModalWithForm
      title="New garment"
      name="add-garment"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid}
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
            checked={values.weatherType === "hot"}
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
            checked={values.weatherType === "warm"}
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
            checked={values.weatherType === "cold"}
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
