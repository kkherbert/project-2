import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'


export default function DecArts() {

  const [decArts, updateDecArts] = useState([])
  const [loading, updateLoading] = useState(true)

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
        updateDecArts(responses[0].data.data.concat(responses[1].data.data, responses[2].data.data, responses[3].data.data, responses[4].data.data, responses[5].data.data).slice(0,10))
        updateLoading(false)
        console.log(updateDecArts, 'hiiiiii')

      }))
  }, [])

  console.log(updateDecArts, 'yayyyyyyy')


  //guard condition 
  if (loading) {
    return <ClipLoader loading={loading} size={35} color="#a0522d"/>
  }
  // .slice(0, 25)
  return <div className="card-container">
    {decArts.map(item => {
      if (item.fun_fact === null && item.wall_description === null || item.wall_description === null) {
        return <div className="card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
        </div>
      } else if (item.fun_fact === null) {
        return <div className="card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
          <h4 className="description">Description: {item.wall_description}</h4>
        </div>
      } else {
        return <div className="card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h4 className="date-culture">Date: {item.creation_date} | Culture: {item.culture}</h4>
          <h4 className="description">Description: {item.wall_description}</h4>
          <h4 className="fun-fact">Fun Fact: {item.fun_fact}</h4>
        </div>
      }
    })}

  </div>
}







