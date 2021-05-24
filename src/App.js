import React from 'react';
import './App.css';
import Header from "./Header";
import {Menu} from "./menu";
import {Discaunt} from "./discaunt";
import Methods from "./method";
import Livemusic from "./livemusic";
import Footer from "./footer";
import Special from "./special";


function App() {
  return (
      <div className="App" >
          <Header />
          <Menu />
          <Discaunt />
          <Special />
          <Methods />
          <Livemusic />
          <Footer />
      </div>


  );
}

export default App;
