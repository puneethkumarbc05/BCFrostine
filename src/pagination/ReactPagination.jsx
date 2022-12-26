import JSZip, { file, remove } from 'jszip';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Pagination } from 'semantic-ui-react'
import { unzip, setOptions } from 'https://unpkg.com/unzipit@0.1.9/dist/unzipit.module.js';
import setup from '../setup';
import { details } from './data'

export const ReactPagination = () => {

    const [files, setFiles] = useState([])
    const [checkedAllVal, setcheckedAllVal] = useState(false)
    const [val, setval] = useState()
    const handleChange = (e) => {
        // console.log(e.target.files[0]);
        unzippppp(e.target.files[0])
    }

    const unzippppp = async (file) => {
        const { entries } = await unzip(file)
        Object.entries(entries).forEach(async ([name, entry]) => {
            if (name.endsWith('.html')) {
                const blob = await entry.blob();
                const url = URL.createObjectURL(blob);
                const ifrm = document.createElement("iframe");
                ifrm.setAttribute("src", url);
                ifrm.style.width = "640px";
                ifrm.style.height = "480px";
                document.body.appendChild(ifrm);
                // const temp = [...files]
                // temp.push(url)
                // setFiles(temp)
                // const reader = new FileReader()
                // reader.onload = async (blob) => {
                //     console.log(blob);
                //     const text = (blob.target.result)
                //     console.log(text);
                //     // document.body.appendChild(text)
                // }
                // reader.readAsText(blob)
            }
            else if (name.endsWith('.jpg') || name.endsWith('.webp')) {
                const blob = await entry.blob();
                const img = new Image();
                img.style.height = '31.25rem'
                img.style.width = '31.25rem'
                img.src = URL.createObjectURL(blob);
                document.body.appendChild(img);
            }
        })
    }

    useEffect(() => {
        // console.log(parseInt(11.1111))
        // let date = "2022-11-08T00:00:00"
        // date = new Date(date)
        // // console.log(new Date(date).toLocaleDateString().replaceAll('/','-'));
        // let dd = date.getDate().toString()
        // if (dd.length < 2) {
        //     dd = `0${dd}`
        // }
        // let mm = (date.getMonth() + 1).toString()
        // if (mm.length < 2) {
        //     mm = `0${mm}`
        // }
        // const yy = date.getFullYear()
        // console.log(`${dd}-${mm}-${yy}`)
        // // date = new Date(date).toLocaleDateString()
        // console.log(date.split('/').join('-'));
        const array = ['ABBCD', 'abfb hsgdhjsd', '--ALL--']
        const camel = array.map(item => {
            return camelCase(item)
        })
        console.log(camel)
    }, [])

    const camelCase = (str) => {
        const a = str.split(' ').map(item => {
            return item[0].toUpperCase() + item.slice(1).toLowerCase()
        }).join(' ')
        return a
    }


    const onChangeTickAll = () => {

    }



    const handleChangefilter = (e) => {

    }

    return (
        <div width='100vw' height='100vh'  >
            <input type='file' onChange={handleChange} />
            {/* <iframe src='https://qasfa360blob.blob.core.windows.net/sfa360/DEMO/Edetail360Test_File/enzocort_gp_01.html#close' width='800px' height='500px' /> */}
            {/* {files && files.map(item => {
                return <iframe src={item} width='1000px' height='1000px' />
            })} */}

            <div>
                <div>Doctors</div>
                <div>
                    <div>
                        <input type='checkbox' value={checkedAllVal} onChange={onChangeTickAll} id='selectAll' />
                        <label htmlFor='selectAll' >Select All</label>
                    </div>
                    <div>
                        <input type='text' onChange={handleChangefilter} value={val} placeholder='search' />
                    </div>
                </div>
            </div>
        </div>
    )
}
