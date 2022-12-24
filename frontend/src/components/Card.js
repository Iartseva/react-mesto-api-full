import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card(props) {
  const user = React.useContext(CurrentUserContext);

  // Проверка владельца карты
  const isOwn = props.card.owner._id === user._id;
  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_visible" : ""
  }`;

  function handleCardClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some((i) => i === user._id);
  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  return (
    <div className="element">
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleCardClick}
      />
      <div className="element__description">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-zone">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
          <p className="element__like-count" onClick={handleLikeClick}>
            {props.card.likes.length}
          </p>
        </div>
      </div>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        onClick={handleDeleteClick}
      ></button>
    </div>
  );
}

export default Card;
