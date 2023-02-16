import React from 'react'
import { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { nanoid } from 'nanoid';

function ImagesPrev({images}) {
    const [displayImg , setDisplayImg] = useState(images[0]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed : 5000,
        pauseOnHover : true

    };

  return (
    <div className="slider-container">
        <div className='img-prev'>
            <Slider {...settings}>
                {images.map(e => {
                    return (
                        <div key={nanoid()}>
                            <img src={e} alt="" />
                        </div>
                    )
                })}
            </Slider>
        </div>
    </div>

  )
}

export default ImagesPrev