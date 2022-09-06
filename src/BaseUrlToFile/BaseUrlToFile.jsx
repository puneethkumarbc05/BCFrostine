import React, { useEffect } from 'react'
import JSZip from 'jszip'

const BaseUrlToFile = () => {

    // const url = 'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553'
    const url = '/abbott/sfa360dev/Va/MKT001/409/download%20%283%29.jpg'
    // const url = '/abbott/sfa360dev/Va/MKT001/368/HTMLS.zip'
    // const url = 'http://docs.google.com/gview?url=https://qasfa360blob.blob.core.windows.net/abbott/staqtpsn.pdf&embedded=true'
    // const url = 'https://corsproxy.example/https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/368/HTMLS.zip'
    const fileName = 'myFile.jpg'

    useEffect(() => {
        // fetch(url)
        //     .then(async response => {
        //         const contentType = response.headers.get('content-type')
        //         console.log(contentType);
        //         const blob = await response.blob()
        //         const file = new File([blob], fileName, { type: contentType })
        //         console.log(file)
        //         unzip(file)
        //     })


        // func()


        const reader = new FileReader()
        reader.onload = function (base64) {
            localStorage["file111111111"] = base64;
        }
        reader.readAsDataURL(url);


    }, [])


    const func = async () => {
        const res = await fetch(url);
        const buf = await res.arrayBuffer();
        const file = new File([buf], fileName);
        console.log(file)
    }
    const unzip = (file) => {
        try {
            JSZip.loadAsync(file).then(zip => {
                for (let name in zip.files) {
                    if (name.endsWith('.html')) {
                        console.log(zip.file(name));
                        // zip.file(name).async("string").then((a) => {

                        // })
                    }
                }
            })
        }
        catch (e) {
            alert(e)
        }
    }

    return (
        <div>

        </div>
    )
}

export default BaseUrlToFile