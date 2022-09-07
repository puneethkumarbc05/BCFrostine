import React, { useEffect } from 'react'

export const Chilld = ({ call, func2 }) => {

    useEffect(() => {
        if (call) {
            console.log('called');
            func2()
        }
    }, [call])

    return (
        <div>Chilld</div>
    )
}
