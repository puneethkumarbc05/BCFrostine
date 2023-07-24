import React from 'react'
import "../css/menuBar.css"
import { helpLineImg, homeImag, profileImg, settingImg } from './Icons-folder'
import { useState } from 'react'

const Menu_bar = () => {
    const [selected, setSelected] = useState(0)

    return (
        <div className='menu-bar'>
            <div className="menu-bar-wrapper">
                <li
                    className={`menu-list-items ${selected === 0 ? 'menu-active' : ""}`}
                    onClick={() => { setSelected(0) }}
                >
                    {homeImag}
                </li>
                <li
                    className={`menu-list-items ${selected === 1 ? 'menu-active' : ""}`}
                    onClick={() => { setSelected(1) }}
                >
                    {settingImg}
                </li>
                <li
                    className={`menu-list-items ${selected === 2 ? 'menu-active' : ""}`}
                    onClick={() => { setSelected(2) }}
                >
                    {helpLineImg}
                </li>
                <li
                    className={`menu-list-items ${selected === 3 ? 'menu-active' : ""}`}
                    onClick={() => { setSelected(3) }}
                >
                    {profileImg}
                </li>
                <div className="indicator" style={{ transform: `translateX(${selected * 50 - 5}px)` }}></div>
            </div>
        </div>
    )
}

export default Menu_bar
