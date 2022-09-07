import React from 'react'

export const Header = () => {

    return (
        <div style={{padding:'1em 5em', background:'linear-gradient(to right, purple, blue)'}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src='https://www.pngkit.com/png/full/220-2200390_abbott-logo-abbott-laboratories.png' height='50px' />
                    <span style={{fontFamily:'arial',fontSize:'3em', fontWeight:'bolder',letterSpacing:'.05em', color:'white', marginLeft:'.25em'}}>ABBOTT</span>
                </div>
                <div>
                    <span style={{fontFamily:'arial',fontSize:'2em', fontWeight:'lighter',letterSpacing:'.09em', color:'white', }}>
                        CHANNELEVATION
                    </span>
                </div>
            </div>
        </div>
    )
}
