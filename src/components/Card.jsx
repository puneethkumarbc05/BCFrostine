import React, { useEffect, useState } from 'react'

export const Card = () => {
    const [current, setcurrent] = useState({})
    const [previous, setprevious] = useState({})
    const [details, setDetails] = useState({
        nam: null,
        age: null,
        number: null,
        s: null
    })

    useEffect(() => {
        console.log(details);
        console.log(previous);
        console.log(current);
    }, [previous, current, details])



    const handleChange = (e) => {
        const { name, value } = e.target
        setDetails({ ...details, [name]: value })
    }

    const handleClick = () => {
        setcurrent((prev => {
            setprevious(prev)
            return details
        }))
        setDetails({
            nam: null,
            age: null,
            number: null,
            s: null
        })
    }

    const getprev = () => {
        setDetails(previous)
    }

    return (
        <div>
            <input type="text" onChange={handleChange} name='nam' value={details.nam} />
            <input type="text" onChange={handleChange} name='age' value={details.age} />
            <input type="text" onChange={handleChange} name='number' value={details.number} />
            <input type="text" onChange={handleChange} name='s' value={details.s} />
            <button onClick={handleClick}>save</button>
            <button onClick={() => { getprev() }}>get codes</button>
        </div>
    )
}
