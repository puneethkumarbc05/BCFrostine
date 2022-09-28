import React from 'react'
import ReactHtmlTableToExcel from 'react-html-table-to-excel'
import Slider from 'react-slick'
import { tableContent, restableData } from './data'

const React_Slick = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    const header = `Doctorwise Call Summary Report For jan-march 2022 for FS abc`

    return (
        <div>
            {/* <Slider {...settings}>
                {data && data.map(item => {
                    return <div>
                        {item}
                    </div>
                })}
            </Slider> */}
            {/* <table id='abc' style={{
                position: "fixed",
                left: "0px",
                zIndex: "-10",
                borderWidth: "1px",
                borderColor: "#aaaaaa",
                borderStyle: "solid",
                visibility: 'hidden'
            }} >
                <tr style={{ textAlign: 'center' }}>
                    <th colSpan={14}>
                        {header}
                    </th>
                </tr>
                <tr>
                    <th rowSpan={2}>Sub Area</th>
                    <th rowSpan={2}>Dr Code</th>
                    <th rowSpan={2}>Dr Name</th>
                    <th rowSpan={2}>Category</th>
                    <th rowSpan={2}>Grade</th>
                    <th rowSpan={2}>No. of Visits</th>
                    <th rowSpan={2}>Mcl No</th>
                    <th rowSpan={2}>Core Product</th>
                    <th colSpan={2} style={{ textAlign: 'center' }}>January</th>
                    <th colSpan={2} style={{ textAlign: 'center' }}>February</th>
                    <th colSpan={2} style={{ textAlign: 'center' }}>March</th>
                </tr>
                <tr>
                    <th>date</th>
                    <th>Product Detailed</th>
                    <th>date</th>
                    <th>Product Detailed</th>
                    <th>date</th>
                    <th>Product Detailed</th>
                </tr>
                {tableContent.map(item => {
                    return <tr >
                        <td>{item.Subarea}</td>
                        <td>{item.Drcode}</td>
                        <td>{item.Drname}</td>
                        <td>{item.Category}</td>
                        <td>{item.Grade}</td>
                        <td>{item['No.of Visits']}</td>
                        <td>{item.MclNo}</td>
                        <td>{item['Core Products']}</td>
                        <td>
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {item.Month1 ? item.Month1.map(item => {
                                    return <div>
                                        {item.Date}
                                    </div>
                                })
                                    :
                                    null}
                            </div>
                        </td>
                        <td>
                            {item.Month1 ? item.Month1.map(item => {
                                return <div>
                                    {item['Product Detailed']}
                                </div>
                            })
                                :
                                null}
                        </td>
                        <td>
                            {item.Month2 ? item.Month2.map(mon => {
                                return <div>
                                    {mon.Date}
                                </div>
                            })
                                :
                                null}
                        </td>
                        <td>
                            {item.Month2 ? item.Month2.map(mon => {
                                return <div>
                                    {mon['Product Detailed']}
                                </div>
                            })
                                :
                                null}
                        </td>
                        <td>
                            {item.Month3 ? item.Month3.map(mon => {
                                return <div>
                                    {mon.Date}
                                </div>
                            })
                                :
                                null}
                        </td>
                        <td>
                            {item.Month3 ? item.Month3.map(mon => {
                                return <div>
                                    {mon['Product Detailed']}
                                </div>
                            })
                                :
                                null}
                        </td>
                    </tr>
                })}
            </table> */}

            
            <ReactHtmlTableToExcel
                id="abc"
                className="download-table-xls-button"
                table="abc"
                filename="tablexls"
                sheet="tablexls"
                buttonText="export" />
        </div >
    )
}

export default React_Slick