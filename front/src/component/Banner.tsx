import React, { useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

interface BannerProps{
  items:string[]; 
  type?:string;  
}

const Banner = ({items, type}:BannerProps) => {
  const settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 5000,
    responsive:[
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {
          items.map((item, i)=>{
            return(
              <div>
                {type === 'small'
                ? ( <button className="Banner-btn">
                    {i+1} / {items.length}
                  </button>)
                : ( <button className="Banner-btn">
                    {i+1} / {items.length} 모두보기
                    </button>)
                }
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
};

export default Banner;
