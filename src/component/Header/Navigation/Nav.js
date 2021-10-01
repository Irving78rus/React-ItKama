// @ts-ignore
import black from "../../../img/black.jpg";

import "../../../../src/App.css";
import React from "react";
import LoginLink from "../loginLink/LoginLink";
import { NavLink } from "react-router-dom";

const  Nav  = React.memo((props) =>{
  
  return (
    <div>
      <nav className="nav container">
        <div className="nav-logo">
          <NavLink to="#">  <img alt="Кушелевка" className="navbar-img" src={black}  /></NavLink>
           
        </div>
        <div className="nav-menu">
          <ul className="nav-ul">
            <li>
            <NavLink to="#" className="nav-link">          главная</NavLink>
           
             
            </li>
            <li>
              <LoginLink data={props} />
            </li>
            <li>
            <NavLink to="#" className="nav-link">    Регистрация</NavLink>
              
            </li>
            <li>
            <NavLink to="#" className="nav-link">     Блог</NavLink>
              
            </li>
            <li>
            <NavLink to="#" className="nav-link">     Контакты</NavLink>
              
            </li>
          </ul>
        </div>
        <form action="#" className="nav-search">
          <input
            type="search"
            className="nav-search_pole"
            name="search"
            placeholder="Поиск по сайту"
          />
          <button type="submit" className="btn-search">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </nav>
    </div>
  );
}
)
export default Nav;
