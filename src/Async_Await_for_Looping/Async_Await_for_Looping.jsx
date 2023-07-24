import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const Async_Await_for_Looping = () => {
    const data = [1, 2, 3, 4, 5, 6, 7]
    // const [val, setVal] = useState(0)

    useEffect(() => {
        (async function addnumner() {
            let val = 0
            for (let i in data) {
                val = await add(data[i], val)
            }
            console.log(val)
        }())

        async function add(a, b) {
            return new Promise(async (resolve, reject) => {
                const res = await axios('https://jsonplaceholder.typicode.com/todos/1')
                console.log(res)
                resolve(a + b)
            })
        }

        // const funcA = () => {
        //     return new Promise((resolve, reject) => {
        //         resolve(console.log('A'))
        //     })
        // }

        // const funcB = () => {
        //     // setTimeout(() => { console.log('B') }, 4000)
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => { resolve(console.log('B')) }, 4000)
        //     })
        // }

        // const funcC = () => {
        //     return new Promise((resolve, reject) => {
        //         resolve(console.log('C'))
        //     })
        // }

        // async function func() {
        //     await funcA();
        //     await funcB();
        //     await funcC();
        // }

        // func()

    }, [])
    return (
        <div>
            {/* {val} */}
        </div>
    )
}

export default Async_Await_for_Looping
