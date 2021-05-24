import React, {useState} from "react";





export default function Slider({image}) {
    const dataSlider1 = image.image[1]
    const [x, setX] = useState(0)
    const ArrowRight =() =>{
        x === -100 * (image.image.length -1) ? setX(0) :  setX( x - 100)

    }
    const ArrowLeft =() =>{
        x === 0 ? setX(-100 * (image.image.length -1)) :  setX( x + 100)
    }
    function HandleClick(e){

    }
    return (
        <div className="slider-conteiner">
            {image.image.map((item, index) =>
                <div key={index} className="slides" style={{transform: `translateX(${x}%)`}}>
                    <div className="slides-item">
                        <img className="pic1" src={item.src[1]} alt="piz"/>
                        <img className="pic2" src={item.src[0]} alt="pz1"/>
                        <div className="slidertab">
                            <h2 className="h2">{item.text}</h2>
                            <p className="data">{item.time}</p>
                            <p className="slider-conteiner-text">{item.title}</p>
                        </div>

                    </div>
                </div>

            )}
            <div className="slider-btn">
                <i className="fa fa-chevron-left fa-4x arrow-left " onClick={() => ArrowLeft()} aria-hidden="true"/>
                <button className="btn-circle active" onClick={(e)=>HandleClick(e.target)}></button>
                <button className="btn-circle" onClick={(e)=>HandleClick(e.target)}></button>
                <button className="btn-circle" onClick={(e)=>HandleClick(e.target)}></button>
                <i className="fa fa-chevron-right fa-4x arrow-right" onClick={() => ArrowRight()} aria-hidden="true"/>
            </div>


            <div className="slides">
                <img className="picslider1" src={dataSlider1.src} alt="steak"/>
                <p className="slider1-conteiner-text">{dataSlider1.title}</p>
                <div className="slidertab1">
                    <h2 className="h2">{dataSlider1.text}</h2>
                    <p className="data">{dataSlider1.time}</p>
                </div>
                <div className="slides-footer">
                    <div className="slides-footer-logo">
                        <img src={image.logo[0].src} alt="logo"/>
                    </div>
                    <div className="slides-footer-content">
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
            </div>

            <div className="slides">
                <img className="picslider1" src={dataSlider1.src} alt="steak"/>
                <p className="slider1-conteiner-text">{dataSlider1.title}</p>
                <div className="slidertab1">
                    <h2 className="h2">{dataSlider1.text}</h2>
                    <p className="data">{dataSlider1.time}</p>
                </div>
                <div className="slides-footer">
                    <div className="slides-footer-logo">
                        <img src={image.logo[0].src} alt="logo"/>
                    </div>
                    <div className="slides-footer-content">
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

            </div>

        </div>
    )

}