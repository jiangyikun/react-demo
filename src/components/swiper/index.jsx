import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import { Carousel } from "antd";
import 'swiper/swiper.min.css';
import "./style.css";

SwiperCore.use([Autoplay]);


class SwiperContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'swiper1',
                    id: '1'
                }, {
                    name: 'swiper2',
                    id: '2'
                }
            ]
        };
    }
    render() {
        return <div>
            {/* <Swiper
                centeredSlides={true}
                autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper> */}
            <Carousel className='carousel' autoplay dots={false} autoplaySpeed={2000} effect='scrollx' pauseOnHover={false}>
                <div>Carousel1</div>
                <div>Carousel2</div>
            </Carousel>
        </div>
    }
}

export default SwiperContainer;