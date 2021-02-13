import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'


export default function DecArt({ match, location }) {
  const id = match.params.id

  const [item, updateItem] = useState({})
  const [loading, updateLoading] = useState(true)


  console.log(location)

  useEffect(() => {
    axios.get(`https://openaccess-api.clevelandart.org/api/artworks/${id}`)
      .then(({ data }) => {
        updateItem(data)
        updateLoading(false)
        console.log(data)
      })
  }, [])

  if (loading) {
    { console.log('Hello I am loading') }
    return <ClipLoader loading={loading} size={35} color="#a0522d" />
  }

  // FIX!!!!!!!


  return <div className="individual-items-container">

    <h3 className="title">{item.data.title}</h3>
    <div className="individual-items">

      <div className="individual-items-image">
        <img className="individual-image" src={item.data.images.web.url} alt={item.title} width='200' />
        <small className="creditline">{item.data.creditline}</small>
      </div>

      <div className="individual-items-copy">
        <h3 className="date">{item.data.creation_date}</h3>
        <h3 className="culture">{item.data.culture}</h3>
        <h4 className="description">{item.data.wall_description}</h4>
        <h4 className="fun-fact">{item.data.fun_fact}</h4>
        
      </div>

    </div>
  </div>
}