import React from 'react';
import logo from "./img/Logo@1X.png";
import './Header.css'
import { Link } from "react-router-dom";
import {Menu} from "./menu";
import Slider from "./Slider";
import {data} from "./Data";




function Header() {
    let menu = ["Home", "Menu","Specials" , "About","Method"];
    return (

        <div className="App">
            <div className="header">
                <img src={logo} className="logo" alt ="logo" />
                <ul className="header-menu">
                    {menu.map((item, index) =>
                        <li className="header-menu-list" key={index}>
                            <Link className="header-menu-list-link" to={item}>{item}</Link>
                        </li>)}
                </ul>
            </div>

            <Slider image={data}/>

        </div>
    );
}

export default Header;
