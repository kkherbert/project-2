import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return <div className="home-body">
    <main className="main-home">

      <div className="homepage">
        <div id="explore-copy">
          <h2>Explore the Islamic Art Collection of the Cleveland Museum of Art!</h2>
        </div>

        <div id="category-copy">
          <h3>Click a category below to get started:</h3>
        </div>

        <div className="homepage-links">


          <Link
            to={'/project-2/Textiles'}
          >
            <div className="textiles-home">
              <h2 id="home-copy">Textiles</h2>
            </div>
          </Link>

          <Link
            to={'/project-2/DecorativeArts'}
          >
            <div className="darts-home">
              <h2 id="home-copy">Decorative Arts</h2>
            </div>
          </Link>

          <Link
            to={'/project-2/Books'}
          >
            <div className="books-home">
              <h2 id="home-copy">Books</h2>
            </div>
          </Link>
        </div>
      </div>

    </main >

  </div>
}

