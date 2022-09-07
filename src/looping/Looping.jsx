import React, { useState } from 'react'
import { Chilld } from './Chilld'

export const Looping = () => {
    const [call, setCall] = useState(false)

    const ar = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }, { a: 5 }, { a: '' }, { a: 7 }, { a: 8 }, { a: 9 }, { a: 10 }, { a: 11 }]
    //    const ar2 = ar.some(item=>{
    //         return item.a === ''
    //    })
    //    console.log(ar2);

    for (let i = 0; i < ar.length; i++) {
        if (ar[i].a === '') {
            console.log(ar[i], 'entry plz')
            i = ar.length
        }
        else {
            if (ar[i].a !== '') console.log(ar[i], 'entered');
        }
    }

    const func = (a, b) => {
        console.log(a);
        console.log(b);
    }

    const func2 = () => {
        console.log('returned');
        setCall(!call)
    }

    const resultSearch = [{
        'hits': [
            {
                "_index": "x1651032763781_stock_availability",
                "_type": "_doc",
                "_id": "6273a91559abd8764d7e164f",
                "_score": 0.2581541,
                "_source": {
                    "size": "6",
                    "product_name": "Beat Men Flip-flops",
                    "@timestamp": "2022-05-19T13:10:27.419Z",
                    "gender_category": "Men",
                    "product_description": "Men slippers",
                    "brand": "Beat",
                    "product_category": "Flip-flops",
                    "image": "https://cdn.yellowmessenger.com/avxsVrxveahJ1651823143473.jpg",
                    "slno": "3",
                    "price": "699",
                    "availability": "10",
                    "updatedDate": "2022-05-19T13:10:27.411Z",
                    "product_code": "PI0429",
                    "insertedDate": "2022-05-05T10:38:13.573Z",
                    "@version": "1",
                }
            },
            {
                "_index": "x1651032763781_stock_availability",
                "_type": "_doc",
                "_id": "6273a91559abd8764d7e164f",
                "_score": 0.2581541,
                "_source": {
                    "size": "6",
                    "product_name": "Beat Men Flip-flops",
                    "@timestamp": "2022-05-19T13:10:27.419Z",
                    "gender_category": "Men",
                    "product_description": "Men slippers",
                    "brand": "Beat",
                    "product_category": "Flip-flops",
                    "image": "https://cdn.yellowmessenger.com/avxsVrxveahJ1651823143473.jpg",
                    "slno": "3",
                    "price": "1699",
                    "availability": "10",
                    "updatedDate": "2022-05-19T13:10:27.411Z",
                    "product_code": "PI0429",
                    "insertedDate": "2022-05-05T10:38:13.573Z",
                    "@version": "1",
                }
            },
            {
                "_index": "x1651032763781_stock_availability",
                "_type": "_doc",
                "_id": "6273a91559abd8764d7e164f",
                "_score": 0.2581541,
                "_source": {
                    "size": "6",
                    "product_name": "Beat Men Flip-flops",
                    "@timestamp": "2022-05-19T13:10:27.419Z",
                    "gender_category": "Men",
                    "product_description": "Men slippers",
                    "brand": "Beat",
                    "product_category": "Flip-flops",
                    "image": "https://cdn.yellowmessenger.com/avxsVrxveahJ1651823143473.jpg",
                    "slno": "3",
                    "price": "2699",
                    "availability": "10",
                    "updatedDate": "2022-05-19T13:10:27.411Z",
                    "product_code": "PI0429",
                    "insertedDate": "2022-05-05T10:38:13.573Z",
                    "@version": "1",
                }
            },
        ]
    }]

    const size_availability = [{ "size": "6" }, { "size": "7" }, { "size": "8" }]
    const stock_availability = [{ "stock": "10" }, { "stock": "0" }, { "stock": "18" }]


    const filterrr = () => {
        // const filter = resultSearch[0]['hits'].filter(i => {
        //     return i['_source']['price'] <= 2000
        // })

        // const c = stock_availability.filter(i => {
        //     console.log(i['stock']);
        //     console.log(i['stock'].slice(0, 1));
        //     return !i['stock'].slice(0, 1).includes('0')
        // })

        // console.log(c);


        // const i = size_availability.map((i, index) => {
        //     if (i['size'] === '6') {
        //         return index
        //     }
        // }).filter(i => {
        //     return i !== undefined
        // })
        // console.log(i[0]);

        // stock_availability.map((item, index) => {
        //     console.log(i[0], index);
        //     if (i[0] === index) {
        //         console.log(item);
        //     }
        // })
        const arr = []

        const data = size_availability.map((item, index) => {
            stock_availability.map((i, index2) => {
                if (index === index2) {
                    // console.log(item['size'], i['stock']);
                    arr.push({
                        ['size']: item['size'],
                        ['stock']: i['stock']
                    })
                }
            })
        })
        console.log(arr);
        console.log(arr.filter(item => {
            console.log(item['size']);
            return item['size'] === '7'
        }).map(i => {
            console.log(i);
            if (i['stock'] !== '0') {
                return 'available'
            } else {
                return 'not available'
            }
        })[0], 'dfghjklkjhgfghjkjhg');
    }



    func('', 2)
    return (
        <div>
            <button onClick={() => { setCall(!call) }}>click</button>
            <button onClick={filterrr}>call</button>
            <Chilld call={call} func2={func2} />
        </div >
    )
}
