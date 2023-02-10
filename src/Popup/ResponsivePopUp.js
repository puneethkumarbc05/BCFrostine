import React from 'react'
import './popup.css'

const ResponsivePopUp = () => {

  const a = 'abcf ( hbhnj )'
  const b = a.split('(')
  console.log(b[0])
  return (
    <>
      <p>
        lorem
      </p>
      <img src={'https://cdn.pixabay.com/photo/2022/12/26/11/44/squirrel-7678830__340.jpg'} width="100%" height='100%' />
      <div className='pop-up-container'>
        <div className='pop-up-component'>
          <div className='pop-up-header'>header</div>
          <div className='pop-up-body'>body</div>
          <div className='pop-up-footer'>footer</div>
        </div>
      </div>
    </>
  )
}

export default ResponsivePopUp