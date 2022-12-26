import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import '../App.css'

const Onclickdropdown = () => {
    const [active, setActive] = useState(false)
    const btnRef = useRef()

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
    return (
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
    )
}

export default Onclickdropdown


const MenuItem = ({ name }) => {
    return <li>{name}</li>
}