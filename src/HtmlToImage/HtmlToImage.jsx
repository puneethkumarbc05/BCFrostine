import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from 'react-slick';
import Htmlrender from '../htmlrender/Htmlrender';

const HtmlToImage = () => {
    const [arrayData, setarrayData] = useState([])
    const [files, setFiles] = useState([])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    const handleChange = (e) => {
        setFiles(Array.from(e.target.files));
        console.log(e.target.files[0]);
    }

    const func = () => {
        const something =
            files.map((item, index) => {
                return <Htmlrender id={`${index}`} />
            })
        setarrayData(something)
    }

    useEffect(() => {
        if (files && arrayData) {
            files.map((item, index) => {
                const reader = new FileReader()
                reader.onload = async (item) => {
                    console.log(item);
                    // var source = reader.readAsBinaryString(item);
                    // console.log(source)
                    const text = (item.target.result)
                    document.getElementById(`${index}`).innerHTML = text
                    // document.body.appendChild(text)
                };
                reader.readAsText(item)
            })
        }
    }, [arrayData])

    useEffect(() => {
        func()
    }, [files])


    // async function readExportedJson(file) {
    //     const zipper = new JSZip();
    //     const unzippedFiles = await zipper.loadAsync(file) Promise;
    //     return Promise.resolve(unzippedFiles).then(unzipped => {
    //         if (!Object.keys(unzipped.files).length) {
    //             return Promise.reject('No file was found');
    //         }
    //         return unzipped.files[Object.keys(unzipped.files)[0]];
    //     }).then(unzippedFile => zipper.file(unzippedFile.name).async('string'));
    // }

    // readExportedJson('https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/338/Edetail2%20%281%29.zip')

    // const unxip = () => {
    //     const zip = new JSZip();
    //     zip.loadAsync('https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/338/Edetail2%20%281%29.zip')
    //         .then((res) => {
    //             console.log(res);
    //         })
    // }
    // unxip()

    // const decompress = require('decompress')
    //     (async () => {
    //         try {
    //             const files = await decompress('https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/338/Edetail2%20%281%29.zip', 'dist')
    //             console.log('done');
    //         }
    //         catch (err) {
    //             console.log(err);
    //         }
    // })()
    return (
        <div>
            <input type="file" name="inputfile"
                id="inputfile" onChange={handleChange} multiple />
            <br />
            <pre id="output"></pre>
            <div id='root'>

            </div>
            <Slider {...settings}>
                {arrayData && arrayData.map(item => {
                    return <div>
                        {item}
                    </div>
                })}
            </Slider>
        </div>
    )
}

export default HtmlToImage