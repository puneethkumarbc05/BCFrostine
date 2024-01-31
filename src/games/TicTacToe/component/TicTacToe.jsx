import React, { useEffect, useState } from 'react'
import "../css/TicTacToe.css"

const TicTacToe = () => {

    const [count, setCount] = useState(0)
    const combination = ['1,2,3', '1,4,7']

    function handleClickCard(id) {
        if (!document.getElementById(id).innerText) {
            document.getElementById(id).innerText = count % 2 === 0 ? 'X' : 'O'
            setCount((prevCount) => prevCount + 1)
        }
    }

    function handleClickRestart() {
        for (let i = 1; i < 10; i++) {
            const myDiv = document.getElementById(`${i}`)
            myDiv.innerText = ''
            myDiv.style.background = "transparent"
        }
        setCount(0)
    }

    useEffect(() => {
        let X = []
        let O = []
        for (let i = 1; i < 10; i++) {
            if (document.getElementById(`${i}`).innerText === 'X') {
                X.push(`${i}`)
            }
            else if (document.getElementById(`${i}`).innerText === 'O') {
                O.push(`${i}`)
            }
        }

        const xWin = combination.filter(r => r === X.toString()).toString()
        const oWin = combination.filter(r => r === O.toString()).toString()

        if (xWin) {
            xWin.split(',').map(id => {
                const myDiv = document.getElementById(`${id}`)
                myDiv.style.background = "green"
            })
            alert('X Wins')
            setCount(0)
            handleClickRestart()
        }
        else if (oWin) {
            oWin.split(',').map(id => {
                const myDiv = document.getElementById(`${id.trim()}`)
                myDiv.style.background = "green"
            })
            alert('O Wins')
            setCount(0)
            handleClickRestart()
        }
    }, [count])


    return (
        <div className='TicTacToe_wrapper'>
            <div className="TicTacToe_bord_container">
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('1')} id="1"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('2')} id="2"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('3')} id="3"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('4')} id="4"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('5')} id="5"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('6')} id="6"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('7')} id="7"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('8')} id="8"></button>
                <button className="TicTacToe_bord_container_card" onClick={() => handleClickCard('9')} id="9"></button>
            </div>
            <button onClick={handleClickRestart}>Restart</button>
        </div>
    )
}

export default TicTacToe
