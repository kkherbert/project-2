import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ClipLoader from 'react-spinners/ClipLoader'
// import ReactPaginate from 'react-paginate'

// // // stuff from medium
// const [offset, updateOffset] = useState(0)
// const [perPage] = useState(10)
// // const [pageCount, updatePageCount] = useState(14)

// // //bojana making stuff up
// const [booksToDisplay, updateBooksToDisplay] = useState([])
const [books, updateBooks] = useState([])
const [loading, updateLoading] = useState(true)

export default function Books() {

  useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Manuscript'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Calligraphy'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Book%20Binding')
    ])
      .then(axios.spread((...responses) => {
        updateBooks(responses[0].data.data.concat(responses[1].data.data, responses[2].data.data).slice(0, 10))
        updateLoading(false)
      }))
  }, [])

  // useEffect(() => {
  //   const slicedBooks = books.slice(offset, (offset + perPage))
  //   const mappedBooks = slicedBooks.map(item => {
  //     return <div key={item.id}>
  //       <h2>{item.title}</h2>
  //     </div>
  //     // updatePageCount(Math.ceil(books.length / perPage))
  //   })
  //   updateBooksToDisplay(mappedBooks)
  // }, [offset])


  // const handlePageClick = (event) => {
  //   const selectedPage = event.selected
  //   updateOffset(selectedPage)
  //   // console.log('heyyyyyy')
  // }

  //guard condition 
  if (loading) {
    return <ClipLoader loading={loading} size={35} />
  }

  return <div>
    {books.map(item => {

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

// function PageNumbers() {
//   return (
//     <div className="pages">
//       {booksToDisplay}
//       <ReactPaginate
//         previousLabel={'previous'}
//         nextLabel={'next'}
//         pageCount={pageCount}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageClick}
//       />
//     </div>
//   )
// }

// useEffect(() => {
//   axios.all([
//     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Manuscript'),
//     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Calligraphy'),
//     axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Book%20Binding')
//   ])
//     .then(axios.spread((...responses) => {
//       updateBooks(responses[0].data.data.concat(responses[1].data.data, responses[2].data.data))
//       updateLoading(false)
//     }))
// }, [])

// function showBooks(props) {

// }

// import ReactPaginate from 'react-paginate'

// const handlePageClick = (event) => {
//   const selectedPage = event.selected
//   updateOffset(selectedPage)
//   // console.log('heyyyyyy')
// }

// // console.log(offset)

// console.log(books[1], 'wooooooo')
//   console.log(booksToDisplay[1], 'weeeeeee')

//   useEffect(() => {
//     const slicedBooks = books.slice(offset, (offset + perPage))
//     const mappedBooks = slicedBooks.map(item => {
//       return <div key={item.id}>
//         <h2>{item.title}</h2>
//       </div>
//       // updatePageCount(Math.ceil(books.length / perPage))
//     })
//     updateBooksToDisplay(mappedBooks)

//   }, [offset])


// return (
//   <div className="pages">
//     {booksToDisplay}
//     <ReactPaginate
//       previousLabel={'previous'}
//       nextLabel={'next'}
//       pageCount={pageCount}
//       marginPagesDisplayed={2}
//       pageRangeDisplayed={5}
//       onPageChange={handlePageClick}
//     />
//   </div>
// )


//stuff from medium
// const [offset, updateOffset] = useState(0)
// const [perPage] = useState(10)
// const [pageCount, updatePageCount] = useState(14)

// //bojana making stuff up
// const [booksToDisplay, updateBooksToDisplay] = useState([])


// ! Change return so that there are no ifs and loops in JSX
/*return <div>
{books.map(item => {

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

</div> */

// function noFunFactOrWall() {
//   return <div className="card" key={item.id}>
//   <h3 className="title">{item.title}</h3>
//   <img className="image" src={item.images.web.url} alt={item.title} width='200' />
//   <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
// </div>
// }

// function noFunFactOnly() {
//   return <div className="card" key={item.id}>
//         <h3 className="title">{item.title}</h3>
//         <img className="image" src={item.images.web.url} alt={item.title} width='200' />
//         <h3 className="date">Date: {item.creation_date} | Culture: {item.culture}</h3>
//         <h4 className="description">Description: {item.wall_description}</h4>
//       </div>
// }

// function AllFieldsPresentAndCorrect() {
//   <div className="card" key={item.id}>
//         <h3 className="title">{item.title}</h3>
//         <img className="image" src={item.images.web.url} alt={item.title} width='200' />
//         <h4 className="date-culture">Date: {item.creation_date} | Culture: {item.culture}</h4>
//         <h4 className="description">Description: {item.wall_description}</h4>
//         <h4 className="fun-fact">Fun Fact: {item.fun_fact}</h4>
//       </div>
// }



