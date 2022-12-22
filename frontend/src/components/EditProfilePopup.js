import { useContext, useState, useEffect, useCallback } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";
import useValidation from "../hooks/useValidation";

function EditProfilePopup(props) {
  const user = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useValidation({
      name: "",
      about: "",
    });

  const { name, about } = values;

  useEffect(() => {
    setValues({
      name: user.name,
      about: user.about,
    });
  }, [user, props.isOpened]);

  useEffect(() => {
    if (!props.isOpened) {
      resetForm();
    }
  }, [props.isOpened]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onUpdateUser({
        name: name,
        about: about,
      });
    }
  }

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      textButton={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          id="name"
          type="text"
          name="name"
          value={name || ""}
          onChange={handleChange}
          placeholder={user.name}
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className={`popup__form-error name-error ${
            isValid ? "" : "popup__form-error_visible"
          }`}
        >
          {errors.name}
        </span>
      </label>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_role"
          id="role"
          type="text"
          name="about"
          value={about || ""}
          onChange={handleChange}
          placeholder={user.about}
          required
          minLength="2"
          maxLength="200"
        />
        <span
          className={`popup__form-error role-error ${
            isValid ? "" : "popup__form-error_visible"
          }`}
        >
          {errors.about}
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
