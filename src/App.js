import React, { useState } from "react";
import Header from "./header/header";
import Content from "./content/content"
import Card from "./card/card"
import img1 from "./catsimg/img1.jpg"
import img2 from "./catsimg/img2.jpg"
import img3 from "./catsimg/img3.jpg"
import img4 from "./catsimg/img4.jpg"
import img5 from "./catsimg/img5.jpg"
import img6 from "./catsimg/img6.jpg"
import "./App.css";

function App() {

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
    <div className="firstCont">
      <div className="container">
        <Header />
        <Content/>
        <Card catsArr={cats} dogArr={dogs}/>
      </div>
    </div>
  );
}

export default App;
