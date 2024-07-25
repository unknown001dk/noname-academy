import React from 'react'
import { CiMenuFries } from "react-icons/ci";

function Header() {
  return (
    <header>
      <h3>NoName Academy</h3>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/course">Course</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        {/* responsive icos design */}
      </nav>
      
    </header>
  )
}

export default Header