// import React, { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'



export default function Textiles() {

const [textiles, updateTextiles] = useState([])

  useEffect(() => {
    axios.get('')
      .then(({ data }) => {
        updateTextiles(data.results)
      })
  }, [])

  
  return <div>
    <h2>textilessssss</h2>
  </div>
}



// import { Link } from 'react-router-dom'

// const [characters, updateCharacters] = useState([])

// useEffect(() => {
//   axios.get('https://finalspaceapi.com/api/v0/character/')
//     .then(({ data }) => {
//       updateCharacters(data)
//     })
// }, [])


// {characters.map(character => {
//   // ? Not passing any props to my link
//   // return <Link key={character.id} to={`/character/${character.id}`}>
//   // ? Passing through information to my link.
//   return <Link key={character.id} to={{
//     pathname: `/character/${character.id}`,
//     state: {
//       name: character.name
//     }
//   }}>
//     <div >
//       {character.name}
//       <img src={character.img_url} alt={character.name}/>
//     </div>
//   </Link>
// })}