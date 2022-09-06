import React, { useEffect, useState } from 'react'
import { MenuItem } from 'semantic-ui-react'

const Rejex_validator = () => {
    const [values, setValues] = useState({
        value: '',
        value2: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }
    const handleClick = () => {
        const rej = new RegExp("^[A-Za-z0-9]{1,29}$")
        if (rej.test(values.value)) {
            // console.log(values.value);
            if (rej.test(values.value2)) {
                // console.log(values.value2);
                alert('successful')
            }
            else {
                alert('invalid value 2')
            }
        }
        else {
            alert('invalid value 1')
        }
    }
    useEffect(() => {
        const str = ['dfghj2345', 'dfghjk23456', 'sdfghyuio33', 'asdfghjk0001']
        const str1 = [{ val: 'aaa001' }, { val: 'aaa002' }, { val: 'aaa006' }, { val: 'aaa005' }, { val: 'aaa003' }]

        const sort = str1.sort((a, b) => {
            return a.val.localeCompare(b.val, {
                numeric: true,
                sensitivity: 'base'
            });
        })
        // console.log(sort);
        const num = str.map(item => {
            return item.split('').map(sp => {
                if (Number(sp)) {
                    // console.log(Number(sp));
                    return Number(sp)
                }
            }).join('')
        })
        // console.log(num.sort());

    }, [values])
    useEffect(() => {
        let string = 'FDDHKHKGG hiuhi kjhhihi  IUHiuhoiuh';
        const fun = (str) => {
            return str.split(' ').map((item, index) => {
                if (index === 0) {
                    return item.toLowerCase()
                } else {
                    return item.toLowerCase().split('').map((i, index) => {
                        if (index === 0) {
                            return i.toUpperCase()
                        } else {
                            return i
                        }
                    }).join('')
                }
            }).join(' ')
        }
        // fun(string)
        // console.log(fun(string));

    }, [])

    const handleClick0 = () => {
        // let a = values['value']
        // const remove0 = () => {
        //     a = a.slice(1)
        //     if (parseInt(a[0]) === 0) {
        //         remove0()
        //     } else {
        //         const rej = new RegExp("^[-9]{1,20}$")
        //         a = a.replace(/0/g, 1)
        //         if (rej.test(a)) {
        //             console.log('valid');
        //         }
        //         else {
        //             console.log('invalid')
        //         }
        //     }
        // }
        // if (parseInt(a[0]) === 0) {
        //     remove0()
        // }

        // console.log(a);
        let a = 'value'
        if (parseInt(a[0]) !== 0) {
            const rej = new RegExp("^[0-9]{1,30}$")
            if (rej.test(a)) {
                console.log('valid');
            }
            else {
                console.log('invalid');
            }
        } else {
            console.log('invalid');
        }

        const aray = ['a', 'a']
        aray.reduce((a, b) => {
            console.log(a, b);
            if (a === b) {
                console.log('not');
            }
        })



    }
    return (
        <div>
            <input type='text' onChange={handleChange} name='value' values={values.value} />
            <input type='text' onChange={handleChange} name='value2' values={values.value2} />
            <button onClick={handleClick}>
                Save
            </button>
            <button onClick={handleClick0}>check 0</button>
            <img src='https://qasfa360blob.blob.core.windows.net/abbott/sfa360dev/Va/MKT001/197/thumb-1920-910289.jpg' height='100%' />
        </div>
    )
}

export default Rejex_validator