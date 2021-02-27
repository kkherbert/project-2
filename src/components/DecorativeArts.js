import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
import { Link } from 'react-router-dom'


export default function DecArts() {

  const [decArts, updateDecArts] = useState([])
  const [loading, updateLoading] = useState(true)
  const [filter, updateFilter] = useState('All')
  const _ = require('lodash')


  useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Glass'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Metalwork'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Sculpture'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Ceramic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Arms%20and%20Armor'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&type=Jewelry')
    ])
      .then(axios.spread((...responses) => {
        const decArtsArray = responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data)
        const shuffledArray = _.shuffle(decArtsArray)
        updateDecArts(shuffledArray)
        updateLoading(false)

      }))
  }, [])

  //guard condition 
  if (loading) {
    return <ClipLoader loading={loading} size={35} color="#a0522d" />
  }

  return <div className="card-container-container">

    <div className="top-of-page-copy-links">

      <h3 id="individual-navs-copy">Explore all items in this collection or click below to filter by object type!</h3>

      <ul className="darts-nav">
        <li className="darts-nav-links" onClick={(event) => updateFilter('ceramic')} value={'ceramic'}>Ceramic</li>
        <li className="darts-nav-links" onClick={(event) => updateFilter('glass')} value={'glass'}>Glass</li>
        <li className="darts-nav-links" onClick={(event) => updateFilter('jewelry')} value={'jewelry'}>Jewelry</li>
        <li className="darts-nav-links" onClick={(event) => updateFilter('metalwork')} value={'metalwork'}>Metalwork</li>
        <li className="darts-nav-links" onClick={(event) => updateFilter('sculpture')} value={'sculpture'}>Sculpture</li>
      </ul>
    </div>


    <div className="card-container">
      {decArts.filter(item => {
        return (filter === 'All' || filter === item.type.toLowerCase())
      }).map(item => {
        return <Link key={item.id} to={`/project-2/decart/${item.id}`}>

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
