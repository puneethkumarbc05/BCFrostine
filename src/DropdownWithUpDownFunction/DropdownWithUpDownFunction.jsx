import React, { useEffect, useRef, useState } from 'react'
const MONTHS = { 0: 'Jan', 1: 'Feb', 2: 'March', 3: 'April', 4: 'May', 5: 'June' }
const YEARS = { 2024: '2024', 2023: '2023', 2022: '2022', 2021: '2021', 2020: '2020', 2019: '2019' }

const DropdownWithUpDownFunction = () => {
    const [data, setData] = useState([])
    const divRef = useRef(null)
    const [openDrop, setOpenDrop] = useState(false)
    const [selectedItem, setSelectedItem] = useState(-1)
    const weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const [calendar, setCalendar] = useState([])
    const [month, setMonth] = useState(4)
    const [year, setYear] = useState(2024)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`).then(res => res.json()).then(res => {
            setData(res)
        })
        const scrollableDiv = divRef.current;

        // Function to check if the scroll position is at the bottom
        const isAtBottom = () => {
            return scrollableDiv.scrollTop + scrollableDiv.clientHeight === scrollableDiv.scrollHeight;
        };

        // Function to scroll to the bottom
        const scrollToBottom = () => {
            scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
        };

        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp' && scrollableDiv.scrollTop === 0) {
                // If at the top and pressing up arrow, prevent default behavior
                event.preventDefault();
            } else if (event.key === 'ArrowDown' && isAtBottom()) {
                // If at the bottom and pressing down arrow, scroll to bottom
                scrollToBottom();
            }
        };
    }, [])

    useEffect(() => {
        const getDate = new Date(year, month)
        console.log(getDate, year, month)
        const lastDateOfMOnth = new Date(getDate.getFullYear(), getDate.getMonth() + 1, 0).getDate()
        const firstDayOftheMonth = new Date(getDate.getFullYear(), getDate.getMonth(), 1).getDay() - 1
        const cal = []

        for (let i = firstDayOftheMonth; i > 0; i--) {
            cal.push({ currentMonth: false, date: i })
        }


        for (let i = 1; i <= lastDateOfMOnth; i++) {
            cal.push({ currentMonth: true, date: i })
        }
        setCalendar(cal)
    }, [month, year])

    function scrollToBottom(scrollableDiv) {
        return scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
    };

    function isAtBottom(scrollableDiv) {
        return scrollableDiv.scrollTop + scrollableDiv.clientHeight === scrollableDiv.scrollHeight;
    };

    function handleKeyUpDown(e) {
        const { offsetHeight } = divRef.current
        console.log(offsetHeight, divRef)
        const scrollableDiv = divRef.current;
        if (e.key === 'ArrowDown') {
            setSelectedItem(p => p + 1)
            if (isAtBottom(scrollableDiv)) {
                scrollToBottom(scrollableDiv);
            }
        }
        else if (e.key === 'ArrowUp') {
            setSelectedItem(p => p !== -1 && p - 1)
        }
    }


    return (
        // <div style={{ position: 'relative', width: '300px', height: '2.5rem', margin: 'auto' }}>
        //     <input
        //         type='text'
        //         style={{ width: '100%', height: '100%' }}
        //         onClick={() => {
        //             setOpenDrop(k => !k)
        //             setSelectedItem(-1)
        //         }}
        //         onKeyDown={handleKeyUpDown}
        //         value={data[selectedItem]?.['title'] || ''}
        //     />
        //     {openDrop && <div style={{ position: 'absolute', top: '110%', backgroundColor: 'yellowgreen', width: '100%', padding: '1rem', maxHeight: '20rem', overflow: 'auto' }} ref={divRef}>
        //         {data.map((i, index) => {
        //             return <div
        //                 key={i['title'] + index}
        //                 style={{
        //                     width: '100%',
        //                     overflow: 'hidden',
        //                     backgroundColor: selectedItem === index ? 'black' : 'transparent',
        //                     color: selectedItem === index ? '#fff' : '#000',
        //                     whiteSpace: 'nowrap',
        //                     textOverflow: 'ellipsis'
        //                 }}
        //             >
        //                 {i['title']}
        //             </div>
        //         })}
        //     </div>}
        // </div>
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
            <select onChange={v => setMonth(v.target.value)} defaultValue={month}>
                {Object.keys(MONTHS).map(k => {
                    return <option value={k}>{MONTHS[k]}</option>
                })}
            </select>
            <select onChange={v => setYear(v.target.value)} defaultValue={year}>
                {Object.keys(YEARS).map(k => {
                    return <option value={k}>{YEARS[k]}</option>
                })}
            </select>
            <div style={{ boxShadow: '2px 2px 10px 0px rgba(0,0,0,.5)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', width: 'calc(100px * 7 + (5px * 6))', gap: '5px', marginBottom: '1rem' }}>
                    {weeks.map(i => {
                        return <div style={{ width: '100px', height: '50px', border: '1px solid #fff', backgroundColor: 'rgba(0,0,0,.5)', borderRadius: '5px', display: 'grid', placeItems: 'center', color: '#fff' }}>
                            {i}
                        </div>
                    })}
                </div>
                <div style={{ display: 'flex', width: 'calc(100px * 7 + (5px * 6))', flexWrap: 'wrap', gap: '5px' }}>
                    {calendar.map(i => {
                        return i['currentMonth'] ? <div style={{ width: '100px', height: '100px', border: '1px solid #000', borderRadius: '5px', padding: '.5rem', textAlign: 'end' }}>
                            {i.date}
                        </div>
                            :
                            <div style={{ width: '100px', height: '40px' }}>

                            </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default DropdownWithUpDownFunction
