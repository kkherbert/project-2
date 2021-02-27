import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import { Link } from 'react-router-dom'


export default function Books() {

  const [books, updateBooks] = useState([])
  const [loading, updateLoading] = useState(true)
  const [filter, updateFilter] = useState('All')
  const _ = require('lodash')

  useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Manuscript'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Calligraphy'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Book%20Binding')
    ])
      .then(axios.spread((...responses) => {
        const booksArray = responses[0].data.data.concat(responses[1].data.data, responses[2].data.data)
        const shuffledBooksArray = _.shuffle(booksArray)
        updateBooks(shuffledBooksArray)
        updateLoading(false)
      }))
  }, [])

  //guard condition 
  if (loading) {
    return <ClipLoader loading={loading} size={35} color="#a0522d" />
  }

  return <div className="card-container-container">
    {/* FILTER */}

    <div className="top-of-page-copy-links">
      <h3 id="individual-navs-copy">Explore all items in this collection or click below to filter by object type!</h3>

      <ul className="books-nav">
        <li className="books-nav-links" onClick={(event) => updateFilter('manuscript')} value={'manuscript'}>Manuscript
        </li>
        <li className="books-nav-links" onClick={(event) => updateFilter('calligraphy')} value={'calligraphy'}>Calligraphy
        </li>
      </ul>
    </div>
    
    <div className="card-container">
      {books.filter(item => {
        // console.log(item)
        return (filter === 'All' || filter === item.type.toLowerCase())
      })
        .map(item => {

          return <Link key={item.id} to={`/project-2/book/${item.id}`}>

            <div className="card" key={item.id}>
              <h3 className="title">{item.title}</h3>
              <img className="image" src={item.images.web.url} alt={item.title} width='200' />
              <h3 className="date">Date: {item.creation_date}</h3>
              <h3 className="culture">Culture: {item.culture}</h3>
            </div>
          </Link>

        })}

    </div>
  </div>

}