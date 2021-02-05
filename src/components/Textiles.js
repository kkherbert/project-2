import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'


export default function Textiles() {

  const [textiles, updateTextiles] = useState([])
  const [loading, updateLoading] = useState(true)
  const [filter, updateFilter] = useState('All')

  useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Syria'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Iran'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Iraq'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=turkey'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Egypt'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Spain')
    ])
      .then(axios.spread((...responses) => {
        const textilesArray = responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data)
        updateTextiles(textilesArray)
        updateLoading(false)
      }))
  }, [])

  console.log(textiles[1])

  //guard condition 
  if (loading) {
    
    return <ClipLoader loading={loading} size={35} color="#a0522d" />
  }
  
  return <div className="card-container-container">

    <div className="top-of-page-copy-links">
      <h3 id="individual-navs-copy">Explore all items in this collection or click below to filter by country!</h3>

      <ul className="textiles-nav">
        <li className="textiles-nav-links" onClick={(event) => updateFilter('Egypt')} value={'Egypt'}>Egypt</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('Iran')} value={'Iran'}>Iran</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('Iraq')} value={'Iraq'}>Iraq</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('Spain')} value={'Spain'}>Spain</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('Syria')} value={'Syria'}>Syria</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('Turkey')} value={'Turkey'}>Turkey</li>
      </ul>
    </div>



    <div className="card-container">



      {textiles.filter(item => {
        return (filter === 'All' || item.culture.includes(filter))
      }).map(item => {

        if (item.fun_fact === null && item.wall_description === null || item.wall_description === null) {
          return <div className="card" key={item.id}>
            <h3 className="title">{item.title}</h3>
            <img className="image" src={item.images.web.url} alt={item.title} width='200' />
            <h3 className="date">Date: {item.creation_date}</h3>
            <h3 className="culture">Culture: {item.culture}</h3>
          </div>
        } else if (item.fun_fact === null) {
          return <div className="card" key={item.id}>
            <h3 className="title">{item.title}</h3>
            <img className="image" src={item.images.web.url} alt={item.title} width='200' />
            <h3 className="date">Date: {item.creation_date}</h3>
            <h3 className="culture">Culture: {item.culture}</h3>
            <h4 className="description">Description: {item.wall_description}</h4>
          </div>
        } else {
          return <div className="ecard" key={item.id}>
            <h3 className="title">{item.title}</h3>
            <img className="image" src={item.images.web.url} alt={item.title} width='200' />
            <h3 className="date">Date: {item.creation_date}</h3>
            <h3 className="culture">Culture: {item.culture}</h3>
            <h4 className="description">Description: {item.wall_description}</h4>
            <h4 className="fun-fact">Fun Fact: {item.fun_fact}</h4>
          </div>
        }


      })}
    </div>
  </div>
}




