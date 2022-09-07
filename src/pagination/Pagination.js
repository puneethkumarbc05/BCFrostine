import React, { useState, useEffect } from 'react'
import { details } from './data.js'
import '../App.css'

export const Pagination = () => {
    const [tableContent, setTableContent] = useState([])
    const [tablePageNo, setTablePageNo] = useState([])
    const [detailsPerPage, setDetailsPerPage] = useState(5)
    const [selectedPage, setSelectedPage] = useState(1)
    useEffect(() => {
        getDetails()
    }, [])
    const getDetails = () => {
        setTableContent(details.slice(0, detailsPerPage))
        const temp = []
        for (let i = 1; i <= Math.ceil(details.length / detailsPerPage); i++) {
            temp.push({
                value: i,
                select: i === 1 ? true : false
            })
        }
        setTablePageNo(temp)
    }
    const handleClick = (selected) => {
        const temp = [...tablePageNo]
        temp.map(item => {
            if (item.value === selected.value) {
                item.select = true
            }
            else {
                item.select = false
            }
        })
        setTablePageNo(temp)
        setTableContent(details.slice(selected.value * detailsPerPage - detailsPerPage, selected.value * detailsPerPage))
    }
    const handleChange = (e) => {
        setDetailsPerPage(e.target.value)
    }
    useEffect(() => {
        getDetails()
    }, [detailsPerPage])
    const prevFunc = () => {
        const temp = [...tablePageNo]
        for (let i = 0; i < temp.length; i++) {
            if (i >= 0) {
                if (temp[i]['select']) {
                    let sel = i
                    temp[sel]['select'] = !temp[sel]['select']
                    temp[--sel]['select'] = !temp[sel]['select']

                }
            }
        }
        setTablePageNo(temp)
        // setTableContent(details.slice(selected.value * detailsPerPage - detailsPerPage, selected.value * detailsPerPage))
    }
    const nextFunc = () => {
        const temp = [...tablePageNo]
        for (let i = 0; i < temp.length; i++) {
            if (i < temp.length - 1) {
                if (temp[i]['select']) {
                    let sel = i
                    temp[sel]['select'] = false;
                    temp[++sel]['select'] = true;
                    break;
                }
            }
        }
        setTablePageNo(temp)
    }
    return (
        <div>
            <select onChange={handleChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>CONTACT</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContent.map(item => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.contact}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <span onClick={prevFunc}>{`<<Prev`}</span>
                    {tablePageNo.map(item => {
                        return <button className={item.select ? 'active' : 'inactive'} onClick={() => { handleClick(item) }}>{item.value}</button>
                    })}
                    <span onClick={nextFunc}>{`Next>>`}</span>
                </tfoot>
            </table>
        </div>
    )
}
