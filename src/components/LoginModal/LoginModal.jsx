import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";

const LoginModal = ({
  activeModal,
  onLogin,
  handleCloseClick,
  handleRegisterClick,
}) => {
  const defaultValues = { email: "", password: "" };
  const { values, handleChange, resetForm } = useForm(defaultValues);

  useEffect(() => {
    if (activeModal === "login") resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeModal]);
  const isFormValid = Object.values(values).every(
    (value) => value.trim() !== "",
  );
  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <ModalWithForm
      title="Log in"
      name="login"
      buttonText="Log in"
      activeModal={activeModal}
      handleCloseClick={handleCloseClick}
      onSubmit={handleSubmit}
      isSubmitDisabled={!isFormValid}
      altActionText="or Sign up"
      onAltClick={handleRegisterClick}
    >
      <label htmlFor="login-email" className="modal__label">
        Email{" "}
        <input
          type="email"
          className="modal__input"
          id="login-email"
          name="email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="login-password" className="modal__label">
        Password{" "}
        <input
          type="password"
          className="modal__input"
          id="login-password"
          name="password"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
