import { dateToInt } from '@syncfusion/ej2-react-spreadsheet'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { doctordata, chemist, stockiest, hospital, type } from './datas'

const Rcpa = () => {
    const [dateval, setDateval] = useState()
    const [selectedDoctor, setSelecteddoctor] = useState([])
    const [show, setShow] = useState(false)
    const [doctor, setDoctor] = useState(doctordata)
    const [chemistVal, setChemistVal] = useState()
    const [data, setData] = useState([])



    const handleShow = () => {
        setShow(!show)
    }

    const handleChangeCheck = (index) => {
        const temparr = [...doctor]
        temparr.map((item, i) => {
            if (i === index) {
                if (item.val === 0) {
                    item.val = 1
                }
                else {
                    item.val = 0
                }
            }
        })
        setDoctor(temparr)
    }

    useEffect(() => {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth()
        const d = date.getDate()
        console.log(year, month, d)
        const a = year + "-" + month + '-' + d
        setDateval(a)
    }, [])

    useEffect(() => {
        const temparr = []
        doctor.map(item => {
            if (item.val === 1) {
                temparr.push(item.name)
            }
        })
        setSelecteddoctor(temparr)
    }, [doctor])

    useEffect(() => {
        if (selectedDoctor) {
            const tempDate = []
            selectedDoctor.map(item => {
                if (!Object.keys(tempDate).includes(item)) {
                    tempDate.push({
                        [item]: {
                            chemist: '',
                            weight: '',
                            date: dateval,
                            type: '',
                            selectedArr: [],
                            details: {
                                a: '',
                                b: '',
                            }
                        }
                    })
                }
            })
            setData(tempDate)
        }
    }, [selectedDoctor])

    const handleCleckRemove = (item) => {
        const temparr = [...selectedDoctor]
        const filter = temparr.filter(i => {
            return i !== item
        })
        setSelecteddoctor(filter)
        const tempData = [...doctor]
        tempData.map(i => {
            if (i.name === item) {
                if (i.val === 0) {
                    i.val = 1
                }
                else {
                    i.val = 0
                }
            }
        })
        setDoctor(tempData)
    }

    const handleChangeChemist = (docVal, e) => {
        const tempData = [...data]
        tempData.map(item => {
            Object.keys(item).map(val => {
                if (val === docVal) {
                    item[val].chemist = e.target.value
                }
            })
        })
        setData(tempData)
    }

    const handleChangeWeight = (docVal, e) => {
        const tempData = [...data]
        tempData.map(item => {
            Object.keys(item).map(val => {
                if (val === docVal) {
                    item[val].weight = e.target.value
                }
            })
        })
        setData(tempData)
    }

    const handleClickSave = () => {
        data.map(item => {
            Object.keys(item).map(val => {
                const b = item[val]
                if (b.chemist === '' || b.chemist === '--Select--') {
                    alert(`chemist not selected in ${val}`)
                }
                // else if (b.weight === '') {
                //     alert(`weight not selected in ${val}`)
                // }
            })
        });
        console.log(data);
    }

    const handleChangetype = (docVal, e) => {
        const tempData = [...data]
        tempData.map(item => {
            Object.keys(item).map(val => {
                if (val === docVal) {
                    item[val].type = e.target.value
                    item[val].selectedArr = e.target.value === 'chemist' ? chemist
                        :
                        e.target.value === 'stockiest' ? stockiest
                            :
                            e.target.value === 'hospital' ? hospital : []
                }
            })
        })
        setData(tempData)
    }

    const handleChangeA = (docVal, e) => {
        const tempData = [...data]
        tempData.map(item => {
            Object.keys(item).map(val => {
                if (val === docVal) {
                    item[val].details.a = e.target.value
                }
            })
        })
        setData(tempData)
    }

    const handleChangeB = (docVal, e) => {
        const tempData = [...data]
        tempData.map(item => {
            Object.keys(item).map(val => {
                if (val === docVal) {
                    item[val].details.b = e.target.value
                }
            })
        })
        setData(tempData)
    }

    return (
        <div>
            <input type='text' value={dateval} />
            <div>
                <div style={{ width: '500px', height: '30px', border: '1px solid black', display: 'flex' }} >
                    {selectedDoctor.length > 0 ?
                        <div style={{ width: '90%', display: 'flex', flexWrap: 'wrap' }}>
                            {selectedDoctor.map(item => {
                                return <div style={{ border: '1px solid black', backgroundColor: 'grey', color: 'white', borderRadius: '10px', padding: '0 5px', marginRight: '1px' }}>
                                    {item}
                                    <span style={{ marginLeft: '4px', border: '1px solid black', borderRadius: '50%' }} onClick={() => { handleCleckRemove(item) }}>x</span>
                                </div>
                            })
                            }
                        </div>
                        :
                        <div style={{ width: '90%' }}>{'search'}</div>
                    }
                    <div onClick={handleShow} style={{ float: 'right' }}>
                        {'<<>>'}
                    </div>
                </div>
                {show &&
                    <div>
                        {doctor.map((item, index) => {
                            return <div>
                                <input type='checkbox' id={index} checked={item.val} onChange={() => { handleChangeCheck(index) }} />
                                <label htmlFor={index} >{item.name}</label>
                            </div>
                        })}
                    </div>
                }
                {data &&
                    data.map((item, index) => {
                        return Object.keys(item).map(docVal => {
                            return <Accordion>
                                <Accordion.Item eventKey={index}>
                                    <Accordion.Header>{docVal}{'(Doctor)'}</Accordion.Header>
                                    <Accordion.Body>
                                        <form>
                                            <select onChange={(e) => { handleChangetype(docVal, e) }} value={item[docVal].type} >
                                                {type.map(ty => {
                                                    return <option>{ty} </option>
                                                })}
                                            </select>
                                            <select onChange={(e) => { handleChangeChemist(docVal, e) }} value={item[docVal].chemist}>
                                                {item[docVal].selectedArr.map(chem => {
                                                    return <option>{chem}</option>
                                                })}
                                            </select>

                                        </form>
                                        {item[docVal].chemist &&
                                            <Accordion>
                                                <Accordion.Header>{item[docVal].chemist}({item[docVal].type})</Accordion.Header>
                                                <Accordion.Body>
                                                    <input type='text' onChange={(e => { handleChangeA(docVal, e) })} value={item[docVal].details.a} />
                                                    <input type='text' onChange={(e => { handleChangeB(docVal, e) })} value={item[docVal].details.b} />
                                                    <input type='number' onChange={(e => { handleChangeWeight(docVal, e) })} value={item[docVal].weight} />
                                                </Accordion.Body>
                                            </Accordion>
                                        }
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        })
                    })}
                {/* {dat &&
                    selectedDoctor.map((item, index) => {
                        return <Accordion>
                            <Accordion.Item eventKey={index}>
                                <Accordion.Header>{item}{'(Doctor)'}</Accordion.Header>
                                <Accordion.Body>
                                    <form>
                                        <select onChange={(e) => { handleChangeChemist(item, e) }}>
                                            {chemist.map(chem => {
                                                return <option>{chem}</option>
                                            })}
                                        </select>
                                        <input type='number' onChange={(e => { handleChangeWeight(item, e) })} />
                                    </form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    })
                } */}
            </div>
            <button onClick={handleClickSave}>Save</button>
        </div>
    )
}

export default Rcpa