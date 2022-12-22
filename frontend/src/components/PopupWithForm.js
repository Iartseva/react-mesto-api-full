import React from "react";
import "../index.css";

function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${!props.isOpened ? "" : "popup_opened"}`}
    >
      <div className="popup__container">
        <form
          className="popup__form popup__form_type_edit-profile"
          onSubmit={props.onSubmit}
          name={`popup__form-${props.name}`}
          noValidate
        >
          <h2 className="popup__title">{props.title}</h2>
          {props.children}
          <button 
          className={`popup__button-submit ${props.isValid ? '' : 'popup__button-submit_disabled'} `}
          type="submit"
          disabled={!props.isValid}>
          {props.textButton}
          </button>
        </form>
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
