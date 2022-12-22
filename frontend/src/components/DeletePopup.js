import React from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";

function DeletePopup(props) {
  const  {isValid } =
    useValidation({});
  
  function handleSubmit(evt) {
    evt.preventDefault();
    props.onDeleteCard(props.card);
  }

  return (
    <PopupWithForm
      isOpened={props.isOpened}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      name="delete"
      title="Вы уверены?"
      textButton={props.isLoading ? "Удаление..." : "Да"}
    />
  );
}

export default DeletePopup;
