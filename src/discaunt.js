import React from "react";
import "./discaunt.css";
import discpizza from "./img/dispiz.png";
import logo from "./img/Logo@1X.png";



function Discaunt(){
    return(
        <div className="dis-bg active-bg">
            <img className="dis-bg-img" src={discpizza} alt="pizza"/>
            <div className="dis-bg-text">
                <div  className="dis-bg-text-header">
                    <h2 className="dis-bg-text-h2">Get a<br/>
                    25% discount<br/>
                    on your next dinner</h2>
                    <button className="dis-bg-btn">Click Here</button>
                </div>
                <div>
                    <img className="dis-bg-logo" src={logo} alt="pizza"/>
                    <h3 className="dis-bg-logo-text">The Meat Experience</h3>
                </div>
            </div>

        </div>
    )

}

export {Discaunt}