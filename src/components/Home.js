import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return <body>
    <header>
      <h1>Islamic Art in the Cleveland Museum of Art</h1>
    </header>

    <main>
      <h2>Explore the Islamic Art Collection of the Cleveland Museum of Art!</h2>
      <h3>Click a topic below to get started</h3>

      <Link
        to={'/project-2/Textiles'}
      >
        <div className="textiles-home">
          <img src="https://openaccess-cdn.clevelandart.org/1926.533/1926.533_web.jpg" alt="Royal Carpet with Silk and Metal Threat, 1600-1625" />
          <h2>Textiles</h2>
        </div>
      </Link>

      <Link
        to={'/project-2/DecorativeArts'}
      >
        <div className="darts-home">
          <img src="https://openaccess-cdn.clevelandart.org/1962.23/1962.23_web.jpg" alt="Prayer Niche (Mihrab), early 1600s" />
          <h2>Decorative Arts</h2>
        </div>
      </Link>

      <Link
        to={'/project-2/Books'}
      >
        <div className="books-home">
          <img src="https://openaccess-cdn.clevelandart.org/1924.746.2.a/1924.746.2.a_web.jpg" alt="Qur'an Manuscript Folio, 1500s" />
          <h2>Books</h2>
        </div>
      </Link>


    </main>

    <footer>
      {/* SOME SORT OF CITATION */}
    </footer>
  </body >
}

