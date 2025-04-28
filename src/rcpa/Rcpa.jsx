import React, { useEffect, useRef, useState } from 'react'

const Rcpa = () => {
    const [counter, setCounter] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const timerRef = useRef()
    let timer

    function handleClickStartStop() {
        if (isRunning) {
            clearInterval(timerRef.current)
        }
        else {
            timerRef.current = setInterval(() => {
                setCounter(prev => prev + 1)
            }, 1000)
        }
        setIsRunning(!isRunning)


        // timer = setInterval(() => {
        //     console.log('object')
        // }, 100)
    }

    return (
        <div style={{ width: '100lvw', height: '100lvh', display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center' }}>
            <button onClick={handleClickStartStop}>Start</button>
            {counter}
            <button onClick={handleClickStartStop}>stop</button>
            {/* <button onClick={() => clearInterval(timer)}>stop</button> */}
            <input type='time' />
        </div>
    )
}

export default Rcpa