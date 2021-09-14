import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./content.css";
import pet from "./Kot-sobaka.png";
import Card from "./card/card"
import img1 from "./catsimg/img1.jpg"
import img2 from "./catsimg/img2.jpg"
import img3 from "./catsimg/img3.jpg"
import img4 from "./catsimg/img4.jpg"
import img5 from "./catsimg/img5.jpg"
import img6 from "./catsimg/img6.jpg"

export default function Content() {

  const cats = [
    {
      id: 1,
      imgUrl: <img src={img1} />,
      title: "Марсик",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis"
    },
    {
      id: 2,
      imgUrl: <img src={img2} />,
      title: "Жужа",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis "
    },
    {
      id: 3,
      imgUrl: <img src={img3} />,
      title: "Тимми",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis "
    }
  ]

const dogs = [   
   {
      id: 1,
      imgUrl: <img src={img4} />,
      title: "Бобби",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id: 2,
      imgUrl: <img src={img5} />,
      title: "Буся",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eiu."
    },
    {
      id: 3,
      imgUrl: <img src={img6} />,
      title: "Монти",
      description: "Optio corporis reiciendis atque ab voluptatum consectetur, enim, quod Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    }
    ]


  return (
    <div>
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
    <Card catsArr={cats} dogArr={dogs}/>
</div>
  );
}
