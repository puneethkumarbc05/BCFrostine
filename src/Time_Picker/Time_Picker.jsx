import React, { useEffect, useState } from 'react'
import './Time_Picker.css'

const Time_Picker = () => {

    // const [selectedHr, setSelectedHr] = useState()
    // const [selectedMin, setSelectedMin] = useState()
    // const [timeOption, setTimeOption] = useState(0)

    // const style = { "--handRotateValue": timeOption === 0 ? selectedHr : selectedMin }
    // useEffect(() => {
    //     if (selectedHr) {
    //         setTimeOption(1)
    //     }
    // }, [selectedHr])

    useEffect(() => {
        setInterval(() => {
            const sec = document.querySelector('.secondsHand')
            const min = document.querySelector('.minsHand')
            const hr = document.querySelector('.hoursHand')
            const currentTime = new Date()
            const secRation = currentTime.getSeconds() / 60
            const minRation = (secRation + currentTime.getMinutes()) / 60
            const hrRation = (minRation + currentTime.getHours()) / 12
            sec.style.setProperty('--handRotateValue', `${secRation * 360}deg`)
            min.style.setProperty('--handRotateValue', `${minRation * 360}deg`)
            hr.style.setProperty('--handRotateValue', `${hrRation * 360}deg`)
        }, 1000)
    }, [])

    return (
        // <div className='contianer'>
        //     {`${selectedHr || `--`} : ${(selectedMin * 5) || `--`}`}
        //     <div className='clock'>
        //         <div className="hands" style={style}></div>
        //         <div
        //             className="numbers num12"
        //             onClick={() => timeOption === 0 ? setSelectedHr(12) : setSelectedMin(12)}
        //         >12</div>
        //         <div className="numbers num1" onClick={() => timeOption === 0 ? setSelectedHr(1) : setSelectedMin(1)}>1</div>
        //         <div className="numbers num2" onClick={() => timeOption === 0 ? setSelectedHr(2) : setSelectedMin(2)}>2</div>
        //         <div className="numbers num3" onClick={() => timeOption === 0 ? setSelectedHr(3) : setSelectedMin(3)}>3</div>
        //         <div className="numbers num4" onClick={() => timeOption === 0 ? setSelectedHr(4) : setSelectedMin(4)}>4</div>
        //         <div className="numbers num5" onClick={() => timeOption === 0 ? setSelectedHr(5) : setSelectedMin(5)}>5</div>
        //         <div className="numbers num6" onClick={() => timeOption === 0 ? setSelectedHr(6) : setSelectedMin(6)}>6</div>
        //         <div className="numbers num7" onClick={() => timeOption === 0 ? setSelectedHr(7) : setSelectedMin(7)}>7</div>
        //         <div className="numbers num8" onClick={() => timeOption === 0 ? setSelectedHr(8) : setSelectedMin(8)}>8</div>
        //         <div className="numbers num9" onClick={() => timeOption === 0 ? setSelectedHr(9) : setSelectedMin(8)}>9</div>
        //         <div className="numbers num10" onClick={() => timeOption === 0 ? setSelectedHr(10) : setSelectedMin(10)}>10</div>
        //         <div className="numbers num11" onClick={() => timeOption === 0 ? setSelectedHr(11) : setSelectedMin(11)}>11</div>
        //     </div >
        // </div >
        <div className='contianer'>
            <div className='clock'>
                <div className="hands secondsHand"></div>
                <div className="hands minsHand"></div>
                <div className="hands hoursHand"></div>
                <div className="centerDot"></div>
                <div className="numbers num12">12</div>
                <div className="numbers num1" >1</div>
                <div className="numbers num2" >2</div>
                <div className="numbers num3" > 3</div >
                <div className="numbers num4" >4</div>
                <div className="numbers num5" >5</div>
                <div className="numbers num6" >6</div>
                <div className="numbers num7" >7</div>
                <div className="numbers num8" >8</div>
                <div className="numbers num9" >9</div>
                <div className="numbers num10">10</div>
                <div className="numbers num11">11</div>
            </div >
        </div >
    )
}

export default Time_Picker
