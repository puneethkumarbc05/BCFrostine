import React, { useEffect, useState } from 'react'
import "../App.css"
import { Designchild } from './Designchild'

export const Design = () => {

    const [show, setShow] = useState(false)
    const [obj, setObj] = useState({
        brand: 0,
        gender: 0,
        type: 0,
        size: 0,
        stock: 0
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        const data = localStorage.setItem([name], value)
        setObj({ ...obj, [name]: value })
    }

    useEffect(() => {
        setShow(false)
    }, [])

    const func = (val) => {
        console.log(val);
        const { name, value } = val
        setObj({ ...obj, brand: val.brand, gender: val.gender, type: val.type })
        setShow(false)
    }

    return (
        <div>
            {/* <select onChange={handleChange} name='gender' value={obj.gender} defaultValue='--select--' >
                <option value='null'>--select--</option>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
            {obj.gender &&
                <select onChange={handleChange} name='brand' value={obj.brand} >
                    <option value='null'>--select--</option>
                    <option value='addidas'>addidas</option>
                    <option value='nike'>nike</option>
                    <option value='puma'>puma</option>
                </select>
            }
            {obj.brand &&
                <select onChange={handleChange} name='type' value={obj.type} >
                    <option value='null'>--select--</option>
                    <option value='flip-flops'>flip-flops</option>
                    <option value='shoes'>shoes</option>
                    <option value='puma'>puma</option>
                </select>
            }
            <button onClick={() => { setShow(true) }}>edit</button>
            {show && <Designchild obj={obj} func={func} />} */}
            <div style={{ width: '100vw', display: 'flex', alignItems: 'center', backgroundColor: 'red', fontSize: '.7rem' }}>
                <div style={{ flexBasis: '15%', padding: '0 .5em' }}>
                    upload status
                </div>
                <div style={{ flexBasis: '40%', padding: '0 .5em' }}></div>
                <div style={{ flexBasis: '15%', padding: '0 .5em' }}>
                    100% complted
                </div>
                <div style={{ flexBasis: '30%', padding: '0 .5em' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </div>
            </div>
        </div>
    )
}
