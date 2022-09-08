import React, { useEffect, useState } from 'react'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Input } from 'semantic-ui-react'

const StoreFileInSession = () => {

    const [file, setFile] = useState()
    const [val, setVal] = useState('')
    const [show, setShow] = useState(false)
    const list = [1, 2, 3, 4, 5, 6]
    const [filter, setFilter] = useState(list)


    const handleChange = (e) => {
        // console.log(e.target.files[0], 'file selected')
        // setFile(e.target.files[0])
        // const reader = new FileReader()
        // reader.onload = function (base64) {
        //     localStorage["file111111111"] = base64;
        // }
        // reader.readAsDataURL(e.target.files[0]);
        // sessionStorage.setItem('zipFile', JSON.stringify(e.target.files[0]))

        // console.log(session)
        // getFile()
    }

    // const getFiles = () => {
    //     console.log(sessionStorage.getItem('zipFile'))
    // }

    // const getFile = () => {
    //     const base64 = localStorage["file111111111"];
    //     const base64Parts = base64.split(",");
    //     const fileFormat = base64Parts[0].split(";")[1];
    //     const fileContent = base64Parts[1];
    //     const file = new File([fileContent], "file name here", { type: fileFormat });
    //     console.log(file, 'file after save');
    // }

    const selectedVal = (id) => {
        setVal(id)
        setShow(false)
    }
    const handleChangeSearch = (e) => {
        console.log(e.target.value)
        setVal(e.target.value)
        const temparr = list.map(item => {
            if (item === e.target.value) {
                return item
            }
        })
        setFilter(temparr)
    }
    return (
        <div>
            <input type='file' onChange={handleChange} />
            {/* <button onClick={getFiles}>get file</button> */}



            <div>
                <div>
                    <input type='text' value={val} onClick={() => { setShow(!show) }} onChange={handleChangeSearch} />
                </div>
                {show &&
                    <div >
                        <ul>
                            {filter.map(item => {
                                return <li onClick={() => { selectedVal(item) }}>{item}</li>
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default StoreFileInSession