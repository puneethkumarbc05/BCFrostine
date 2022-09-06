import React from 'react'
import { Overlay, OverlayTrigger, Popover } from 'react-bootstrap'
import "../App.css"

export const Dropdown = () => {

    const [show, setShow] = React.useState(false)
    const [selected, setSelected] = React.useState({})
    const ar = [
        {
            name: 'pun',
            title: 'kum',
            num: 1
        },
        {
            name: 'puneeth',
            title: 'kumar',
            num: 3
        },
        {
            name: 'pk',
            title: 'bc',
            num: 2
        },
    ]

    const showpop = (dat) => {
        setShow(!show)
        setSelected(dat)
    }

    const hide = () => {
        setShow(!show)
    }

    const enter =( )=>{
        console.log('entyerd');
    }
    return (
        <>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {ar.map(item => {
                    return <>
                        <div onMouseOver={() => { showpop(item) }} onMouseOut={hide} style={{ border: '1px solid black', width: '5vw', height: '5vh', textAlign: 'center', padding: '10px 0 0 0', cursor: 'pointer' }}>
                            {item.title}
                        </div>

                    </>
                })}
            </div>
            {show ?
                <div className='pop1'>
                    <h1>{selected.title}</h1>
                    <h4>{selected.name}</h4>
                </div>
                : null} */}


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <OverlayTrigger placement='right-start' trigger={['hover', 'click','focus','']}
                    overlay={
                        <Popover >
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                            {'hellooooooooooooooooooooo'}
                        </Popover>
                    }>

                    <div onMouseEnter={enter}>{'hhhhhhhhhhh'}</div>
                </OverlayTrigger>
            </div>
        </>
    )
}
