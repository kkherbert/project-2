import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return <body className="home-body">
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
              {/* <img className="homepage-image" src="https://openaccess-cdn.clevelandart.org/1926.533/1926.533_web.jpg" alt="Royal Carpet with Silk and Metal Threat, 1600-1625" /> */}
              <h2 id="home-copy">Textiles</h2>
            </div>
          </Link>

          <Link
            to={'/project-2/DecorativeArts'}
          >
            <div className="darts-home">
              <h2 id="home-copy">Decorative Arts</h2>
              {/* <img className="homepage-image" src="https://openaccess-cdn.clevelandart.org/1962.23/1962.23_web.jpg" alt="Prayer Niche (Mihrab), early 1600s" /> */}
            </div>
          </Link>

          <Link
            to={'/project-2/Books'}
          >
            <div className="books-home">
              {/* <img className="homepage-image" src="https://openaccess-cdn.clevelandart.org/1924.746.2.a/1924.746.2.a_web.jpg" alt="Qur'an Manuscript Folio, 1500s" /> */}
              <h2 id="home-copy">Books</h2>
            </div>
          </Link>
        </div>
      </div>

    </main >

  </body>
}

