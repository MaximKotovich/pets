import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./card.css";

export default function Card({ catsArr }) {


  const catsCard = catsArr.map((item) => {     


    return (
      <div className={item.id % 2 == 0 ? "firstContent reverse" : "firstContent"} key = {item.id}>
        <div className="infoFor">
          <p>{item.title}</p>
          <p>{item.description}</p>
          <button>Узнать подробнее</button>
        </div>
        <div className="imgCard">{item.imgUrl}</div>
      
      </div>
    );
  });

  return (
    <div className="containerCard">
      <div className="titleCard">
        <div className="firstTitle activeTitleCard">Котики</div>
        <div className="secTitle">Собачки</div>
      </div>
      <div className="bodyContent">
        {catsCard}
        <div className="secContent"></div>
      </div>
    </div>
  );
}
