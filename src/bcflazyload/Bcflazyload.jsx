import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { Suspense } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import { TerminalPlus } from 'react-bootstrap-icons'
// import Select from 'react-select';
const MenuOpt = React.lazy(() => import('./MenuOpt'))

const Bcflazyload = () => {
    const data = []



    const triggerRef = useRef(null)
    const PAGE_NUMBER = 1

    const [options, setOptions] = useState([])
    const [pageNo, setPage] = useState(PAGE_NUMBER)

    const [selected, setSelected] = useState()
    const [hasNextPage, setHasNextPage] = useState(true);
    const [isNextPageLoading, setNextPageLoading] = useState(false);
    const [selectedValue, setSelectedOption] = useState('');

    const tempArr = [{ doc: [{ id: 1 }, { id: 2 }, { id: 3 }] }, { doc: [{ id: 4 }, { id: 5 }, { id: 6 }] }]

    const arra = [1, 2, 3]

    const arr = [
        { id: 1, msg: 'abc' },
        { id: 2, msg: 'abc' },
        { id: 3, msg: 'abc' },
        { id: 4, msg: 'abc' },
        { id: 3, msg: 'abc1' },
        { id: 1, msg: 'abc' },
        { id: 7, msg: 'abc' },
        { id: 1, msg: 'abc3' },
        { id: 1, msg: 'abc4' },
        { id: 1, msg: 'abc5' },
        { id: 1, msg: 'abc6' },
        { id: 1, msg: 'abc7' },
        { id: 1, msg: 'abc8' },
        { id: 1, msg: 'abc9' },
        { id: 1, msg: 'abc0' },
        { id: 1, msg: 'abc45678' },
    ]

    useEffect(() => {
        getpictures()
        const a = 'Doctor Wise Call Summary Report'
        const b = 'Doctor Visit Transaction Report'
        let asd = [{ ad: 1 }, { ad: 2, sf: 4 }]

        for (let i = 0; i < asd.length; i++) {
            for (let j = 0; j < asd.length; j++) {
                console.log(Object.keys(asd[i]).length)
                if (Object.keys(asd[i]).length > Object.keys(asd[j]).length) {
                    let temp = asd[i];
                    asd[i] = asd[j];
                    asd[j] = temp
                }
            }
        }

        const updateFunc = (item) => {
            obj[item.id]['msg'] = obj[item.id]['msg'] + '%' + item.msg
        }

        const pushFunc = (item) => {
            obj = {
                ...obj,
                [item.id]: item
            }
        }

        let obj = {}
        arr.map(item => { Object.values(obj).filter(r => r.id === item.id).length > 0 ? updateFunc(item) : pushFunc(item) })

        console.log(obj, 'obj')

        const str = "AGGGGGGFDDDDDDDDDDDDDDDDDDDDDDD"
        console.log(str.replace(/(\w)(\w*)/g, function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }))
    }, [])


    const getpictures = async () => {
        try {
            const data = await axios.get('https://jsonplaceholder.typicode.com/photos')
            setOptions(data.data.slice(0, 100))
        } catch (error) {
            console.log(error)
        }
    }

    const func = () => {
        console.log('scrolling');
    }



    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            szxdfcgvhbjnmk,l;.
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td style={arra[0] === 1 ? { color: 'green' } : {}}>green</td>
                        <td>red</td>
                        <td>black</td>
                        <td>gvhv</td>
                        <td>gvhv</td>
                        <td>gvhv</td>
                    </tr>
                </tbody>

                <div style={{ marginTop: '1rem' }}>
                    note
                </div>
            </table>
            <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Dropdown>
                    <Dropdown.Toggle  >
                        <input className='input-box' type='text' placeholder='Search or Select' />
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ height: '16rem', overflow: 'scroll', width: '100%', padding: '0', boxShadow: '0 5px 20px 0 rgb(0 0 0 / 16%)' }} id='list' onScroll={func()}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <MenuOpt title={options} />
                        </Suspense>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>

    )
}

export default Bcflazyload