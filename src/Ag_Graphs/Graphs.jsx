import React from 'react'
import { Col, Row } from "react-bootstrap"
import {
    Bar,
    Cell,
    XAxis,
    YAxis,
    LabelList,
    ResponsiveContainer,
    ComposedChart,
    PieChart,
    Pie,
    BarChart,
} from 'recharts';
import "./charts.css"
const data = [
    {
        name: 'North',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'East',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'West',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'South',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    }
];

const data2 = [
    { name: '< 1year 400%', value: 6, color: '#0088FE' },
    { name: '> 10year 300%', value: 21, color: "#00C49F" },
    { name: '5 - 10 years 17%', value: 17, color: "#FFBB28" },
    { name: '3 - 5 years 18%', value: 18, color: "#FF8042" },
    { name: '1 - 5 years 38%', value: 38, color: "rgb(227 227 227)" },
];

const data3 = [
    {
        name: 'abcd',
        uv: 590,
        pv: 800,
        amt: 1400,
        color: '#0088FE'
    },
    {
        name: 'efgh',
        uv: 868,
        pv: 967,
        amt: 1506,
        color: "#00C49F"
    },
    {
        name: 'ijkl',
        uv: 1397,
        pv: 1098,
        amt: 989,
        color: "#FFBB28"
    },
    {
        name: 'mnop',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        color: "#FF8042"
    },
    {
        name: 'qrs',
        uv: 590,
        pv: 800,
        amt: 1400,
        color: '#0088FE'
    },
    {
        name: 'tuv',
        uv: 868,
        pv: 967,
        amt: 1506,
        color: "#00C49F"
    },
    {
        name: 'wxyz',
        uv: 1397,
        pv: 1098,
        amt: 989,
        color: "#FFBB28"
    },
    {
        name: 'axgft',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        color: "#FF8042"
    },
    {
        name: 'abcd',
        uv: 590,
        pv: 800,
        amt: 1400,
        color: '#0088FE'
    },
    {
        name: 'efgh',
        uv: 868,
        pv: 967,
        amt: 1506,
        color: "#00C49F"
    },
    {
        name: 'ijkl',
        uv: 1397,
        pv: 1098,
        amt: 989,
        color: "#FFBB28"
    },
    {
        name: 'mnop',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        color: "#FF8042"
    },
    {
        name: 'qrs',
        uv: 590,
        pv: 800,
        amt: 1400,
        color: '#0088FE'
    },
    {
        name: 'tuv',
        uv: 868,
        pv: 967,
        amt: 1506,
        color: "#00C49F"
    },
    {
        name: 'wxyz',
        uv: 1397,
        pv: 1098,
        amt: 989,
        color: "#FFBB28"
    },
    {
        name: 'axgft',
        uv: 1480,
        pv: 1200,
        amt: 1228,
        color: "#FF8042"
    }
];

const data4 = [
    {
        name: 'Acute',
        value: 400,
        color: "blue"
    },
    {
        name: 'Cronic',
        value2: 200,
        color: "green"
    },
    // {
    //     name: 'Semicronic',
    //     value: 50,
    //     color: "orange"
    // },
]

const RADIAN = Math.PI / 180

const Graphs = () => {

    const renderCustomizedLabel = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 10;

        return (
            <g>
                <text x={x + width + 30} y={y + (height / 2)} fill="#000" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: '600' }}>
                    {value}
                </text>
            </g>
        );
    };

    const renderCustomizedLabel2 = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }) => {
        // console.log(props)
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" style={{ fontWeight: '600' }}>
                {name}
            </text>
        );
    };

    const renderCustomizedLabel3 = (props) => {
        const { x, y, width, height, value } = props;
        const radius = 10;

        return (
            <g>
                <text x={x + (width / 2)} y={y - 10} fill="var(--blue)" textAnchor="middle" dominantBaseline="middle" style={{ fontWeight: '600' }}>
                    {`${value}`}
                </text>
            </g>
        );
    }

    return (
        <div style={{ width: '100vw', height: "500px", padding: '1rem' }}>
            <Row>
                <Col lg={8} xl={8} md={12} sm={12} xs={12} className='card_Boxess'>
                    <div style={{ width: '100%', height: '300px', padding: '2rem 2rem 2rem 0' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                                layout="vertical"
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <XAxis type="number" dataKey="amt" style={{ fontWeight: '600' }} fill='black' axisLine={false} tickLine={false} />
                                <YAxis dataKey="name" type="category" style={{ fontWeight: '600' }} fill='black' axisLine={false} tickLine={false} />
                                <Bar dataKey="amt" barSize={20} fill="var(--blue)" >
                                    <LabelList dataKey="amt" content={renderCustomizedLabel} />
                                </Bar>
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                    <br />
                    <br />
                </Col>
                <Col lg={4} xl={4} md={12} sm={12} xs={12} className='card_Boxess'>
                    <div style={{ width: '100%', height: '300px', borderRadius: '8px', padding: '2rem 2rem 2rem 0' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={data2}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel2}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"

                                >
                                    {data2.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry['color']} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
                <Col lg={8} xl={8} md={12} sm={12} xs={12} className='card_Boxess'>
                    <div style={{ width: '100%', height: '300px', padding: '2rem 2rem 2rem 0' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={700}
                                height={400}
                                data={data3}
                            >
                                <XAxis dataKey="name" style={{ fontWeight: '600' }} fill='black' axisLine={false} tickLine={false} />
                                <YAxis style={{ fontWeight: '600' }} fill='black' axisLine={false} tickLine={false} />
                                <Bar dataKey="uv" fill="#FFBB28" radius={[25, 25, 0, 0]} barSize={10} />
                                <Bar dataKey="pv" fill="#00C49F" radius={[25, 25, 0, 0]} barSize={10} />
                                <Bar dataKey="amt" fill='#0088FE' radius={[25, 25, 0, 0]} barSize={10} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <br />
                    <br />
                </Col>
                <Col lg={4} xl={4} md={12} sm={12} xs={12} className='card_Boxess'>
                    <div style={{ width: '100%', height: '300px', padding: '2rem 2rem 2rem 0' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={700}
                                height={400}
                                data={data4}
                                margin={{
                                    top: 20,
                                    right: 20,
                                    bottom: 20,
                                    left: 20,
                                }}
                            >
                                <XAxis dataKey="name" tickLine={false} />
                                <YAxis hide={true} />
                                {/* <Bar dataKey="value" fill="var(--blue)" fillOpacity=".2" style={{ borderColor: 'var(--blue)' }}> */}
                                <Bar dataKey="value" stackId="a" fill="blue" fillOpacity=".5" style={{ borderColor: 'var(--blue)' }}>
                                    {/* <LabelList dataKey="value" content={renderCustomizedLabel3} /> */}
                                </Bar>
                                <Bar dataKey="value2" stackId="a" fill="green" fillOpacity=".5" style={{ borderColor: 'var(--blue)' }}>
                                    {/* <LabelList dataKey="value" content={renderCustomizedLabel3} /> */}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <br />
                    <br />
                </Col>
            </Row>
        </div>
    )
}

export default Graphs
