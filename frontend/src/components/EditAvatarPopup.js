import { useRef, useEffect } from "react";
import "../index.css";
import PopupWithForm from "./PopupWithForm";
import useValidation from "../hooks/useValidation";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  const {isValid } =
    useValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = ''
  }, [props.isOpened]);

  return (
   <PopupWithForm
      name="edit-avatar"
      title="Обновить аватар"
      isOpened={props.isOpened}
      onClose={props.onClose}
      textButton={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_link-avatar"
          id="avatar"
          type="url"
          name="avatar"
          ref={avatarRef}
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__form-error avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
