import React, { useState } from 'react'
import "../ASSET/CSS/basicComponent_Toogle.css"

const ToggleBtn = ({ toogle, setToogle }) => {
    return (
        <div className='toogle-btn' onClick={() => { setToogle(!toogle) }} style={{ background: toogle ? "#059d05" : "red" }}>
            <div className="toogle" style={{transform: toogle ? "translate(0)" : "translate(250%)"}}></div>
            <div className='name' style={toogle ? { right: "10px" } : { left: "10px" }}>
                {toogle ? "Yes" : "No"}
            </div>
        </div >
    )
}

export default ToggleBtn
