import React from 'react'
import picture from '../../images/profilePicture.jpeg'

export default function Introduction() {
  return (
    <div>
      <h1>Hi I'm Michael Hyun</h1>
      <p>This is a short description</p>
      <img src={picture} alt=''/>
    </div>
    

  )
}
