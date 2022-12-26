import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Basiccomp from './Basiccomp'

const Takebasiccopm = () => {

    const [orgiginal, setOriginl] = useState([])
    const [filter, setFilter] = useState([])
    const [val, setVal] = useState('')
    const [orgiginal1, setOriginl1] = useState([])
    const [filter1, setFilter1] = useState([])
    const [val1, setVal1] = useState('')

    const data = [{ val: 0, value: 'abc' }, { val: 0, value: 'aaa' }, { val: 0, value: 'mno' }, { val: 0, value: 'pqr' }]
    const data111 = ['puneeth', 'kumar', 'bc', 'nasar', 'saif']

    useEffect(() => {
        setOriginl(data)
        setFilter(data)
        const temp = data111.map(item => {
            return {
                val: 0,
                value: item
            }
        })
        setOriginl1(temp)
        setFilter1(temp)
    }, [])

    const handleChangeFilter2 = (e) => {
        const vale = e.target.value
        setVal(vale)
        const temparr = [...orgiginal]
        const tempdata = temparr.filter(item => {
            return item.value.includes(vale)
        })
        setFilter(tempdata)
    }


    const handleChangetick2 = (indexVal) => {
        const temp = [...orgiginal]
        temp.map((item, index) => {
            if (index === indexVal) {
                if (item.val === 0) {
                    item.val = 1
                }
                else {
                    item.val = 0
                }
            }
        })
        let count = 0
        temp.map(item => {
            if (item.val === 1) {
                count++
            }
        })
        setVal(`${count} Selected`)
        setFilter(temp)
        setOriginl(temp)
    }

    const getval = (e) => {
        const vale = e.target.value
        setVal1(vale)
        const temparr = [...orgiginal1]
        const tempdata = temparr.filter(item => {
            return item.value.includes(vale)
        })
        setFilter1(tempdata)
    }

    const handletick2 = (indexVal) => {
        const temp = [...orgiginal1]
        temp.map((item, index) => {
            if (index === indexVal) {
                if (item.val === 0) {
                    item.val = 1
                }
                else {
                    item.val = 0
                }
            }
        })
        let count = 0
        temp.map(item => {
            if (item.val === 1) {
                count++
            }
        })
        setVal1(`${count} Selected`)
        setFilter1(temp)
        setOriginl1(temp)
    }

    const one = (a) => {
        console.log(a, 'one')
    }

    const two = (a) => {
        console.log(a, 'two');
    }

    return (
        <div>
            <Basiccomp
                filter={filter}
                val={val}
                handleChangetick={handleChangetick2}
                handleChangeFilter={handleChangeFilter2}
                handleClick={one}
            />
            <Basiccomp
                filter={filter1}
                val={val1}
                handleChangeFilter={getval}
                handleChangetick={handletick2}
                handleClick={two}
            />
        </div>
    )
}

export default Takebasiccopm