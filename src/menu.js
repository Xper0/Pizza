import React from "react";
import "./menu.css";
import pz1 from "./img/menupz1.png";
import pz2 from "./img/menupz2.png";
import pz3 from "./img/menupz3.png";

function Menu(){
    let menuList = [
        {
            type: "CHICKEN",
            typeCategory: ["Chicken with salad", "The Gold Chicken", "Chicken whit sauce"],
            cost: ["35","11,00","8,00"]
        },
        {
            type: "BEEF",
            typeCategory: ["Prime Steak", "Steak Beef (700 gr.)", "Entrecôte"],
            cost: ["35","11,00","8,00"]
        },
        {
            type: "PORK",
            typeCategory: ["Pork Cheeks", "Iberian Special Cut ", "Pork Chop"],
            cost: ["35","11,00","8,00"]
        },
        {
            type: "SLIDES",
            typeCategory: ["Potato fries", "Mushrooms", "Roasted Brocoli"],
            cost: ["35","11,00","8,00"]
        },
        {
            type: "DRINKS",
            typeCategory: ["Soft Drink", "Beer", "Wine Glass"],
            cost: ["2,50","4,50","4,50"]
        },
        {
            type: "DESSERTS",
            typeCategory: ["Cheesecake", "Tiramisu", "Chocolate Mousse"],
            cost: ["6,00","5,00","8,00"]
        },

    ]

    return(
        <div className="Menu">
            <div className="menu-list">
                <h1 className="Menu-header">Menu</h1>
                <div className="menu-list-img">
                    <img  src={pz1} alt="pz1"/>
                    <img src={pz2} alt="pz1"/>
                    <img src={pz3} alt="pz1"/>
                </div>
                <div className="menu-list-items">
                    <div className="test-menu">
                        <ul className="menu-items">
                            {menuList.map((item, index )=>
                                <li className="menu-item" key={index}>
                                    <div>
                                        <h1 className="menu-item-content h1">{item.type}</h1>
                                    </div>
                                    <div className="menu-item-content">
                                        <div>
                                            <ul>
                                                {Object.values(item.typeCategory).map((item,index) =>
                                                <li key={index} className="menu-item-category" >{item}
                                                </li>)}
                                            </ul>
                                        </div>
                                        <div>
                                             <ul>{Object.values(item.cost).map((item, index) =>
                                                 <li className="menu-item-category" key={index}>{item}</li>)}
                                             </ul>
                                        </div>
                                    </div>

                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export {Menu};