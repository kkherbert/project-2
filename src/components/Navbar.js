import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <div>
    
    <ul>
      <li>
        <Link to={'/project-2/'}>Home</Link>
      </li>
      <li>
        <Link to={'/project-2/textiles'}>Textiles</Link>
      </li>
      <li>
        <Link to={'/project-2/decorativearts'}>Decorative Arts</Link>
      </li>
      <li>
        <Link to={'/project-2/books'}>Books</Link>
      </li>
    </ul>
  </div>
}