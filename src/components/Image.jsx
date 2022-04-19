import React from 'react'
import "../css/Image.css"
import logo from '../imgs/loggo5.png'



const Image = (pic) => {
  return (
    <div>
        <img src={logo} alt="Profile Image" className='img'/>
    </div>
  )
}

export default Image