import React from 'react'
import { Button, Overlay, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap'
import { Popup } from './Popup'

export const Bootstrapoverlay = () => {

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

    const select = (select) => {
        setSelected(select)
    }

    const toupper = (str) => {
        const arr = str.split(' ').map(a => {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }).join(' ')
        console.log(arr);
        // let uprstr = str.charAt(0).toUpperCase()
        // let lwrstr = str.slice(1)
        // console.log(`${uprstr}${lwrstr}`);
    }

    const uppercase = () => {
        toupper('Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ut earum ducimus commodi sunt, deleniti et dignissimos animi quidem doloribus nisi possimus. Dolor, in. Officiis quasi sapiente possimus dolore soluta.')
    }

    console.log(new Date().getTime())

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                {ar.map(item => {
                    return <OverlayTrigger
                        trigger={["hover", "focus", 'click']}
                        key={item.num}
                        placement='auto'
                        overlay={
                            <Popover >
                                <Popup selected={selected} />
                            </Popover>
                        }
                    >
                        <Button variant="secondary" onMouseEnter={() => { select(item) }}>{item.name}</Button>
                    </OverlayTrigger>
                })}
            </div>
            <button onClick={uppercase}>click</button>
        </div>
    )
}
