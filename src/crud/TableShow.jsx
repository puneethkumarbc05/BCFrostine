import React, { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { getData } from '@syncfusion/ej2-react-spreadsheet'
// import { useHistory } from 'react-router'

const TableShow = () => {
    const [data, setDate] = useState([])
    const navigate = useNavigate();

    const getData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const temp = []
        for (let i = 0; i < 10; i++) {
            temp.push(res['data'][i])
        }
        setDate(temp)
    }

    useEffect(() => {
        getData()
    }, [])
    const handleDelete = async (id) => {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(res);
    }

    return (
        <div>
            <button onClick={() => { navigate('/InputPage/new') }}>
                {/* <Link to='/InputPage/new'> */}
                New
                {/* </Link> */}
            </button>
            <table border='1px solid black'>
                <tr>
                    <th>Action</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                {data && data.map(item => {
                    return <tr>
                        <td >
                            <button onClick={() => {
                                navigate(`/InputPage/${item['id']}`)
                            }}>
                                New
                            </button>
                            <button onClick={() => { handleDelete(item['id']) }}>delete</button>
                        </td>

                        <td>{item['body']}</td>
                        <td>{item['title']}</td>
                    </tr>
                })}
            </table>
        </div >
    )
}

export default TableShow