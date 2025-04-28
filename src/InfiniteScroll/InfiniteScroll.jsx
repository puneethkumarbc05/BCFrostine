import { findAllValues } from '@syncfusion/ej2-react-spreadsheet'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import Todo from './Todo'
import { _menu_list } from '../_menu_List'

const InfiniteScroll = () => {
    const [data, setData] = useState(_menu_list)
    const [selected, setSelected] = useState('')
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        // axios.post('https://qa.sfa360.in/api/Generalsetupapi/Hcpconfirmator', { "Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55aWQiOiJxYWpiIiwibG9naW5Vc2VyIjoiU0ZBIiwiS01UWVBFIjoiMCIsImRhc2hib2FyZCI6IjMiLCJ1c2VyaWQiOiJTQU0wMDEiLCJ1c2VybmFtZSI6IlN1cGVyIEFkbWluKE11bWJhaSkiLCJmc2NvZGUiOiJTQU0wMDEiLCJlbXBjb2RlIjoiU0FNMDAxIiwiZnNuYW1lIjoiU3VwZXIgQWRtaW4iLCJmc3R5cGUiOiI5IiwiZGVzaWciOiJTVVBFUiBBRE1JTiIsInBhcmVudGNvZGUiOiJTQU0wMDEgICAgIiwicGFyZW50bmFtZSI6IlN1cGVyIEFkbWluIiwiZnNmbGFnIjoiMSIsImVkaXQiOiIwIiwiZGVsIjoiMCIsImFkZG5ldyI6IjAiLCJzaGlmdCI6IjAiLCJzaGlmdGVkaXQiOiIwIiwiYXJlYWNvZGUiOiJBMDAwMDQwOCIsImFyZWFuYW1lIjoiTVVNQkFJIiwiVm9pY2VfZmxhZyI6IiIsIm5fZXhwZW5zZV9saW1pdCI6IjEiLCJ2aXNpdF9vcmRlciI6IjMiLCJiZyI6IjMzQ0NGRiIsIkRibmFtZXMiOiJRQUpCIiwiVGltZW91dCI6MTAsImV4cCI6MTcxMTAwMTgxOH0.tqd89-0fEngsantNXewVAYcwUSw7c94vhKgGENxDGNE" }).then(res => {
        // setData(res.data)
        // })
    }, [])

    return (
        <div>
            <Todo data={data} selected={selected} />
            {counter}
            <button onClick={() => setCounter(prev => prev + 1)}>+</button>
        </div>
    )
}

export default InfiniteScroll
