import React, { useState } from 'react'
import "../Image_scroll_Animation.css"

const Image_scroll_Animation = () => {
    const images = {
        0: { ID: 0, img: "https://cdn.pixabay.com/photo/2023/12/14/20/24/christmas-balls-8449616_640.jpg" },
        1: { ID: 1, img: "https://cdn.pixabay.com/photo/2023/11/22/20/31/snowman-8406382_640.jpg" },
        2: { ID: 2, img: "https://cdn.pixabay.com/photo/2016/03/15/18/12/forest-1258845_640.jpg" },
        3: { ID: 3, img: "https://cdn.pixabay.com/photo/2017/03/28/22/55/night-photograph-2183637_1280.jpg" },
        4: { ID: 4, img: "https://cdn.pixabay.com/photo/2017/01/09/00/49/snow-1964361_640.jpg" },
        5: { ID: 5, img: "https://cdn.pixabay.com/photo/2018/05/18/10/25/trees-3410836_640.jpg" },
        6: { ID: 6, img: "https://cdn.pixabay.com/photo/2018/01/20/17/11/tree-3094982_640.jpg" },
    }
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div className='image_conatiner'>
            {Object.keys(images).map((ke) => {
                return <img
                    src={images[ke]['img']}
                    className={`images-items ${selectedImage === images[ke]['ID'] ? 'active-img' : `in-active-img`}`}
                    onClick={() => setSelectedImage(images[ke]['ID'])}
                />
            })}
        </div>
    )
}

export default Image_scroll_Animation
