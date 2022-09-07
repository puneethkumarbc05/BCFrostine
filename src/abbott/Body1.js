import React from 'react'

export const Body1 = () => {
    return (
        <div style={{ backgroundImage: 'linear-gradient(white, grey), url(https://image.shutterstock.com/image-photo/abbott-laboratories-sign-near-company-600w-1487663087.jpg)', backgroundSize: 'cover', height: '60vh' }}>
            <div style={{padding:'40px 5em', color:'blue'}}>
                <div style={{fontSize:'2.5em', fontWeight:'bolder', letterSpacing:'3px', lineHeight:'80%'}}>
                    U + CHANNELEVATION =
                </div>
                <div style={{fontSize:'6em', fontWeight:'lighter', letterSpacing:'20px', lineHeight:'100%'}}>
                    ELEVATED
                </div>
                <div style={{fontSize:'6em', fontWeight:'lighter', letterSpacing:'8px', lineHeight:'80%'}}>
                    OUTCOMES
                </div>
            </div>
        </div>
    )
}
