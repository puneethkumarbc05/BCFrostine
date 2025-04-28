import React, { useState } from 'react'
import "../Background_Smooth_Transition.css"

const Background_Smooth_Transition = () => {
    const img = ['https://cdn.pixabay.com/photo/2024/07/01/05/12/volcano-8864425_640.jpg', 'https://cdn.pixabay.com/photo/2021/11/20/10/40/nature-6811404_640.jpg',
        'https://cdn.pixabay.com/photo/2019/04/11/09/50/wave-4119271_640.jpg', 'https://cdn.pixabay.com/photo/2014/07/23/02/41/lightning-399853_640.jpg',
        'https://cdn.pixabay.com/photo/2020/02/08/18/21/desert-4830921_1280.jpg'
    ]

    const [selectedImg, setSelectedImg] = useState(0)

    function handleClickNext() {
        setSelectedImg(p => p === img.length - 1 ? 0 : p + 1)
    }

    function handleClickPrev() {
        setSelectedImg(p => p === 0 ? img.length - 1 : p - 1)
    }

    const getLocalIP = (callback) => {
        const peerConnection = new RTCPeerConnection({ iceServers: [] });
        peerConnection.createDataChannel('');
        peerConnection.createOffer().then((offer) => {
            console.log(offer);

            peerConnection.setLocalDescription(offer)
        });

        console.log(peerConnection, 'ace peerConnection')

        peerConnection.onicecandidate = (event) => {
            console.log(event, `ace event`)
            if (event && event.candidate && event.candidate.candidate) {
                const candidateParts = event.candidate.candidate.split(' ');
                const ip = candidateParts[4]; // Extract the IP address
                callback(ip);
                peerConnection.onicecandidate = null; // Stop listening after getting the IP
            }
        };
    };

    return (
        <div className='Background_Smooth_Transition' style={{ "--imageUrl": `url(${img[selectedImg]})` }} >
            <div className='Background_Smooth_Transition_arrow_conti'>
                <button className='Background_Smooth_Transition_arrow' onClick={() => handleClickPrev()}>{`<`}</button>
                <button className='Background_Smooth_Transition_arrow' onClick={() => handleClickNext()}>{`>`}</button>
            </div>
            <div className='Background_Smooth_Circle_conti'>
                {img.map((i, index) => {
                    return <div className="Background_Smooth_Circle" style={{ backgroundImage: `url(${i})`, clipPath: index === selectedImg ? 'polygon(0% -8390%, 0% 100%, 100% 100%)' : 'polygon(0 100%, 0% 100%, 100% 100%)' }}></div>
                })}
            </div>



            <button onClick={() => getLocalIP((ip) => console.log(ip))}>getIp</button>
        </div >
    )
}

export default Background_Smooth_Transition
