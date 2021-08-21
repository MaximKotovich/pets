import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./header.css";
import PhoneIcon from '@material-ui/icons/Phone';
import PetsIcon from '@material-ui/icons/Pets';

export default function Header() {

  const divStyle = {
    fontSize: '12px',
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
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">Друзья</a>
          </li>
          <li>
            <a href="#">О сервисе</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
