import React from 'react'
import { unzip, setOptions } from 'https://unpkg.com/unzipit@0.1.9/dist/unzipit.module.js';
import JSZip from 'jszip';
import { useEffect } from 'react';
import { useState } from 'react';
import Htmlrender from '../htmlrender/Htmlrender';
import React_Slick from '../react_slick/React_Slick';

const Zipdecompress = () => {

    const [file, setFile] = useState([])
    const [list, setList] = useState([])
    const [folder, setFolder] = useState([])
    const [state, setState] = useState(false)
    // setOptions({
    //     workerURL: 'https://unpkg.com/unzipit@0.1.9/dist/unzipit-worker.module.js',
    //     numWorkers: 2,
    // });


    // (async function () {
    //     // const { entries } = await unzip("https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/338/Edetail2%20%281%29.zip");
    //     const { entries } = unzip("https://greggman.github.io/unzipit/test/data/large.zip");
    //     Object.entries(entries).forEach(async ([name, entry]) => {
    //         if (name.endsWith('.jpg')) {
    //             const blob = await entry.blob();
    //             const img = new Image();
    //             img.src = URL.createObjectURL(blob);
    //             document.body.appendChild(img);
    //         }
    //     });
    // }());

    // (async function () {

    //     // const {entries} = await unzip('https://greggman.github.io/unzipit/test/data/large.zip');
    //     const {entries} = await unzip('https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/338/Edetail2%20%281%29.zip');
    //     // const { entries } = await unzip("https://www.mediafire.com/file/lyfrew4cg9gbytn/pic.zip/file");
    //     Object.entries(entries).forEach(async ([name, entry]) => {
    //         if (name.endsWith('.html')) {
    //             const blob = await entry.blob();
    //             const img = new Image();
    //             img.src = URL.createObjectURL(blob);
    //             document.body.appendChild(img);
    //         }
    //     });

    // }());

    // useEffect(() => {
    //     const JSZip = require("jszip");
    //     const zip = new JSZip();
    //     // zip.loadAsync('https://greggman.github.io/unzipit/test/data/large.zip').then((files) => {
    //     //     console.log(files)
    //     // })
    //     zip.load('https://greggman.github.io/unzipit/test/data/large.zip')
    //     const text = zip.files['doc.xml']
    //     console.log(text);
    // }, [])



    const handleChange = (e) => {
        // const files = Array.from(e.target.files);
        // console.log(files, 'files')
        const a = e.target.files[0]
        // setFile(Array.from(a));
console.log(a)
        setFile(a)
        // const reader = new FileReader()
        // reader.onload = async (file) => {
        // console.log(file);
        // var source = reader.readAsBinaryString(item);
        // console.log(source)
        // const text = (item.target.result)
        // console.log(text)
        // document.getElementById(`${index}`).innerHTML = text
        // document.body.appendChild(text)
        // };
        // reader.readAsText(item)
    }

    useEffect(() => {
        // if (file) {
        //     console.log(file, 'files')
        //     file.map(item => {
        //         const render = new FileReader()
        //         render.onload = async (item) => {
        //             const text = (item.target.result)
        //             console.log(text);
        //             document.body.appendChild(text)
        //         }
        //         render.readAsText(item)
        //     })
        // }

        file && unzipfunc()
    }, [file])


    const unzipfunc = async () => {
        // const { entries } = await unzip(file);
        // // Object.entries(entries).forEach(async ([name, entry]) => {
        // //     if (name.endsWith('.html')) {
        // //         const blob = await entry.blob();
        // //         const img = new Image();
        // //         img.src = URL.createObjectURL(blob);
        // //         document.body.appendChild(img);
        // //     }
        // // });
        // // console.log(entries);
        // const tempArr = []
        // console.log(Object.entries(entries))
        // Object.entries(entries).map(async ([name, entry]) => {
        //     if (name.endsWith('.html')) {
        //         tempArr.push(name)
        //         // const blob = await entry.blob();
        //         const render = new FileReader()
        //         console.log(render, 'first')
        //         // render.onload = async (name) => {
        //         //     console.log(name);
        //         //     const text = (name.target.result)
        //         //     console.log(text);
        //         //     document.body.appendChild(text)
        //         // }
        //         // render.readAsText(name)
        //     }
        // })
        // setList(tempArr)

        // try {
        //     JSZip.loadAsync(file)
        //         .then(function (zip) {
        //             for (var name in zip.files) {
        //                 if (name.substring(name.lastIndexOf('.') + 1) === "html") {
        //                     console.log(zip.file(name).async("string"),'zip file');
        //                     return zip.file(name).async("string");
        //                 }
        //             }
        //             return zip.file("").async("string");
        //         })
        //         // .then(function success(text) {
        //         //     $('#iframe').contents().find('html').html(text);
        //         //     showContent(elt, text);
        //         // }, function error(e) {
        //         //     showError(elt, e);
        //         // });
        // } catch (e) {
        //     alert(e);
        // }


        try {
            JSZip.loadAsync(file).then(zip => {
                for (let name in zip.files) {
                    if (name.endsWith('.html')) {
                        zip.file(name).async("string").then((a) => {
                            const tempdata = [...folder]
                            tempdata.push(a)
                            setFolder(tempdata)
                        })
                    }
                }
                // funcCall()
            })
        }
        catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        console.log('oneeeee');
        const htmls = folder.map((val, index) => {
            console.log(val);
            return <Htmlrender id={index} />
        })
        setState(htmls)
    }, [folder])

    useEffect(() => {
        folder.map((val, index) => {
            if (val) {
                document.getElementById(index).innerHTML = val
            }
        })
    }, [state])

    return (
        <div>
            <div>Zipdecompress</div>
            <input type='file' onChange={handleChange} multiple />
            {list && list.map(item => {
                return <li>
                    <ol>
                        {item}
                    </ol>
                </li>
            })}
            <React_Slick data={state} />
            {/* {state} */}
        </div>
    )
}

export default Zipdecompress