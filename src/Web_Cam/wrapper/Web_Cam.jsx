import React, { useCallback, useEffect, useRef, useState } from 'react'
import "../../App.css"

const Web_Cam = () => {
    const [imgSrc, setImgSrc] = useState('')

    function _start_Video() {
        const constraints = {
            video: {
                facingMode: "environment"
            },
            // video: true
        };
        setImgSrc('')
        let video = document.querySelector("#Capture_image_module_video");

        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            video.srcObject = stream;
        }).catch(err => alert(err))
    }

    async function _handle_Click_Capture() {
        let video = document.querySelector("#Capture_image_module_video");
        let canvas = document.querySelector("#canvas")
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
        let image_data_url = canvas.toDataURL('image/jpeg').split(',')[1];
        setImgSrc(image_data_url)
        _stop_video()
    }

    async function _stop_video() {
        let video = document.querySelector("#Capture_image_module_video");
        const stream = await video.srcObject;
        const tracks = await stream.getTracks();

        tracks.forEach((track) => {
            track.stop();
        });

        video.srcObject = null;
    }

    function _setImage() {
        const decodedData = atob(imgSrc);
        const arrayBuffer = new Uint8Array(decodedData.length);
        for (let i = 0; i < decodedData.length; i++) {
            arrayBuffer[i] = decodedData.charCodeAt(i);
        }

        const blob = new Blob([arrayBuffer], { type: "text/plain" });
        const file = new File([blob], "Img.jpeg" || 'file', { type: "text/plain" });
    }

    return (
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
            <>
                <button onClick={() => _start_Video()}>Start Camera</button>
                <button onClick={() => _stop_video()}>Stop Camera</button>
                <button onClick={() => _handle_Click_Capture()}>Click Photo</button>
                <button onClick={() => _setImage()}>Create Image File</button>
                <video id="Capture_image_module_video" width="320" height="240" autoPlay />
                <canvas id="canvas" width="320" height="240"></canvas>
            </>
        </div>
    )
}

export default Web_Cam
