import React from 'react'
import "../Profile_Card.css"

const Profile_Card = () => {
    return (
        <div className='profile-wrapper'>
            <div className='profile-details-wrapper'>
                <img src='https://cdn.pixabay.com/photo/2023/11/30/07/51/bridge-8420945_640.jpg' className='profile-img' />
                <div className='profile-footer-container'>
                    <div style={{ transform: "rotate(180deg)" }}>
                        <div className='profile-body'>
                            <div>Puneeth Kumar B C</div>
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vero
                            culpa animi dolorum blanditiis voluptate! Reprehenderit pariatur tempore aperiam molestias
                            quas temporibus magni nam laboriosam iure iste, officiis numquam fuga!
                        </div>
                        <div className='profile-footer'>
                            <div>A</div>
                            <div>A</div>
                            <div>A</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile_Card
