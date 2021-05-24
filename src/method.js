import React from "react";
import "./method.css";
import meat from "./img/meat.png";
import tabletext from "./img/menu-item.png"

export default function Methods(){
    return(
        <div className="method-bg">

            <div className="method-bg-meat">
                <img className="meat" src={meat} alt="meat"/>
            </div>
            <div className="method-bg-table">
                <img className="method-bg-table-img" src={tabletext} alt="table"/>
                <h1 className="method-bg-table-h1">Our Method</h1>
                <p className="method-bg-table-p">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
                    quia non numquam.</p>
            </div>


        </div>
    )

}