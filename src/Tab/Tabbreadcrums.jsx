import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HtmlToImage from '../HtmlToImage/HtmlToImage';
import Download from '../uplaod/Download';
import Zipdecompress from '../ZIPPER/Zipdecompress';

const Tabbreadcrums = () => {

    const [selectedTab, setSelectedTab] = useState()

    const changeTab = (e) => {
        localStorage.setItem('tab', e)
        setSelectedTab(e)
    }

    useEffect(() => {
        console.log(localStorage.getItem('tab'))
        if (localStorage.getItem('tab') !== null) {
            setSelectedTab(localStorage.getItem('tab'))

        }
        else {
            setSelectedTab('contact')
        }
    }, [selectedTab])

    // useEffect(() => {
    //     console.log(selectedTab, 'selectedTab')
    // }, [selectedTab])

    return (
        <div>
            <Tabs
                activeKey={selectedTab}
                id="uncontrolled-tab-example"
                className="mb-3"
                onSelect={(e) => { changeTab(e) }}
            >
                <Tab eventKey="home" title="Home">
                    <HtmlToImage />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <Zipdecompress />
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                    <Download />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Tabbreadcrums