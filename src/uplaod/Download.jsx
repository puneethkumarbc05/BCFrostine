import React, { useState } from 'react'

const Download = () => {
    const style11 = { position: 'relative', width: '50%', height: '50%' }
    const [imgURL, setImgURL] = useState('https://cdn.pixabay.com/photo/2022/04/13/01/44/plum-blossoms-7129237__340.jpg')
    const [fileName, setFileName] = useState('abc')
    const a = {
        path: 'Edetail2 (1)/Edetail2/One-K-Uprise-3.Html',
        name: 'Edetail2 (1)/Edetail2/One-K-Uprise-4.Html'
    }

    const uploadChange = (e) => {
        const file = e.target.files[0]
        setImgURL(URL.createObjectURL(file))
        setFileName(file.name)
    }




    return (
        <div >
            <input type='file' onChange={uploadChange} />
            <div style={style11}>
                <img src={a.path} width="100%" height='100%' />
                <button style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}><a href={a.path} download={a.name} > {icon} DOWNLOAD</a> </button>
            </div>
        </div>
    )
}

export default Download

export const icon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
            <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
            <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
    )
}



