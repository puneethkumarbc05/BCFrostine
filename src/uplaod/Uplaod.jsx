import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import '../App.css'

const Uplaod = () => {
    const [img, setImg] = useState('')
    const [fileName, setFileName] = useState('')
    const [name, setName] = useState('')

    const handleClick = async (e, data) => {
        // uplaodfilesApi()
        // const res = await axios.post('https://dev.sfa360.in/api/VARequestListAPI/VaCoverDetails', {
        //     "Token": "sfa360dev|ADMMKT|MKT001|A00001|KAJjrZjAsJ2022-06-24T04:57:57Z",
        //     "n_srno": "6"
        // })
        // setImg(res['data']['det'][0]['filepath'])
        // console.log(res);
    }



    const uplaodfilesApi = async () => {
        const fd = new FormData();
        console.log(img);
        fd.append('Files', img)
        fd.append('Token', 'sfa360dev|ADMMKT|MKT001|A00001|KAJjrZjAsJ2022-06-24T04:57:57Z')
        fd.append('srno', '66')
        fd.append('caption', 'coverqsqsqs')
        fd.append('httplink', 'https://dev.sfa360.in')
        fd.append('filetype', '1')
        try {
            const res = await axios.post('https://dev.sfa360.in/api/VARequestListAPI/Vafileupload', fd)
            console.log(res);
        }
        catch (err) {
            alert(err)
        }
    }

    const handleChange = (e) => {
        const ImageFile = e.target.files[0]
        console.log(ImageFile);
        setImg(ImageFile)
        setFileName(URL.createObjectURL(ImageFile))
        setName(ImageFile.name)
    }

    return (
        <div>
            <input className='upload-container' id='upload' type='file' onChange={handleChange} />
            <label for='upload'>
                upload
            </label>
            <button onClick={handleClick}>getimage</button>
            <div style={{ width: '50vh', height: '50vh', border: '1px solid black' }}>
                slides
                <img src={fileName} alt='image' style={{ height: '100%' }} />
            </div>
            
        </div>
    )
}

export default Uplaod

