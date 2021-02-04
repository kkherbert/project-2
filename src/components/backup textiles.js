import React, { useEffect, useState } from 'react'
import axios from 'axios'



export default function Textiles() {

  const [characters, updateCharacters] = useState([])

  useEffect(() => {
    axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Textiles&has_image=1&q=Iran')
      .then(({ data }) => {
        updateCharacters(data.data)
      })
  }, [])


  console.log(characters[1])

  //guard condition 
  // if (!textiles.id) {
  //   return <h2>Hello I am your guard condition</h2>
  // }

  return <div>
    <div>
      {/* <h2>{textiles[0].tombstone}</h2> */}
      <h2>Hello</h2>
    </div>
  </div>
}



// import { Link } from 'react-router-dom'




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