import React, { useEffect, useState } from 'react'
import JSZip from 'jszip'

const BaseUrlToFile = () => {

    const fileName = 'myFile.zip'
    const url = 'https://dev.sfa360.in/api/public/Edetail360Test_File.zip'
    const [data, setData] = useState([])
    const [src, setSrc] = useState('')


    useEffect(() => {
        fetch(url)
            .then(async response => {
                const contentType = response.headers.get('content-type')
                const blob = await response.blob()
                const file = new File([blob], fileName, { type: contentType })
                console.log(file, 'main fileeeeeeeeee')
                unzip(file)
            })
    }, [])

    const unzip = async (file) => {
        try {
            JSZip.loadAsync(file).then(zip => {
                // for (let name in zip.files) {
                //     if (name.endsWith('.html')) {
                //         console.log(name);
                //         let file = zip.file(name)
                //         const blob = await entry.blob()
                //         console.log(zip.file(name));
                //         abc(file)

                //     }
                // }
                Object.entries(zip.files).map(async ([name, entry]) => {
                    if (name.endsWith('html')) {
                        toBase64(entry)
                        // const blob = await entry.blob()
                        // console.log(blob)
                        // const reader = new FileReader();
                        // reader.onload = async (entry) => {
                        //     const text = (entry.target.result)
                        //     console.log(text)
                        // }
                        // reader.readAsText(entry)
                    }
                })
            })
            // const { entries } = await unzip(file);
            // Object.entries(entries).forEach(async ([name, entry]) => {
            //     if (name.endsWith('.html')) {
            //         const blob = await entry.blob();
            //         const img = new Image();
            //         img.src = URL.createObjectURL(blob);
            //         document.body.appendChild(img);
            //     }
            // });
        }
        catch (e) {
            alert(e)
        }
    }

    const toBase64 = (file) => {
        console.log(file);
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    const abc = (file) => {
        const url = URL.createObjectURL(file)
        console.log(url)
    }

    const funcimage = (e) => {
        // console.log(e)
        const reader = new FileReader()
        reader.onload = async (e) => {
            console.log(e)
            const text = (e.target)
            console.log(text);
        }
    }

    const handleChange = (e) => {
        const file = e.target.files[0]
        const src = Window.URL.createObjectURL(file)
        console.log(src);
        setSrc(src)
    }

    return (
        <div>
            <input type='file' onChange={handleChange} />
            <img src={src} width='100%' />
        </div>
    )
}

export default BaseUrlToFile