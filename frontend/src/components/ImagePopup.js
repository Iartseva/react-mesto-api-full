import React from "react";
import "../index.css";

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpened ? "popup_opened" : ""}`}>
      <figure className="popup__figure">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup;
