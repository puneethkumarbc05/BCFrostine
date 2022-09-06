import React from 'react'
import Slider from 'react-slick'

const React_Slick = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    return (
        <div>
            <Slider {...settings}>
                {data && data.map(item => {
                    return <div>
                        {item}
                    </div>
                })}
            </Slider>
        </div >
    )
}

export default React_Slick