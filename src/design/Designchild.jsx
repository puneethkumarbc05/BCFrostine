import React, { useEffect, useState } from 'react'

export const Designchild = ({ obj, func }) => {
    const [val, setVal] = useState({})
    useEffect(() => {
        // const a = localStorage.getItem(['gender'])
        // const b = localStorage.getItem(['brand'])
        // const c = localStorage.getItem(['type'])
        // console.log(a, b, c);
        setVal(obj)
    }, [])



    const handleChange = (e) => {
        const { name, value } = e.target
        setVal({ ...val, [name]: value })
    }

    const handleClick = () => {
        func(val)
    }

    return (
        <div>
            <select onChange={handleChange} name='gender' value={val.gender} defaultValue='--select--' >
                <option value='null'>--select--</option>
                <option value='male'>male</option>
                <option value='female'>female</option>
            </select>
            {obj.gender &&
                <select onChange={handleChange} name='brand' value={val.brand} >
                    <option value='null'>--select--</option>
                    <option value='addidas'>addidas</option>
                    <option value='nike'>nike</option>
                    <option value='puma'>puma</option>
                </select>
            }
            {obj.brand &&
                <select onChange={handleChange} name='type' value={val.type} >
                    <option value='null'>--select--</option>
                    <option value='flip-flops'>flip-flops</option>
                    <option value='shoes'>shoes</option>
                    <option value='slippers'>slippers</option>
                </select>
            }
            <button onClick={handleClick}>update</button>
        </div>
    )
}
