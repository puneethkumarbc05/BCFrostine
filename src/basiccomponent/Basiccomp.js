import React from 'react'
import { Col, Dropdown, Row } from 'react-bootstrap'

const Basiccomp = ({ val, filter, handleChangetick, handleChangeFilter, handleClick }) => {

    const a = 10
    const inputContainer = { display: 'flex', border: '1px solid #6c757d64', width: '100%', height: '2.5em', minHeight: '2.5em', borderRadius: '5px', backgroundColor: 'white', alignItems: 'center', paddingRight: '0', marginBottom: '.4rem', outline: "none" }
    const inputBox = { outline: "none", border: 'none', width: '85%', color: 'rgba(0,0,0,.87)', fontSize: '.85em', letterSpacing: '.4px', fontFamily: 'OpenSans-Regular', alignItems: 'center', textTransform: 'capitalize' }
    const symbol = { borderLeft: '1px solid #6c757d64', minWidth: ' 2.8125rem', display: 'flex', justifyContent: 'center', alignItems: 'center', color: "rgba(0, 0, 0, .87)", fontSize: '.85em', letterSpacing: '.4px', fontFamily: 'OpenSans-Regular', height: '150%', position: 'relative', left: '1.25rem' }

    const handleClickbtn = () => {
        handleClick(a)
    }

    return (
        <div>
            <Row>
                <Col lg={4} xl={4} md={6} sm={12}>
                    <Dropdown>
                        <Dropdown.Toggle style={inputContainer}>
                            <input style={inputBox} type='text' value={val} onChange={handleChangeFilter} placeholder='Search or Select' />
                            <div style={symbol}><Downarrow /></div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ height: '16rem', overflow: 'scroll', width: '100%', padding: '0', boxShadow: '0 5px 20px 0 rgb(0 0 0 / 16%)' }}>
                            <ul>
                                {filter.map((item, index) => {
                                    return <li style={{ listStyle: 'none' }}>
                                        <input type='checkbox' checked={item.val} id={item.value} onChange={() => { handleChangetick(index) }} />
                                        <label htmlFor={item.value} >{item.value}</label>
                                    </li>
                                })}
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <button onClick={handleClickbtn}>click</button>
        </div>
    )
}

export default Basiccomp

export const Downarrow = () => {
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#1b84e7" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
    </div>
}