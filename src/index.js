import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  Switch } from "react-router";
import { BrowserRouter, Route} from "react-router-dom";
import {Menu} from "./component/menu";
import {Discaunt} from "./component/discaunt"
import Special from "./component/special";
import Methods from "./component/method";
import Livemusic from "./component/livemusic";
import Footer from "./component/footer";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/Menu" component={Menu}/>
            <Route path="/Discaunt" component={Discaunt}/>
            <Route path="/Special" component={Special}/>
            <Route path="/Methods" component={Methods}/>
            <Route path="/Livemusic" component={Livemusic}/>
            <Route path="/Footer" component={Footer}/>
        </Switch>
    </BrowserRouter>
    ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
