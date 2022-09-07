import React, { useEffect, useState } from 'react'

const StoreFileInSession = () => {

    const [file, setFile] = useState()


    const handleChange = (e) => {
        console.log(e.target.files[0], 'file selected')
        setFile(e.target.files[0])
        // const reader = new FileReader()
        // reader.onload = function (base64) {
        //     localStorage["file111111111"] = base64;
        // }
        // reader.readAsDataURL(e.target.files[0]);
        // sessionStorage.setItem('zipFile', JSON.stringify(e.target.files[0]))

        // console.log(session)
        // getFile()
    }

    const getFiles = () => {
        console.log(sessionStorage.getItem('zipFile'))
    }

    const getFile = () => {
        const base64 = localStorage["file111111111"];
        const base64Parts = base64.split(",");
        const fileFormat = base64Parts[0].split(";")[1];
        const fileContent = base64Parts[1];
        const file = new File([fileContent], "file name here", { type: fileFormat });
        console.log(file, 'file after save');
    }

    return (
        <div>
            <input type='file' onChange={handleChange} />
            <button onClick={getFiles}>get file</button>
        </div>
    )
}

export default StoreFileInSession