import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'


export default function Textiles() {

  const [textiles, updateTextiles] = useState([])
  const [loading, updateLoading] = useState(true)

  // useEffect(() => {
  //   axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Iran')
  //     .then(({ data }) => {
  //       updateTextiles(data.data)
  //       updateLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Syria'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Iran'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Iraq'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=turkey'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=egypt'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=spain')
    ])
      .then(axios.spread((...responses) => {
        // updateTextiles(responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data).slice(0,10))
        updateTextiles(responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data))
        updateLoading(false)
      }))
  }, [])

  console.log(textiles[1])

  //guard condition 
  if (loading) {
    // return <GridLoader loading={loading} size={15} margin={2}/>
    return <ClipLoader loading={loading} size={35} color="#a0522d"/>
  }
  // .slice(0, 25)
  return <div className="card-container">
    {textiles.map(item => {
      // { console.log(item.title) }

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
}




