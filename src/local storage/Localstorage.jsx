import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { useNavigate } from 'react-router'

export const Localstorage = () => {
    const loc = useNavigate()


    const [details, setDetails] = useState({
        namee: '',
        contact: '',
        mail: ''
    })

    const [data, setData] = useState([])

    const handleChange = (event) => {
        const { name, value } = event.target
        setDetails({ ...details, [name]: value })
    }

    const [show, setShow] = useState(false)

    const handleClick = () => {
        const tempData = [...data]
        if (tempData.length === 0) {
            tempData.push(details)
        } else {
            tempData.map(item => {
                if (item.namee !== details.namee || item.contact !== details.contact || item.mail !== details.mail) {
                    tempData.push(details)
                }
            })
        }
        console.log(tempData);
        setData(tempData)
    }

    const getPreviousValues = () => {
        const det = data[data.length - 2]
        console.log(det);
        setDetails({ ...details, namee: det.namee, contact: det.contact, mail: det.mail })
    }

    const get = () => {
        const category = "DIABETOLOGIST";
        console.log(category.split(','))
        const str = 'asas asas as as as as asa sa'
        const b = str.replaceAll(' ', '')
        console.log(b);
        const str1 = 'abc, bcn, hdbfkjds, ksjdnfjsd,sjehfs'
        console.log(str1.split(',').slice(1).map(i => {
            return i
        }));
    }

    return (
        <div>
            <input type='text' name={'namee'} value={details.namee} onChange={(event) => { handleChange(event) }} />
            <input type='number' name={'contact'} value={details.contact} onChange={(event) => { handleChange(event) }} />
            <input type='email' name={'mail'} value={details.mail} onChange={(event) => { handleChange(event) }} />
            <button onClick={handleClick}>save</button>
            <button onClick={getPreviousValues}>get previous values</button>
            <button onClick={get}>get</button>
            <button onClick={() => {
                loc('/Corousel', { state: { props: 'puneeth', id: 23 } })
            }}>go to Dropdown</button>
            <div>
                <Dropdown>
                    <Dropdown.Toggle style={{ height: '2.5rem', width: '14rem', backgroundColor: 'white', border: '1px solid black' }}>
                        <input type='text' id='drop' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <ol>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                        </ol>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}
