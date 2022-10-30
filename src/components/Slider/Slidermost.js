import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import phone from "../../images/phone.png"
import iphone from "../../images/iphone-13.webp"
import iphone14 from "../../images/İPHONE14.webp"





export default class Responsive extends Component {
    render() {
        let settings = {
            autoplay:true,
            arrows:false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                        dots: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <div className="main_img">
                            <div className="name_phone">
                                <div className="name">
                                    <h3>Buy & Sell What's Now & Next</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                                <img className='phone_img' src={phone} alt="Phone" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main_img">
                            <div className="name_phone">
                                <div className="name">
                                    <h3>iPhone 13 pro max Buy NOW!🔥</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                                <img className='phone_img2' src={iphone} alt="Phone" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="main_img">
                            <div className="name_phone">
                                <div className="name">
                                    <h3>iPhone 14 pro max Buy NOW!🔥</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                                </div>
                                <img className='phone_img2' src={iphone14} alt="Phone" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}