import React, { useEffect, useRef, useState } from 'react'
import "./landingPages.scss"
import ToggleBtn from '../basiccomponent/ToggleBtn'
import Animation from '../basiccomponent/Animation'

const AdminMessage = ({ height, width }) => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" class="bi bi-envelope-fill" viewBox="0 0 16 16">
        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 
        4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 
        1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
    </svg>
}

const Search = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
}
const Search1 = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" fill="#fff" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
}

const Bell = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#fff" class="bi bi-bell" viewBox="0 0 16 16">
        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
    </svg>
}


const Header = () => {
    const [mobHeader2Drop, setMobHeaderDrop] = useState(false)
    const ProfileRef = useRef()
    const [profileDrop, setProfileDrop] = useState(false)
    const mobileDropRef = useRef()
    const [searchActive, setSearchActive] = useState(false)

    const [toogle, setToogle] = useState(true)

    const [det, setDet] = useState({
        a: 'AAAAAAAAAAAAA',
        b: {
            c: {
                d: '',
                f: 'FFFFFFFFFFFFFFF'
            },
            e: 'EEEEEEEEEEEE'
        }
    })

    useState(() => {
        console.log(det, 'state Change')
    }, [det])



    useEffect(() => {

        const FunC = (e) => {
            if (!ProfileRef.current.contains(e.target)) {
                setProfileDrop(false)
            }
        }

        document.addEventListener("mousedown", FunC)

        return () => {
            document.removeEventListener('mousedown', FunC)
        }

    })

    useEffect(() => {
        const FunC2 = (e) => {
            if (!mobileDropRef.current.contains(e.target)) {
                setMobHeaderDrop(false)
            }
        }

        document.addEventListener("mousedown", FunC2)

        return () => {
            document.removeEventListener('mousedown', FunC2)
        }
    })

    return (
        <>
            <div className="destop_header_container">
                <img src="https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871__340.jpg" />
                <div className='corousal'>
                    agjhgdhgajhsgfjkhasgjh
                </div>
                <div className="items_contianer">
                    <div className="search_menu">
                        <Search />
                        <input type='text' placeholder='Enter Menu' />
                    </div>
                    <div className="admin_message" title='Admin Message'>
                        <AdminMessage />
                    </div>
                    <div className="notification" title='Notifications'>
                        <Bell />
                    </div>
                    <div ref={ProfileRef} className='profile_Cont' title='My Profile'>
                        <img
                            src="https://cdn.pixabay.com/photo/2022/05/17/21/41/naruto-7203817__340.jpg"
                            className="porfile_Page"
                            onClick={() => { setProfileDrop(true) }}
                        />
                        <div className={profileDrop ? 'Drop_contanier' : 'Drop_contanier_inacitve'}>
                            <h4>profile</h4>
                            <h4>Change Password</h4>
                            <h4>Logout</h4>
                        </div>


                    </div>
                </div>
            </div>

            <div className="mobile_header_container">
                <img src="https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871__340.jpg" />
                <div className='corousal'>
                    agjhgdhgajhsgfjkhasgjh
                </div>
                <div ref={mobileDropRef}>
                    <div className="mob_btn" onClick={() => { setMobHeaderDrop(!mobHeader2Drop) }}>...</div>
                    <div className={mobHeader2Drop ? "mobile_header_2" : "mobile_header_2_inactive"}>
                        <div className="items_contianer">
                            <div className="search-box" style={{ width: searchActive ? "200px" : "32px" }}>
                                <input type="text" placeholder='Enter' />
                                {!searchActive ? <div className='searc-btn' onClick={() => { setSearchActive(true) }}>
                                    <Search1 />
                                </div>
                                    :
                                    <div className='search-cancel' onClick={() => { setSearchActive(false) }}>
                                        X
                                    </div>
                                }
                            </div>
                            <div className="admin_message" title='Admin Message'>
                                <AdminMessage />
                            </div>
                            <div className="notification" title='Notifications'>
                                <Bell />
                            </div>
                            <div ref={ProfileRef} className='profile_Cont' title='My Profile'>
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/05/17/21/41/naruto-7203817__340.jpg"
                                    className="porfile_Page"
                                    onClick={() => { setProfileDrop(true) }}
                                />
                                <div className={profileDrop ? 'Drop_contanier' : 'Drop_contanier_inacitve'}>
                                    <h4>profile</h4>
                                    <h4>Change Password</h4>
                                    <h4>Logout</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <ToggleBtn toogle={toogle} setToogle={setToogle} />
                <Animation />
                {det["b"]["c"]["d"]}
                <button onClick={() => {
                    const copy = JSON.parse(JSON.stringify(det))
                    copy["b"]["c"]["d"] = 'DDDDDDDDDDDD'
                    setDet(copy)
                    console.log(copy, 'deepcopy change')
                }}>click</button>
            </div>
        </>
    )
}

export default Header
