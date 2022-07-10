import React from 'react'
import picture from '../../images/profilePicture.jpeg'
import "./introduction.scss"

export default function Introduction() {
  return (
    <div className='introduction'>
      <div className='title'>
        <h1>Hi I'm Michael Hyun</h1>
        <p>This is a short description</p>
      </div>
      <img src={picture} alt=''/>
    </div>
  )
}
