import React, { useCallback, useEffect, useRef, useState } from 'react'
import "../../App.css"

const Web_Cam = () => {
    const webCamRef = useRef()
    // const cameraRef = useRef()
    // const imgRef = useRef()
    const [capturedImg, setCapturedImg] = useState(null)
    const [videoSrc, setImgSrc] = useState(null)

    function capture() {
        const imgSrc = webCamRef.current.getScreenshot()
        setCapturedImg(imgSrc)
        console.log(imgSrc, 'bcf')
    }

    useEffect(() => {

        let camera_button = document.querySelector("#start-camera");
        let camera_button_stop = document.querySelector("#stop-camera");
        let video = document.querySelector("#video");
        let click_button = document.querySelector("#click-photo");
        let canvas = document.querySelector("#canvas");

        camera_button.addEventListener('click', async function () {
            let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            video.srcObject = stream;
        });

        camera_button_stop.addEventListener('click', async function () {
            const stream = await video.srcObject;
            const tracks = await stream.getTracks();

            tracks.forEach((track) => {
                track.stop();
            });

            video.srcObject = null;
        });

        click_button.addEventListener('click', function () {
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            let image_data_url = canvas.toDataURL('image/jpeg');

            // data url of the image
            console.log(image_data_url);
        });
    }, [])


    async function stop() {
        let video = document.querySelector("#video");

    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
            {capturedImg ?
                <img src={capturedImg} width={600} height={600} />
                :
                // <Webcam height={600} width={600} ref={webCamRef} />
                // <video id="video" width="320" height="240" autoPlay></video>
                <>
                    <button id="start-camera">Start Camera</button>
                    <button id="stop-camera">Stop Camera</button>
                    <video id="video" width="320" height="240" autoPlay></video>
                    {/* {videoSrc && <video src={videoSrc} id="video" width="320" height="240" autoPlay ></video>} */}
                    <button id="click-photo">Click Photo</button>
                    <canvas id="canvas" width="320" height="240"></canvas>
                </>
            }
            <button onClick={capture}>{"Capture"}</button>
        </div>
    )
}

export default Web_Cam
