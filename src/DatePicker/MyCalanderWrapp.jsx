import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
// import DatePicker from './DatePicker'

import DatePicker from "react-multi-date-picker"
import Toolbar from 'react-multi-date-picker/plugins/toolbar'

function MyPlugin({ DatePicker }) {


    return (
        <div>
            <button
                style={{ margin: "5px" }}
                disabled={!DatePicker}
                onClick={() => console.log(DatePicker)}
            >
                Close
            </button>
        </div>
    );
}

const MyCalanderWrapp = () => {
    const [value, setValue] = useState(new Date())

    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())


    return (
        <Row style={{ padding: '4rem' }}>
            <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                {/* <DatePicker
                    label='From Date'
                    important
                    value={fromDate}
                    placeholder='Select From Date'
                    onChange={val => setFromDate(val)}
                /> */}
            </Col>
            <Col xl={3} lg={3} md={4} sm={6} xs={12}>
                {/* <DatePicker
                    label='From Date'
                    important
                    value={toDate}
                    placeholder='Select From Date'
                    onChange={val => setToDate(val)}
                    disabled
                /> */}
            </Col>
            <DatePicker
                value={value}
                onChange={setValue}
                plugins={[
                    <MyPlugin position="bottom" />
                ]}
            />
        </Row>
    )
}

export default MyCalanderWrapp
