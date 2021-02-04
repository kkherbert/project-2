import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'


export default function DecArts() {

  const [decArts, updateDecArts] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    const bigArray = []
    axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Ceramic')
      .then(({ data }) => {
        updateDecArts(data.data)
        updateLoading(false)
        bigArray.push(data.data)
      })

      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&type=Jewelry')
      .then(({ data }) => {
        updateDecArts(data.data)
        updateLoading(false)
        bigArray.push(data.data)
      })

      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Arms%20and%20Armor')
      .then(({ data }) => {
        updateDecArts(data.data)
        updateLoading(false)
        bigArray.push(data.data)
      })

      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Sculpture')
      .then(({ data }) => {
        updateDecArts(data.data)
        updateLoading(false)
        bigArray.push(data.data)
      })

      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Metalwork')
      .then(({ data }) => {
        updateDecArts(data.data)
        updateLoading(false)
        bigArray.push(data.data)
      })

      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Glass')
      .then(({ data }) => {
        updateDecArts(data.data)
        updateLoading(false)
        bigArray.push(data.data)
      })
      
  }, [])

  //   useEffect(() => {
  //   axios.all([
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Glass'),
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Metalwork'), 
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Sculpture'),
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Ceramic'), 
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Arms%20and%20Armor'),
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&type=Jewelry')
  //   ])
  //     .then(({ data }) => {
  //       updateDecArts(data.data)
  //       updateLoading(false)
  //     })
  // }, [])

  console.log(decArts[1])

  //guard condition 
  if (loading) {
    // return <GridLoader loading={loading} size={15} margin={2}/>
    return <ClipLoader loading={loading} size={35} />
  }
  // .slice(0, 25)
  return <div>
    {decArts.map(item => {
      // { console.log(item.title) }

      if (item.fun_fact === null && item.wall_description === null || item.wall_description === null) {
        return <div className="dec-arts-card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
        </div>
      } else if (item.fun_fact === null) {
        return <div className="dec-arts-card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
          <h4 className="description">Description: {item.wall_description}</h4>
        </div>
      } else {
        return <div className="dec-arts-card" key={item.id}>
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




