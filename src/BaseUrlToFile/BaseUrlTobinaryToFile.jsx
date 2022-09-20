import React, { useState } from 'react'
import { useEffect } from 'react'
import JSZip from 'jszip'
import { unzip, setOptions } from 'https://unpkg.com/unzipit@0.1.9/dist/unzipit.module.js';

const BaseUrlTobinaryToFile = () => {
    const [uploadFile, setUploadFile] = useState()
    // const url = 'data:image/jpeg;base64,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'
    // const url = '/abbott/sfa360dev/Va/MKT001/409/download%20%283%29.jpg'
    const url = '/abbott/sfa360dev/Va/MKT001/411/HTMLS.zip'
    // const url = 'https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228__340.jpg'
    // const url = 'https://qasfa360blob.blob.core.windows.net/file/lq84udlqnjnzo3a/HTMLS.zip'
    // const url = 'https://cdn.pixabay.com/photo/2022/08/22/10/28/tihany-7403356__340.jpg'
    // const url = 'abbott/file2.html'
    // const url = '/sfa360/file3.html'
    // "procy": "https://qasfa360blob.blob.core.windows.net",

    const handleChange = (e) => {
        setUploadFile(e.target.files[0])
        console.log(e.target.files[0])
        if (e.target.files[0].name.endsWith('.jpg')) {
            console.log('jpg');
        }
        else if (e.target.files[0].name.endsWith('.mp4')) {
            console.log('mp4')
        }
    }

    useEffect(() => {
        fetch(url)
            .then((res) => res.blob())
            .then((myBlob) => {
                const file = new File([myBlob], 'My File', { type: myBlob.type })
                return file
            }).then(f => {
                const reader = new FileReader()
                reader.onload = async (f) => {
                    console.log(f)
                    const text = (f.target)
                    console.log(text);
                }
            })
        // console.log(url);
        // fetch(url)
        //     .then((res) => res.blob())
        //     .then((myBlob) => {
        //         // console.log(myBlob);
        //         const file = new File([myBlob], 'My file', { type: myBlob.type })
        //         console.log('file is ready')
        //         // unzip(file)
        //         // text(file)
        //         const reader = new FileReader()
        //         reader.onload = async (file) => {
        //             const text = file.target
        //             console.log(text)
        //         }
        //         reader.readAsText(file)
        //     })


        // const myFile = new File([myBlob], '/abbott/sfa360dev/Va/MKT001/409/download%20%283%29.jpg', {
        //     type: myBlob.type,
        // });
        // console.log(myFile);


        // getBase64FromUrl(url).then((a) => {
        //     console.log(a)
        //     fetch(a)
        //         .then((res) => res.blob())
        //         .then((myBlob) => {
        //             console.log(myBlob);
        //             const file = new File([myBlob], 'My File', { type: myBlob.type })
        //             console.log(file)
        //             return file
        //         })
        // }).then((file) => {
        //     unzip(file)
        // })

        // funcfile()
    }, [])

    const funcfile = async () => {
        const response = await fetch(url)
        const data = await response.blob()
        const metadata = { type: 'application/x-zip-compressed' }
        const file = new File([data], 'puneeth', metadata)
        console.log(file)
        unzip(file)
        // const reader = new FileReader()
        // reader.onload = async (file) => {
        //     const text = (file.target.result)
        //     console.log(text);
        // }
        // reader.readAsText(file)
    }


    const getBase64FromUrl = async (url) => {
        const data = await fetch(url);
        const blob = await data.blob();
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(base64data);
            }
        });
    }


    const unzip = async (file) => {
        // JSZip.loadAsync(file).then(zip => {
        //     console.log(zip)
        // });
        const zip = new JSZip();
        zip.loadAsync(file).then(res => {
            console.log(res)
        })
    }

    const text = (item) => {
        console.log('converting file to text', item)
        const render = new FileReader()
        render.onload = async (item) => {
            const text = (item.target.result)
            console.log(text, 'ytetxttttttttttttttttttttttt');
        }
        render.readAsText(item)
    }


    return (
        <div>
            <input type='file' onChange={handleChange} />
            {/* {uploadFile &&
                <div>
                    <img src={URL.createObjectURL(uploadFile)} width='100%' />
                    <button><a href={URL.createObjectURL(uploadFile)} download={uploadFile.name} >download</a></button>
                </div>
            } */}
            {/* <iframe src='http://docs.google.com/gview?url=https://qasfa360blob.blob.core.windows.net/abbott/file1.html&embedded=true' ></iframe> */}
        </div>
    )
}

export default BaseUrlTobinaryToFile