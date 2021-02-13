import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
// import { shuffle } from 'lodash'

export default function Textiles() {
  const [textiles, updateTextiles] = useState([])
  const [loading, updateLoading] = useState(true)
  const [filter, updateFilter] = useState('All')
  const _ = require('lodash')

  
  useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Carpet&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Embroidery&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Garment&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Lace&q=Islamic '),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Sampler&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Textile&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Velvet&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Forgery&q=Islamic'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?has_image=1&collection=T-Islamic&type=Spindle%20Whorl&q=Islamic')
    ])
      .then(axios.spread((...responses) => {
        const textilesArray = responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data, responses[6].data.data, responses[7].data.data, responses[8].data.data)
        const shuffledArray = _.shuffle(textilesArray)
        updateTextiles(shuffledArray)
        // updateTextiles(responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data, responses[6].data.data, responses[7].data.data, responses[8].data.data))
        updateLoading(false)
        console.log(updateTextiles, 'textilessss')
      }))
  }, [])
  
  
  console.log(textiles[1])
  //guard condition
  if (loading) {
    return <ClipLoader loading={loading} size={35} color="#A0522D" />
  }
  
  
  return <div className="card-container-container">
    <div className="top-of-page-copy-links">
      <h3 id="individual-navs-copy">Explore all items in this collection or click below to filter by country!</h3>
      <ul className="textiles-nav">
        <li className="textiles-nav-links" onClick={(event) => updateFilter('carpet')} value={'carpet'}>Carpets</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('embroidery')} value={'embroidery'}>Embroidery</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('forgery')} value={'forgery'}>Forgeries</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('garment')} value={'garment'}>Garments</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('lace')} value={'lace'}>Lace</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('sampler')} value={'sampler'}>Samplers</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('spindle whorl')} value={'spindle whorl'}>Spindle Whorls</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('textile')} value={'textile'}>Textiles</li>
        <li className="textiles-nav-links" onClick={(event) => updateFilter('velvet')} value={'velvet'}>Velvet</li>
      </ul>
    </div>
    
    
    <div className="card-container">
      {textiles.filter(item => {
        return (filter === 'All' || filter === item.type.toLowerCase())
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




