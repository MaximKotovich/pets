import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./content.css";
import pet from "./Kot-sobaka.png";

export default function Content() {
  return (
    <div className="content">
      <div className="leftBlock">
        <div className="contentBlock">
          <p className="title">Твой новый друг</p>
          <p className="bodyContent">
            Онлайн-приют домашних животных подарит тебе нового друга в
            несколько кликов. Действуй!!!
          </p>
          <button>Посмотреть друзей</button>
        </div>
      </div>
      <div className="rightBlock">
        <img src={pet} />
      </div>
    </div>
  );
}
