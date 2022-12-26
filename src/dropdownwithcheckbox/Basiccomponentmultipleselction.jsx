import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import './basic.css'

const Basiccomponentmultipleselction = ({ data, label, errorMessage, getValue, value, handleChange }) => {

    const handleClick = (id) => {
        getValue(id)
    }

    const handleSearch = (v) => {
        handleChange(v.target.value)
    }



    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
                style={{ color: '#6c757d', fontFamily: 'OpenSans-Semibold', fontSize: '0.75rem', letterSpacing: '.6px', marginBottom: '.4rem' }}
            >
                {label} &nbsp;<span style={{ color: '#dc3545' }}>*</span>
            </div>
            <Dropdown>
                <Dropdown.Toggle style={{ display: 'flex', border: '1px solid #6c757d64', width: '100%', height: '2.5em', minHeight: '2.5em', borderRadius: '5px', backgroundColor: 'white', alignItems: 'center', paddingRight: '0', marginBottom: '.4rem' }} >
                    <input
                        style={{ outline: "none", border: 'none', width: '85%', color: 'rgba(0,0,0,.87)', fontSize: '.85em', letterSpacing: '.4px', fontFamily: 'OpenSans-Regular', alignItems: 'center', textTransform: 'capitalize' }}
                        type='text'
                        placeholder='Search or Select'
                        value={value}
                        onChange={(event) => { handleSearch(event) }}
                    />
                    <div
                        style={{ borderLeft: '1px solid #6c757d64', minWidth: ' 2.8125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: "rgba(0, 0, 0, .87)", fontSize: '.85em', letterSpacing: '.4px', fontFamily: 'OpenSans-Regular', height: '150%' }}
                    >
                        <Downarrow />
                    </div>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ height: '16rem', overflow: 'scroll', width: '100%', padding: '0', boxShadow: '0 5px 20px 0 rgb(0 0 0 / 16%)' }}>

                    {Object.keys(data).map(item => {
                        return <ol className='ol'>
                            <input
                                type='checkbox'
                                onChange={() => { handleClick(data[item].code) }}
                                id={data[item].code}
                                checked={data[item].flg === 0 ? false : true}
                                style={{ minWidth: '1.25rem' }}
                            />
                            <label htmlFor={data[item].code}>
                                {data[item].c_name}
                            </label>
                        </ol>
                    })}

                </Dropdown.Menu>
            </Dropdown>
            {
                errorMessage &&
                <div style={{ color: '#dc3545', marginTop: '0.5em', fontSize: '.8em', fontFamily: "OpenSans-SemiBold", letterSpacing: '0.03em' }}>
                    {errorMessage}
                </div>
            }
        </div >
    )
}

export default Basiccomponentmultipleselction


export const Downarrow = () => {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1b84e7" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
    </div>
}