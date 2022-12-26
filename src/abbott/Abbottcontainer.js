import React, { useEffect } from 'react'
import { Body1 } from './Body1'
import { Body2 } from './Body2'
import { Body3 } from './Body3'
import { Body4 } from './Body4'
import { Body5 } from './Body5'
import { Header } from './Header'

export const Abbottcontainer = () => {
    useEffect(() => {
        const listOfTags = [
            { id: 1, label: "Hello", color: "red", sorting: 0 },
            { id: 2, label: "World", color: "green", sorting: 1 },
            { id: 3, label: "Hello", color: "blue", sorting: 4 },
            { id: 4, label: "Sunshine", color: "yellow", sorting: 5 },
            { id: 5, label: "Hello", color: "red", sorting: 6 },
        ]

        const unique = [];

        listOfTags.map(x => unique.filter(a => a.label == x.label && a.color == x.color).length > 0 ? null : unique.push(x));

        console.log(unique);
    }, [])
    return (
        <>
            <Header />
            <Body1 />
            <Body2 />
            <Body3 />
            <Body4 />
            <Body5 />
        </>
    )
}
