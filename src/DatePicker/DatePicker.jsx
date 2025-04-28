import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./DatePicker.scss"

const MONTHS = {
    0: 'Jan',
    1: 'Feb',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'Aug',
    8: 'Sept',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
}

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const YEARS = () => {
    const currentYear = new Date().getFullYear()
    const yearList = [currentYear]
    for (let i = 1; i < 20; i++) {
        yearList.unshift(currentYear - i)
    }
    for (let i = 1; i < 20; i++) {
        yearList.push(currentYear + i)
    }
    return yearList
}

const DatePicker = (props) => {
    const { label, important, value, placeholder, onChange, disabled, maxDate, minDate } = props

    const [date, setDate] = useState(value ? value.getDate() : new Date().getDate())
    const [month, setMonth] = useState(value ? value.getMonth() : new Date().getMonth())
    const [year, setYear] = useState(value ? value.getFullYear() : new Date().getFullYear())

    const [isActive, setIsActive] = useState(false)
    const calanderRef = useRef(null)

    const [dates, setDates] = useState([])

    const [selection, setSelection] = useState(0)


    const [tempMonth, setTempMonth] = useState()
    const [tempYear, setTempYear] = useState()


    useEffect(() => {
        function checkAndCloseDrop(e) {
            if (!calanderRef.current.contains(e.target)) {
                setIsActive(false)
            }
        }

        document.addEventListener('click', checkAndCloseDrop)

        return () => {
            document.removeEventListener('click', checkAndCloseDrop)
        }
    }, [])


    function _handleClickPrevNext(v) {
        if (v === 1) {
            if (month === 11) {
                setMonth(0)
                setYear(y => y + 1)
            }
            else {
                setMonth(m => m + 1)
            }
        }
        else {
            if (month === 0) {
                setMonth(11)
                setYear(y => y - 1)
            }
            else {
                setMonth(m => m - 1)
            }
        }
    }

    function getDates(m, y) {
        try {
            let lastMonthsLastDates = new Date(y, m, 0).getDate()
            const getFirstDayofTheMonth = new Date(y, m, 1).getDay()
            const lastDateOfTheMonth = new Date(y, m + 1, 0).getDate()
            const lastDayOfTheMonth = new Date(y, m + 1, 0).getDay()
            let firstDateOrNextMonth = 1

            const selectedDate = value ? value.getDate() : new Date().getDate()
            const selectedMonth = value ? value.getMonth() : new Date().getMonth()
            const selectedYear = value ? value.getFullYear() : new Date().getFullYear()

            const minD = minDate ? minDate.getDate() : null
            const minM = minDate ? minDate.getMonth() : null
            const minY = minDate ? minDate.getFullYear() : null

            const maxD = maxDate ? maxDate.getDate() : null
            const maxM = maxDate ? maxDate.getMonth() : null
            const maxY = maxDate ? maxDate.getFullYear() : null

            const arr = []

            for (let i = getFirstDayofTheMonth - 1; i >= 0; i--) {
                arr.unshift({
                    date: lastMonthsLastDates--,
                    isCurrenetMonthDate: false,
                    activeDate: false,
                    monthValue: m === 0 ? 11 : m - 1,
                    yearValue: m === 0 ? y - 1 : y
                })
            }

            for (let i = 1; i <= lastDateOfTheMonth; i++) {
                arr.push({
                    date: i,
                    isCurrenetMonthDate: true,
                    activeDate: selectedDate === i && selectedMonth === m && selectedYear === y,
                    monthValue: m,
                    yearValue: y
                })
            }

            for (let i = lastDayOfTheMonth + 1; i <= 6; i++) {
                arr.push({
                    date: firstDateOrNextMonth++,
                    isCurrenetMonthDate: false,
                    activeDate: false,
                    monthValue: m === 11 ? 0 : m + 1,
                    yearValue: m === 11 ? y : y + 1
                })
            }

            setDates(arr)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDates(month, year)
    }, [month, year])

    function _changeSelectedDate(d, m, y) {
        const _date = new Date(y, m, d)
        setMonth(m)
        setYear(y)
        setIsActive(false)
        onChange(_date)
    }

    return (
        <div className='my_date_picker' ref={calanderRef}>
            {label && <label className='my_date_picker_label'>
                {label}&nbsp;
                {important && <span style={{ color: 'red' }}>*</span>}
            </label>}
            <input
                type='text'
                readOnly
                className='my_date_picker_input_field'
                value={value ? `${value.getDate()}/${value.getMonth() + 1}/${value.getFullYear()}` : ''}
                placeholder={placeholder}
                onClick={() => setIsActive(r => !r)}
                disabled={disabled}
            />
            <div className={`calander_drop ${isActive ? `calander_drop_active` : `calander_drop_inactive`}`}>
                <div className='calander_heading'>
                    <div className='calander_heading_icons' onClick={() => _handleClickPrevNext(0)}>{`<`}</div>
                    <button
                        className='calander_heading_month_year'
                        onClick={() => setSelection(r => {
                            if (r === 0) {
                                return 1
                            }
                            else if (r === 1) {
                                return 2
                            }
                        })}>
                        {`${MONTHS[month]}, ${year}`}
                    </button>
                    <div className='calander_heading_icons' onClick={() => _handleClickPrevNext(1)}> {`>`}</div>
                </div>

                <div className={`calander_selection_display`}>
                    {selection === 0 ? <>
                        {DAYS.map(i => {
                            return <div className='calander_date calanderDays'>{i}</div>
                        })}
                        {dates.map(i => {
                            return <button
                                className={`calander_date ${!i['isCurrenetMonthDate'] ? `inActive_month_date` : i['activeDate'] ? `calander_selected_date` : ''}`}
                                onClick={() => _changeSelectedDate(i['date'], i['monthValue'], i['yearValue'])}
                            >
                                {i['date']}
                            </button>
                        })}
                    </> :
                        selection === 1 ? <>
                            {Object.keys(MONTHS).map(i => {
                                return <div className='calander_month'
                                    onClick={() => {
                                        setSelection(0)
                                        setMonth(+i)
                                    }}
                                >{MONTHS[i]}
                                </div>
                            })}
                        </> :
                            <>
                                {YEARS().map(i => {
                                    return <div className='calander_month'
                                        onClick={() => {
                                            setSelection(1)
                                            setYear(i)
                                        }}>
                                        {i}
                                    </div>
                                })}
                            </>
                    }
                </div>
            </div>
        </div >
    )
}

export default DatePicker
