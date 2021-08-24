
// @ts-ignore
import black from "../../../img/black.jpg";
import '../../../../src/App.css'
import React from "react";
import { NavLink, Route } from "react-router-dom";
import toggleIsFetching from '../../../redux/UsersReducer'
import LoginContainer from "../login/LoginContainer";

function Nav(props) {
  console.log(props);
  return (
    <div>
      <nav className="nav container">
        <div className="nav-logo">
          <a href="#">
            <img alt="Кушелевка" className="navbar-img" src={black} />
          </a>
        </div>
        <div className="nav-menu">
          <ul className="nav-ul">
            <li><a className="nav-link" href="">главная</a></li>
            <li>
                  <Route path="/login" render={() =>  <LoginContainer/>} /> 
            </li>
            <li><a className="nav-link" href="">Регистрация</a></li>
            <li><a className="nav-link" href="">Блог</a></li>
            <li><a className="nav-link" href="">Контакты</a></li>
          </ul>
        </div>
        <form action="#" className="nav-search">
          <input type="search" className="nav-search_pole" name="search" placeholder="Поиск по сайту" />
          <button type="submit" className="btn-search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </nav>
    </div>
  );
}

export default Nav;
