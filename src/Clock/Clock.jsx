import React, { useEffect, useState } from 'react'
import "./Clock.css"

const Clock = () => {
    const [secondsRotate, setSecondsRotate] = useState(0)
    const [minuteRotate, setMinuteRotate] = useState(0)
    const [hourRotate, setHourRotate] = useState(0)


    useEffect(() => {
        _startClock()
    }, [])

    function _startClock() {
        setInterval(() => {
            const time = new Date()
            let seconds = time.getSeconds()
            let minute = time.getMinutes()
            let hr = time.getHours()
            setSecondsRotate(seconds * 6)
            setMinuteRotate((minute + seconds / 60) * 6)
            setHourRotate(((hr % 12) + (minute / 60)) * 30)
            // setHourRotate((hr % 12) * 30 + (minute / 60))
        }, 1000)
    }
    return (
        <div className='clock_container'>
            <div className="clock_background">
                <div className='center_dot'></div>
                <div className="clock_seconds_needle" style={{ '--secondsRotate': `${secondsRotate}deg` }}></div>
                <div className="clock_minute_needle" style={{ '--minuteRotate': `${minuteRotate}deg` }}></div>
                <div className="clock_hour_needle" style={{ '--hourRotate': `${hourRotate}deg` }}></div>
                <div className="clock_numbers clock_number_1"><div>1</div></div>
                <div className="clock_numbers clock_number_2"><div>2</div></div>
                <div className="clock_numbers clock_number_3"><div>3</div></div>
                <div className="clock_numbers clock_number_4"><div>4</div></div>
                <div className="clock_numbers clock_number_5"><div>5</div></div>
                <div className="clock_numbers clock_number_6"><div>6</div></div>
                <div className="clock_numbers clock_number_7"><div>7</div></div>
                <div className="clock_numbers clock_number_8"><div>8</div></div>
                <div className="clock_numbers clock_number_9"><div>9</div></div>
                <div className="clock_numbers clock_number_10"><div>10</div></div>
                <div className="clock_numbers clock_number_11"><div>11</div></div>
                <div className="clock_numbers clock_number_12"><div>12</div></div>
            </div>
        </div>
    )
}

export default Clock
