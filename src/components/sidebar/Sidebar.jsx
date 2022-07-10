import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-section'>
        <button>Home</button>
        <button>About</button>
        <button>Resume</button>
        <button>Portfolio</button>
        <button>Contact</button>
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