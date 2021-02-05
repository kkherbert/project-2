import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  console.log(window.location.pathname)
  const url = window.location.pathname

  return <div className="nav-bar">
    <header>
      <h1>Islamic Art in the Cleveland Museum of Art</h1>
    </header>
    <ul className="nav-bar-links">
      <li>
        <Link to={'/project-2/'}>Home</Link>
      </li>
      <li>
        <Link to={'/project-2/textiles'}>Textiles</Link>
      </li>
      <li>
        <Link to={url === '/project-2/decorativearts' ? '/project-2/decorativeart2' : '/project-2/decorativearts'  }>Decorative Arts</Link>
      </li>
      <li>
        <Link to={url === '/project-2/books' ? '/project-2/book2' : '/project-2/books'  }>Books</Link>
      </li>
    </ul>

  </div>
}