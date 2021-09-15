import React, { useState } from "react";
import Header from "./header/header";
import Content from "./content/content"
import Contacts from "./contacts/contacts"
import Friends from "./friends/friends"
import "./App.css";
import {BrowserRouter,Route} from "react-router-dom"

function App() {


  return (
  <BrowserRouter>
    <div className="firstCont">
      <div className="container">
        <Header />
        <Route exact path= "/" component={Content}/>
        <Route path= "/contacts" component={Contacts}/>
         <Route path= "/friends" component={Friends}/>
        {/* <Content/>         */}
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
