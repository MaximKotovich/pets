import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./card.css";

export default function Card({ catsArr, dogArr }) {
  const [cat, setCat] = useState(true);
  const [dog, setDog] = useState(false);

  const catsCard = catsArr.map((item) => {
    return (
     
      <div className={cat ? "preFirst activeContent" : "preFirst"}>
        <div
          className={item.id % 2 == 0 ? "firstContent reverse" : "firstContent"}
          key={item.id}
        >
          <div className="infoFor">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <button>Узнать подробнее</button>
          </div>
          <div className="imgCard">{item.imgUrl}</div>
        </div>
      </div>
    );
  });


  const dogCard = dogArr.map((index) => {
    return (
     
      <div className={dog ? "preFirst activeContent" : "preFirst"}>
        <div
          className={index.id % 2 == 0 ? "firstContent reverse" : "firstContent"}
          key={index.id}
        >
          <div className="infoFor">
            <p>{index.title}</p>
            <p>{index.description}</p>
            <button>Узнать подробнее</button>
          </div>
          <div className="imgCard">{index.imgUrl}</div>
        </div>
      </div>
    );
  });


  return (
    <div className="containerCard">
      <div className="titleCard">
        <div
          className={cat ? "firstTitle activeTitleCard" : "firstTitle"}
          onClick={() => {
            setCat(true);
            setDog(false);
          }}
        >
          Котики
        </div>
        <div
          className={dog ? "secTitle activeTitleCard" : "secTitle"}
          onClick={() => {
            setCat(false);
            setDog(true);
          }}
        >
          Собачки
        </div>
      </div>
      <div className="bodyContentCard">
        {catsCard}     
        
        {dogCard}
      </div>
    </div>
  );
}
