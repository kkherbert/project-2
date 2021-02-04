import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'


export default function Books() {

  const [books, updateBooks] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Manuscript')
      .then(({ data }) => {
        updateBooks(data.data)
        updateLoading(false)
      })
  }, [])


  // useEffect(() => {
  //   axios.all([
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Manuscript'),
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&type=Calligraphy'),
  //     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Book%20Binding')
  //   ])
  //     .then(({ data }) => {
  //       updateBooks(data.data)
  //       updateLoading(false)
  //     })
  // }, [])

  console.log(books[1])

  //guard condition 
  if (loading) {
    return <ClipLoader loading={loading} size={35} />
  }

  return <div>
    {books.map(item => {

      if (item.fun_fact === null && item.wall_description === null || item.wall_description === null) {
        return <div className="books-card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
        </div>
      } else if (item.fun_fact === null) {
        return <div className="books-card" key={item.id}>
          <h3 className="title">{item.title}</h3>
          <img className="image" src={item.images.web.url} alt={item.title} width='200' />
          <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
          <h4 className="description">Description: {item.wall_description}</h4>
        </div>
      } else {
        return <div className="books-card" key={item.id}>
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