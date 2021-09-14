import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./header.css";
import PhoneIcon from '@material-ui/icons/Phone';
import PetsIcon from '@material-ui/icons/Pets';
import {NavLink} from "react-router-dom"

export default function Header() {

  const divStyle = {
    fontSize: '15px',
  };
  const PetStyle = {
    fontSize: '18px',
  };

  return (
    <header>
      {/* // разметка для логотипа */}

      <div className="logo">
        <p>HAPPY PET</p><PetsIcon style={PetStyle}></PetsIcon>
      </div>

      {/* // разметка для нашего меню */}

      <div className="top-menu">
        <ul>
          <li>
           <PhoneIcon style={divStyle}></PhoneIcon>+375338562365
          </li>
          <li>
            <NavLink to="/">Главная</NavLink>
          </li>
          <li>
            <NavLink to="/friends">Друзья</NavLink>
          </li>
          <li>
            <NavLink to="/service">О сервисе</NavLink>
          </li>
          <li>
           <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
