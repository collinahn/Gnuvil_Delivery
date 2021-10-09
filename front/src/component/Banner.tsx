import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Slider from "react-slick";
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';

interface BannerProps{
  type:string;  
}

const Banner = ({type}:BannerProps) => {

  let [photos, setPhotos] = useState(['/images/temp/anuall.png', '/images/temp/halloween.png']);

  // useEffect(()=>{
  //   const url = "https://jsonplaceholder.typicode.com/photos";
  //   axios.get(url)
  //   .then((result)=>{
  //     const datas = result.data
  //   })
  //   .catch((error)=>{console.log(error)})
  // },[])

  
  return (
    <div>
      <Link to="/event">
        <StyledSlider type={type} {...settings}>
          {
            photos.map((photo, i)=>{
              return(
                <div>
                  <img src={photo} className="Banner-img"/>
                  {type === 'small'
                  ? ( <button className="Banner-btn">
                      {i+1} / {photos.length}
                    </button>)
                  : ( <button className="Banner-btn">
                      {i+1} / {photos.length} 모두보기
                      </button>)
                  }
                </div>
              )
            })
          }
        </StyledSlider>
      </Link>
    </div>
  );
};

export default Banner;

const settings = {
  dots: false,
  arrows:false,
  infinite: true,
  speed: 1300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 4000,
};

const StyledSlider = styled(Slider)<{type:string}>`
.slick-slide{
  height: ${props => (props.type === 'small' ? '5rem' : '6rem')}; 
}
`