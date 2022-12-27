import { useEffect } from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm';
import useValidation from "../hooks/useValidation";

function AddPlacePopup(props) {
  const { values, handleChange, errors, isValid, resetForm } =
    useValidation({
      name: "",
      link: "",
    });

  const { name, link } = values;

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onAddPlace({
        name: name,
        link: link,
      });
    }
  } 

  useEffect(() => {
    if (!props.isOpened) {
      resetForm();
    }
  }, [props.isOpened, resetForm]);

  return (
    <PopupWithForm 
    name="add" 
    title="Новое место" 
    isOpened={props.isOpened} 
    onClose={props.onClose} 
    onSubmit={handleSubmit}
    isValid={isValid}
    textButton={props.isLoading ? "Создание..." : "Создать"}
    >
      <label className="popup__label">
        <input 
        className="popup__input popup__input_type_place" 
        id="place" 
        type="text" 
        name="name" 
        value={name || ''}
        onChange={handleChange}
        placeholder="Название" 
        required minLength="2" 
        maxLength="30" />
        <span className={`popup__form-error place-error ${isValid ? "" : "popup__form-error_visible"}`}>{errors.name}</span>
      </label>
      <label className="popup__label">
        <input 
        className="popup__input popup__input_type_link" 
        id="link" 
        type='url' 
        name="link"
        value={link || ''}
        onChange={handleChange}
        placeholder="Ссылка на картинку" 
        required />
        <span className={`popup__form-error link-error ${isValid ? "" : "popup__form-error_visible"}`}>{errors.link}</span>
      </label>
      </PopupWithForm>
  )
}

export default AddPlacePopup;