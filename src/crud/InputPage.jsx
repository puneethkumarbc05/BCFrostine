import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const InputPage = () => {
    const [details, setDetails] = useState({
        name: "",
        age: ''
    })
    const navigate = useNavigate();
    const { id } = useParams()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value })
    }
    const handleClick = () => {
        navigate('/TableShow')
    }
    const getData = async () => {
        console.log(id);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        res['data'].map(item => {
            if (item['id'] === Number(id)) {
                setDetails({
                    ...details,
                    name: item['body'],
                    age: item['title']
                })
            }
        })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            this is {id} page
            <table>
                <tr>
                    <td>
                        <label>Name</label>
                    </td>
                    <td>
                        <input type='text' name='name' value={details.name} onChange={handleChange} /><br />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>age</label>
                    </td>
                    <td>
                        <input type='text' name='age' value={details.age} onChange={handleChange} />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button onClick={handleClick}>
                            {/* <Link to='/TableShow'> */}
                            {id === 'new' ? 'save' : 'update'}
                            {/* </Link> */}
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default InputPage