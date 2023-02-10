import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { InputGroup } from 'react-bootstrap'
import { X } from 'react-bootstrap-icons'
import ReactDatePicker from 'react-datepicker'
import '../App.css'
import Loader from './Loader'

const Onclickdropdown = () => {
    const [active, setActive] = useState(false)
    const btnRef = useRef()
    const divRef = useRef()

    const [arr, setArr] = useState([{ name: 'abcs', subName: ['a', 'b', 'd', 'c'], open: false }, { name: 'number', subName: [1, 2, 3, 4, 5], open: false }])

    useEffect(() => {

        const handler = (e) => {
            if (!btnRef.current.contains(e.target)) {
                setActive(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {

        // document.onkeydown = (evt) => {
        //     // evt = evt || window.event;
        //     if (evt.keyCode === 27) {
        //         console.log('object');
        //     }
        // }
        const close = (e) => {
            if (e.keyCode === 27) {
                // props.onCloseModal()
                console.log('clicl')
            }
        }
        document.addEventListener('keydown', close)
        return () => window.removeEventListener('keydown', close)
    })


    const handleClick = (name) => {
        const temp = [...arr]
        temp.map(item => {
            if (item.name === name) {
                item.open = !item.open
            }
        })
        setArr(temp)
    }


    return (
        <>
            <div style={{ position: 'absolute', top: '20px', right: '20px' }} ref={btnRef}>
                <div>
                    <img onClick={() => { setActive(!active) }} src='https://images2.alphacoders.com/910/thumb-1920-910289.jpg' style={{ width: '100px', height: '100px', borderRadius: '50%', cursor: 'pointer' }} />
                </div>
                <div className={active ? 'active' : 'inactive'}>
                    <ol>
                        <MenuItem name={'puneeth'} />
                        <MenuItem name={'sangeetha'} />
                        <MenuItem name={'sonu'} />
                        <MenuItem name={'jaya'} />
                        <MenuItem name={'channaveeraiah'} />
                        <MenuItem name={'sanjay'} />
                    </ol>
                </div>
            </div>
            <div>
                {arr.map(item => {
                    return <div ref={divRef}>
                        <div style={{ display: 'flex' }}>
                            <div
                                style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'grey', color: '#fff', justifyContent: 'center', alignItem: 'center', display: 'flex', cursor: 'pointer' }}
                                onClick={() => { handleClick(item.name) }}
                            >{item.name.slice(0, 1)}</div>
                            <div>{item.name}</div>
                        </div>
                        {item.subName.map(i => {
                            return <div className={item.open ? 'active' : 'inactive'}>
                                <li>
                                    {i}
                                </li>
                            </div>
                        })}
                    </div>
                })}
            </div>
            <div className="singledropdown">
                <label className="vaRegion11">From Date</label>
                &nbsp;
                <span className="colorRed">*</span>
                <InputGroup className="datepickerAligment controls text-right">
                    <ReactDatePicker
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select From Date"
                        onChange={(e) => {
                            console.log(e)
                        }}
                    />
                    {/* <InputGroup.Append>
                        <InputGroup.Text>
                            <img
                                src="../public/assets/images/prpcalender.svg"
                                alt="calendar"
                            />
                        </InputGroup.Text>
                    </InputGroup.Append> */}
                </InputGroup>
            </div>
            <Loader />
        </>
    )
}

export default Onclickdropdown


const MenuItem = ({ name }) => {
    return <li>{name}</li>
}