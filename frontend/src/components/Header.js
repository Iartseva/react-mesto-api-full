import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../index.css";
import headerLogo from "../../src/images/header__logo.svg";

function Header(props) {  
  return (
    <header className="header">
      <img
        className="header__logo"
        src={headerLogo}
        alt="логотип проекта Mesto"
      />
      <Switch>
        <Route exact path="/">
          <div className="header__user-block">
            <p className="header__user-email">{props.userMail}</p>
            <Link
              to='sign-in'
              className="header__link"
              onClick={props.logout}
            >
              Выйти
            </Link>
          </div>
        </Route>
        <Route path='/sign-up'>
          <Link to='/sign-in' className="header__link" >
            Войти
          </Link>
        </Route>
        <Route path="/sign-in">
          <Link to="/sign-up" className="header__link"  >
            Регистрация
          </Link>
        </Route>
      </Switch>
    </header>
  );
}

export default Header;
