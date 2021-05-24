import React from "react";
import "./footer.css";
import logo from "./img/Logo@1X.png";


export default function Footer(){
    return(
        <div className="footer">
            <img className="footer-logo" src={logo} alt="logo"/>
            <h1 className="footer-title">-The Meat Experience-</h1>
            <div className="footer-content">
                <div className="footer-content-table">
                    <div className="footer-content-table-img">
                        <h2 className="footer-content-table-h2">OPEN</h2>
                        <p className="footer-content-table-p">Mon.-Thurs.: 12AM - 11PM<br/>
                        Fri. - Sun.: 9AM - 12PM</p>
                    </div>
                </div>
                <div className="footer-content-list">
                    <div className="footer-content-list-item">
                        <ul className="footer-content-list-ul">
                            <li className="footer-content-list-li">Home</li>
                            <li className="footer-content-list-li">About</li>
                            <li className="footer-content-list-li">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="footer-content-list-ul">
                            <li className="footer-content-list-li">Blog</li>
                            <li className="footer-content-list-li">Cookies</li>
                            <li className="footer-content-list-li">Site map</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-content-footer">
                <div >
                    <h3 className="footer-content-footer-content-h3">Madison Street, 30 - City</h3>
                </div>
                <div className="footer-content-footer-content">
                    <i className="fa fa-instagram fa-2x fa-icon icon" aria-hidden="true"></i>
                    <i className="fa fa-facebook-official fa-2x fa-icon icon" aria-hidden="true"></i>
                    <i className="fa fa-twitter-square fa-2x fa-icon icon" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play fa-2x fa-icon icon" aria-hidden="true"></i>
                    <p className="footer-content-footer-content-p">@Grill_House</p>
                </div>
            </div>

        </div>
    )
}