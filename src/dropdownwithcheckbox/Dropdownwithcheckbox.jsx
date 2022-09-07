import React, { useEffect, useRef, useState } from 'react'
import { Downarrow } from './components/Downarrow'
import { Uparrow } from './components/Uparrow'
import { Form } from 'react-bootstrap'
import "../App.css"
import "./dropdown.css"

export const Dropdownwithcheckbox = () => {
    const btnref = useRef(null)
    const [drop, setDrop] = useState(false)
    const [selected, setselected] = useState('')


    const [options, setOptions] = useState([
        { item1: [{ name: 'aaaa', key: 'aaaa', check: true }, { name: 'AAAA', key: 'bbbb', check: false }, { name: 'AAA', key: 'cccc', check: false }] },
        { item2: [{ name: 'AAAA', key: 'AAAA', check: false }, { name: 'BBBB', key: 'BBBB', check: true }, { name: 'CCCC', key: 'CCCC', check: false }] },
        { item3: [{ name: '1111', key: '1111', check: false }, { name: '2222', key: '2222', check: false }, { name: '33332', key: '33332', check: false }] },
        // { "c_code": "C00002", "c_name": "DENTIST", "flg": "1" },
        // { "c_code": "C00015", "c_name": "DERMATAOLOGIST", "flg": "1" },
        // { "c_code": "C00010", "c_name": "DIABETOLOGIST", "flg": "1" },
        // { "c_code": "C00003", "c_name": "ENT", "flg": "1" }
    ])

    const a = ['1', '2', '3', '4']

    const [org, setOrg] = useState(options)
    const [filter, setFilter] = useState()

    const handleChange = (item) => {
        const temp = [...org]
        temp.map(oppp => {
            oppp[Object.keys(oppp)[0]].map(op => {
                if (op.key === item.key) {
                    console.log(op);
                    op.check = !op.check
                }
            })
        })
        let count = 0
        temp.map(oppp => {
            oppp[Object.keys(oppp)[0]].map(op => {
                if (op.check) count++
            })
        })
        setFilter(temp)
        setOptions(temp)
        setOrg(temp)
        if (count !== 0) setselected(`${count} Selected`)
        else setselected('')
    }

    useEffect(() => {
        let count = 0
        options.map(oppp => {
            oppp[Object.keys(oppp)[0]].map(op => {
                if (op.check) count++
            })
        })
        if (count !== 0) {
            setselected(`${count} Selected`)
        }
        setFilter(org)
        const string = 'abc'
        console.log(string.split(','))
    }, [])

    const gettext = () => {
        let text = 'aa'
        a.map(item => {
            return text = `${text}^${item}`
        })
        console.log(text);
    }

    const handleSearchChange = (e) => {
        const filterTemp = [...options]
        if (e.target.value !== 0) {
            const searchFilter = []
            const searchFilterKey = []
            filterTemp.map(opp => {
                opp[Object.keys(opp)[0]].map(o => {
                    if (o.name.includes(e.target.value)) {
                        if (!searchFilterKey.includes(Object.keys(opp)[0])) {
                            searchFilterKey.push(Object.keys(opp)[0])
                            searchFilter.push({ [`${Object.keys(opp)[0]}`]: [{ ...o }] })
                        } else {
                            searchFilter.map(i => {
                                if (Object.keys(i)[0] === Object.keys(opp)[0]) {
                                    i[Object.keys(i)[0]].push(o);
                                }
                            })
                        }
                        console.log(searchFilter);
                    }
                })
            })
            setselected(e.target.value)
            setFilter(searchFilter)
        } else {
            setFilter(filterTemp)
        }
    }


    return (
        <div className='container'>
            <div className='input-container' >
                <input className='input-box' type='text' placeholder='Search or Select'
                    value={selected} onChange={(event) => { handleSearchChange(event) }}
                    onClick={drop === false ? () => { setDrop(!drop) } : ''} />
                <div ref={btnref} className='symbol' onClick={() => { setDrop(!drop) }}>{drop ? <Uparrow /> : <Downarrow />}</div>
            </div>
            <Form>
                {drop ? <div className='dropDown-container' >
                    {filter.map(oppp => {
                        return <ol style={{ marginLeft: '-15px' }}>
                            <span className='drop-down-heading-name'>{Object.keys(oppp)[0].toUpperCase()}</span>
                            {
                                oppp[Object.keys(oppp)[0]].map(op => {
                                    return <li className='check-box-container'>
                                        <Form.Check type='checkbox' onChange={() => { handleChange(op) }} id={op.key} checked={op.check} />
                                        <label for={op.key} className={op.check ? 'bold' : 'normal'} > {op.name} </label>
                                    </li>
                                })
                            }
                        </ol>
                    })}
                </div> : null
                }
            </Form>

        </div >
    )
}
