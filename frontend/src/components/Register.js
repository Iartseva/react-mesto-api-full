import React from "react";
import { Link, Route } from "react-router-dom";
import useValidation from "../hooks/useValidation";

function Register(props) {
  const { values, handleChange, errors, isValid, setValues, resetForm } =
    useValidation({
      email: "",
      password: "",
    });

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.handleRegister(values.password, values.email);
    }
    resetForm();
  }

  return (
    <form className="form form__login" onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">Регистрация</h2>
      <input
        className="form__input form__input_type_email"
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="username"
        minLength={4}
        required
        onChange={handleChange}
        value={values.email || ""}
      />
      <span
        className={`form__input-error email-error ${
          isValid ? "" : "form__input-error_visible"
        }`}
      >
        {errors.email}
      </span>
      <input
        className="form__input form__input_type_password"
        id="password"
        name="password"
        type="password"
        placeholder="Пароль"
        autoComplete="current-password"
        required
        onChange={handleChange}
        value={values.password || ""}
      />
      <span
        className={`form__input-error email-error ${
          isValid ? "" : "form__input-error_visible"
        }`}
      >
        {errors.password}
      </span>
      <button
        className="form__button-submit"
        type="submit"
        onClick={props.handleRegister}
      >
        Зарегистрироваться
      </button>
      <p className="form__redirect">
        Уже зарегистрированы?
        <Link to="/sign-in" className="form__redirect-link">
          Войти
        </Link>
      </p>
    </form>
  );
}

export default Register;
