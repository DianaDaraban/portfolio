import React from 'react'

import { HashLink as Link } from 'react-router-hash-link'

export default function Navigation() {
  return (
    <div className="navigation-container">
      <ul className="navigation">
        <li>
          <Link smooth to="./#portfolio">
            Portfolio
          </Link>
        </li>
        <li>
          <Link smooth to="./#experience">
            Work Experience
          </Link>
        </li>
        <li>
          <Link smooth to="./#studies">
            My Education
          </Link>
        </li>
        <li>
          <Link smooth to="./#contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}
