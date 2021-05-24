import React from "react";
import "./special.css";
import menu from "./img/menu-item.png";
import pzforkeat from "./img/pz-fork-eat.png"


export default function Special(){
    return(
        <div className="special-bg">
            <div className="spicial-bg-tab">
                <div className="spicial-bg-tab-text">
                    <img className="spicial-bg-img" src={menu} alt=""/>
                    <h1 className="spicial-bg-h1">SPECIAL OF THE MONTH</h1>
                    <p className="spicial-bg-p">Lorem Ipsum</p>
                </div>
                <div className="special-bg-text"><p className="special-bg-text-p">Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit, sed do&nbsp;eiusmod tempor incididunt ut&nbsp;labore et&nbsp;dolore
                    magna aliqua. Ut&nbsp;enim ad&nbsp;minim veniam, nostrud exercitation ullamco laboris.</p></div>

            </div>
            <div className="special-bg-img">
                <img className="eats" src={pzforkeat} alt="eat"/>
            </div>



        </div>
    )
}


