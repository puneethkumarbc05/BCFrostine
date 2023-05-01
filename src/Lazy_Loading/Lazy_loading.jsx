import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Lazy_load.css"

const Lazy_loading = () => {
    const [ORIGINAL_DATA, setORIGINAL_DATA] = useState([])
    const [filteredData, setfilteredData] = useState([])
    const [page_no, set_Page_No] = useState(1)
    const COUNT = 100
    const MAX_COUNT = 300
    const [index_management, set_Index_management] = useState(0)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => {
                setORIGINAL_DATA(json)
                setfilteredData(json.slice(index_management, COUNT))
                set_Index_management(index_management + COUNT)
            });
    }

    function addNewSetOfDatas() {
        let temp_filtered_data = [...filteredData]
        if (temp_filtered_data.length >= MAX_COUNT) {
            temp_filtered_data = temp_filtered_data.slice(COUNT)
            const lastIndex = index_management + COUNT
            const new_filtered_Data = ORIGINAL_DATA.slice(index_management, lastIndex)
            setfilteredData([...temp_filtered_data, ...new_filtered_Data])
            set_Index_management(lastIndex)
            set_Page_No(page_no + 1)
        }
        else {
            const lastIndex = index_management + COUNT
            const new_filtered_Data = ORIGINAL_DATA.slice(index_management, lastIndex)
            setfilteredData([...temp_filtered_data, ...new_filtered_Data])
            set_Index_management(lastIndex)
        }
    }

    function addPreviousSetOfDatas() {
        if (page_no !== 1) {
            let tempOption = [...filteredData]
            tempOption.splice(filteredData.length - COUNT, COUNT)
            let startInd = page_no * COUNT - 200
            let endIndex = page_no * COUNT - 100
            console.log(startInd, endIndex)
            setfilteredData([...ORIGINAL_DATA.slice(startInd, endIndex), ...tempOption])
            set_Page_No(page_no - 1)
            const nextNumber = index_management - COUNT
            set_Index_management(nextNumber)
        }
    }

    const handleScroll = (event) => {
        const { scrollHeight, scrollTop, clientHeight } = event.target
        const variable = scrollHeight - scrollTop
        if (variable - 2 <= clientHeight) {
            addNewSetOfDatas()
        } else if (scrollTop <= 100) {
            addPreviousSetOfDatas()
        }
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table>
                <thead style={{ display: 'flex' }}>
                    <tr>
                        <th style={{ width: '100px', }}>albumId</th>
                        <th style={{ width: '100px', }}>id</th>
                        <th style={{ width: '100px', }}>thumbnailUrl</th>
                        <th style={{ width: '100px', }}>title</th>
                        <th style={{ width: '100px', }}>url</th>
                    </tr>
                </thead>
                <tbody style={{ maxHeight: '500px', display: 'block', overflowY: 'scroll' }} onScroll={(e) => { handleScroll(e) }}>
                    {filteredData && filteredData.map((item, index) => {
                        return <tr key={item.id}>
                            <td style={{ width: '100px', }}>{item.albumId}</td>
                            <td style={{ width: '100px', }}>{item.id}</td>
                            <td style={{ width: '100px', }}>{item.thumbnailUrl}</td>
                            <td style={{ width: '100px', }}>{item.title}</td>
                            <td style={{ width: '100px', }}>{item.url}</td>
                        </tr>
                    })}
                </tbody>
            </table>
            <iframe src="https://sfa360.in" />
        </div>
    )
}

export default Lazy_loading
