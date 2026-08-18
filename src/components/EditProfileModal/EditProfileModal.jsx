import { useContext, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import CurrentUserContext from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ activeModal, onUpdateUser, handleCloseClick }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({ name: "", avatar: "" });

  useEffect(() => {
    if (activeModal === "edit-profile" && currentUser) {
      setValues({ name: currentUser.name, avatar: currentUser.avatar });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModal]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values);
  }

  return (
    <ModalWithForm
      title="Change profile data"
      name="edit-profile"
      buttonText="Save"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="edit-name"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="30"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="edit-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          className="modal__input"
          id="edit-avatar"
          name="avatar"
          placeholder="Avatar URL"
          required
          value={values.avatar}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
