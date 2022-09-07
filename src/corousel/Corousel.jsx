import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import Slider from "react-slick";

const Corousel = () => {
    const img = [
        { img: 'https://images4.alphacoders.com/933/thumbbig-933512.webp', pri: '1' },
        // { img: 'https://images7.alphacoders.com/959/thumbbig-959228.webp', pri: '2' },
        // { img: 'https://images2.alphacoders.com/910/thumbbig-910289.webp', pri: '3' },
        // { img: 'https://images3.alphacoders.com/911/thumbbig-911611.webp', pri: '4' },
        // { img: 'https://images6.alphacoders.com/871/thumbbig-871206.webp', pri: '5' },
    ]
    const abc = useLocation()
    const i = abc.state.id
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 1000,
    }

    const func = () => {
        const arr = []
        for (let i = 1; i <= 10; i++) {
            arr.push({
                'text': `${i}`,
                'value': `${i}`,
                'key': `${i}`,
            })
        }
        const item = { priority: '2' }
        let c = 0
        const a = () => {
            return arr.filter(val => {
                if (val['text'] === item['priority']) {
                    console.log(val['value'], ++c)
                    return val
                }
            })
        }
        console.log(a()[0]['value'])
    }

    useEffect(() => {
        console.log(i);
        console.log(abc)
    }, [])



    const slider = { display: 'flex', flexDirection: 'column' }
    return (
        <div style={{ width: '400px', height: '400px', margin: '4rem', display: 'flex', flexDirection: 'column' }}>
            <Slider {...settings} >
                {img.map(i => {
                    return <div style={{ width: '100%', height: '100%' }}>
                        <img src={i['img']} width='100%' height='100%' />

                    </div>
                })}
            </Slider>
            <button style={{ marginTop: '3rem' }} onClick={func}>click</button>

        </div>
    )
}

export default Corousel







