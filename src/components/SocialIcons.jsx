import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function SocialIcons() {
  return (
    <div className="social-icons-container">
      <div className="github social-icon">
        <FaGithub />
      </div>
      <div className="youtube social-icon">
        <FaLinkedinIn />
      </div>
    </div>
  )
}
