import React, { useState } from 'react'
import "../css/Video_Background.css"
import { InputGroup } from 'react-bootstrap'
import { _menu_list } from '../../_menu_List'

const Video_Background = () => {
    const [value1, setValue] = useState('')

    async function _handleChangeUploadFile(event) {
        const file = event.target.files[0]
        event.target.value = ''
        const video = document.querySelector('.video_background_video')
        video.src = URL.createObjectURL(file)
        video.playbackRate = .5
    }


    return (
        <div className='video_background_wrapp'>
            <video loop mute autoPlay className='video_background_video' accept="video" />
            <input type='file' onChange={(e) => _handleChangeUploadFile(e)} className='upload_input' id="VIDEO" accept='video' />
            <label htmlFor='VIDEO' className='upload_input_label'>Upload</label>
        </div>
    )
}

export default Video_Background
