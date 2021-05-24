import React from 'react';
import './App.css';
import Header from "./component/Header";
import {Menu} from "./component/menu";
import {Discaunt} from "./component/discaunt";
import Methods from "./component/method";
import Livemusic from "./component/livemusic";
import Footer from "./component/footer";
import Special from "./component/special";


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
