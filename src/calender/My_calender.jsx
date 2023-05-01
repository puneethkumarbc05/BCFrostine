import React, { useEffect, useState } from 'react'
import "./calender.scss"

const My_calender = () => {

    //calander Related
    const MONTHS = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const DATE = new Date()
    const [yearDetails, setYearDetails] = useState({ year: DATE.getFullYear(), month: DATE.getMonth() })
    const WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday']
    const [DATES, setDATES] = useState([])
    const currentDate = DATE.getDate()

    //note related
    const [notePopUp, setNotePopUp] = useState({
        show: false,
        selectedDate: null,
        note: ''
    })



    function getCalenderDates() {
        const tempDate = []
        const lastDate = new Date(yearDetails.year, yearDetails.month + 1, 0).getDate()
        const FirstDayOfMonth = new Date(yearDetails.year, yearDetails.month, 1).getDay()
        const lastDayOfMonth = new Date(yearDetails.year, yearDetails.month + 1, 0).getDay()
        const previousMonthLastDate = new Date(yearDetails.year, yearDetails.month, 0).getDate()

        // for previous month dates
        for (let i = FirstDayOfMonth; i > 0; i--) {
            tempDate.push({ month: 'notCurrentMonth', date: previousMonthLastDate - i + 1 })
        }

        //current month dates
        for (let i = 1; i <= lastDate; i++) {
            tempDate.push({ month: 'currentMonth', date: i })
        }

        //next months dates
        for (let i = 1; i <= 6 - lastDayOfMonth; i++) {
            tempDate.push({ month: 'notCurrentMonth', date: i })
        }

        setDATES(tempDate)
    }

    useEffect(() => {
        getCalenderDates()
    }, [yearDetails])


    const handleClickPrev = () => {
        yearDetails.month !== 0 ?
            setYearDetails({ ...yearDetails, month: yearDetails.month - 1 })
            : setYearDetails({ ...yearDetails, year: yearDetails.year - 1, month: 11 })
    }


    const handleClickNext = () => {
        yearDetails.month !== 11 ?
            setYearDetails({ ...yearDetails, month: yearDetails.month + 1 })
            : setYearDetails({ ...yearDetails, year: yearDetails.year + 1, month: 0 })
    }

    const notePopUPFunc = (date, month) => {
        const filteredNote = DATES.filter(item => item.month === 'currentMonth' && item.date == date)
        setNotePopUp({ ...notePopUp, show: !notePopUp.show, selectedDate: `${date}/${month}`, note: filteredNote[0].note ? filteredNote[0].note : "" })
    }

    const handleChangeNote = (e) => {
        setNotePopUp({ ...notePopUp, note: e.target.value })
    }

    const handleClickSave = () => {
        const tempDates = [...DATES]
        const date = notePopUp.selectedDate.split("/")[0]
        tempDates.map(item => {
            if (item.month === 'currentMonth' && item.date == date) {
                Object.assign(item, { note: notePopUp.note })
            }
        })
        setNotePopUp({ ...notePopUp, show: !notePopUp.show, selectedDate: null, note: '' })
        setDATES(tempDates)
    }

    return (
        <>
            <div className='calander_container'>
                <div className="calander">
                    <div className="calander_heading">
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <span onClick={handleClickPrev}>{"<"}</span>
                            <div style={{ width: '100px' }}>{`${MONTHS[yearDetails.month]}-${yearDetails.year}`}</div>
                            <span onClick={handleClickNext}>{">"}</span>
                        </div>
                    </div>
                    <ul className="calander_week">
                        {WEEK.map((wk, index) => <li className={`row${index}`} key={`${index}-${wk}`}>{wk}</li>)}
                    </ul>
                    <ul className="calander_dates">
                        {DATES.map((item, index) => {
                            return <li key={`${index}-${item}`}
                                className={item.month === 'currentMonth' ? item.date === currentDate ? 'CurrentDay' : '' : 'notCurrentMonth'}
                                onClick={item.month === 'currentMonth' ? () => { notePopUPFunc(item.date, yearDetails.month) } : () => { }}
                            >
                                <div>{item.date}</div>
                                <div>{item.note ? item.note : ''}</div>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
            {notePopUp.show &&
                <>
                    <div className="pop_upContainer">
                        <div className="pop_up_content">
                            <div className="popUpHead">
                                {notePopUp.selectedDate.split("/")[0]},&nbsp;{MONTHS[notePopUp.selectedDate.split("/")[1]]}
                            </div>
                            <div className="note_container">
                                <textarea onChange={handleChangeNote} value={notePopUp.note} placeholder='Enter Note' />
                            </div>
                            <div className="dutton_container">
                                <button onClick={handleClickSave}>Save</button>
                                <button onClick={() => { setNotePopUp({ ...notePopUp, show: !notePopUp.show, selectedDate: null, note: '' }) }}>Back</button>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default My_calender
