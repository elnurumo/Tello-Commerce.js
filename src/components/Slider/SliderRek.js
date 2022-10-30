import React, { Component } from "react";
import Slider from "react-slick";
import Markas from "../Home/Main/Marka/Markas/Markas";
import toshiba from "../../images/toshiba.png"
import philips from "../../images/phlips.png"
import hp from "../../images/hp.png"
import electro from "../../images/electro.png"
import gorenje from "../../images/gorenje.png"
import bosch from "../../images/bosch.png"


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            autoplay: true,
            slidesToShow: 6,
            slidesToScroll: 6
        };
        return (
            <div>
                <Slider {...settings}>
                    <Markas model={toshiba} />
                    <Markas model={philips} />
                    <Markas model={hp} />
                    <Markas model={electro} />
                    <Markas model={gorenje} />
                    <Markas model={bosch} />
                    <Markas model={toshiba} />
                    <Markas model={philips} />
                    <Markas model={hp} />
                    <Markas model={electro} />
                    <Markas model={gorenje} />
                    <Markas model={bosch} />
                    <Markas model={toshiba} />
                    <Markas model={philips} />
                    <Markas model={hp} />
                    <Markas model={electro} />
                    <Markas model={gorenje} />
                    <Markas model={bosch} />
                </Slider>
            </div>
        )
    }
}

