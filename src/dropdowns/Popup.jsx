import React from 'react'

export const Popup = ({ selected }) => {
    return (
        <div>
            {selected.name}
            {selected.title}
        </div>
    )
}
