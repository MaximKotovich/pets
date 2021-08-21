import React, { useState } from "react";
import Header from "./header/header";
import Content from "./content/content"
import "./App.css";

function App() {
  return (
    <div className="firstCont">
      <div className="container">
        <Header />
        <Content/>
      </div>
    </div>
  );
}

export default App;
