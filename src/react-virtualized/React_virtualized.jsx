import React, { useCallback, useEffect, useState } from 'react'
import { List } from 'react-virtualized';

const React_virtualized = () => {

    const arr = [
        { nId: '1', modified: '1', value: '1', deleted: 'no' },
        { nId: '1', modified: '2', value: '2', deleted: 'no' },
        { nId: '1', modified: '3', value: '2', deleted: 'yes' },
        { nId: '2', modified: '1', value: '1', deleted: 'no' },
        { nId: '2', modified: '2', value: '1', deleted: 'no' },
        { nId: '2', modified: '3', value: '4', deleted: 'no' },
        { nId: '3', modified: '1', value: '1', deleted: 'no' },
        { nId: '3', modified: '2', value: '', deleted: 'no' },
        { nId: '3', modified: '3', value: '5', deleted: 'no' },
        // {nId: '1', modified: '1', value: '1'},
    ]
    const [data, setDate] = useState([])
    const [inputVal, setInputVal] = useState('')

    const rowRenderer = useCallback(({ index, key, style }) => {
        // let tempData = inputVal ? data.filter

        return (
            <div key={key} style={style}>
                {data[index]['id'] + '----' + data[index]['title']}
            </div>
        );
    }, [inputVal]);

    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/photos`).then(res => res.json()).then(d => {
    //         for (let i = 0; i < 10; i++) {
    //             setDate(da => ([...da, ...d]))
    //         }
    //     })
    // }, [])

    // console.log(data)

    function _findIndex(val, filArr) {
        let index
        for (let i = val; i < filArr.length; i--) {
            if (filArr[i - 1]['value']) {
                index = i - 1
                break;
            }
        }
        return index
    }

    const renderTable = () => {
        const uniqueId = []
        arr.map(i => {
            if (!uniqueId.includes(i['nId'])) {
                uniqueId.push(i['nId'])
            }
        })

        return uniqueId.map(i => {
            const filteredItems = arr.filter(r => r['nId'] === i)

            console.log(filteredItems)

            return filteredItems.map((isVal, index) => {
                const itemToComparedWith = filteredItems[index === 0 ? 0 : _findIndex(index, filteredItems)]

                return <tr style={{ color: isVal['deleted'] === 'yes' ? 'red' : 'black' }}>
                    <td style={{ color: isVal['deleted'] === 'yes' ? 'red' : 'black' }}>{isVal['nId']}</td>
                    <td style={{ color: isVal['deleted'] === 'yes' ? 'red' : 'black' }}>{isVal['modified']}</td>
                    <td style={{ color: isVal['deleted'] === 'yes' || itemToComparedWith['value'] !== isVal['value'] ? 'red' : 'black' }}>{isVal['value']}</td>
                    <td style={{ color: isVal['deleted'] === 'yes' }}> {isVal['deleted']}</td>
                </tr >
            })
        })
    }

    return (
        <div style={{ width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {/* <input
                value={inputVal}
                placeholder='Search'
                onChange={v => setInputVal(v.target.value)}
                style={{ width: '300px' }}
            />
            <List
                width={300}
                height={600}
                rowCount={data.length}
                rowHeight={50}
                rowRenderer={rowRenderer}
            /> */}
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>modified</th>
                        <th>combination</th>
                        <th>deleted</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>
    )
}

export default React_virtualized
