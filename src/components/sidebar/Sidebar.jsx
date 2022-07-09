import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

export default function Sidebar() {
  return (
    <div>
      <div className='sidebar-section'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className='social-section'>
        <IconButton>
          <Facebook />
        </IconButton>
        <IconButton>
          <Instagram />
        </IconButton>
        <IconButton>
          <GitHub />
        </IconButton>
        <IconButton>
          <LinkedIn />
        </IconButton>
      </div>
    </div>
  )
}