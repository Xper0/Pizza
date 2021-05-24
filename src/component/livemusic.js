import React from "react";
import "./livemusic.css";
import livemusic from "./img/livemisic.png";
import table from "./img/menu-item.png";

export default function Livemusic(){
    return(
        <div className="live-bg">
            <div className="live-bg-content">
                <div className="live-bg-content-table">
                    <img className="live-bg-content-table-img" src={table} alt="table"/>
                    <h1 className="live-bg-content-table-h1">LIVE MUSIC</h1>
                    <p className="live-bg-content-table-p">Jazz Night<br/>
                        <span>Every Friday</span></p>
                </div>
                <div className="live-bg-content-text">
                    <p className="live-bg-content-text-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                    eiusmod tempor.</p>
                </div>
            </div>

            <img className="live-bg-img" src={livemusic} alt="livemusic"/>


        </div>
    )
}