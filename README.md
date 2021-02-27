# Islamic Art in the Cleveland Museum of Art API
### General Assembly Project 2

My second web development project for the GA Software Engineering Immersive course was pair-coded with my classmate <a href="https://github.com/bojanacodes" target="_blank" rel="noreferrer">Bojana</a>. We built a React page that integrated functionality from a third-party API (in this case, the <a href="https://www.clevelandart.org/" target="_blank" rel="noreferrer">Cleveland Museum of Art</a>.

### Brief: Build a React application that consumes a public API
### Timeframe: 48 hours

## To get started:
1. Access the source code via the Code button
2. In your Terminal, nrun `npm i` on the root level to install dependencies
3. In your Terminal, run `npm run serve` to run the program in your local environment

## Technologies used
### Front-end
* React
* JavaScript (ES6)
* HTML5
* CSS3
* Axios
* react-router-dom
* react-spinners
* lodash

### API
* The Cleveland Museum of Art <a href="https://openaccess-api.clevelandart.org/" target="_blank" rel="noreferrer">API</a>

### Dev tools:
* VS Code
* Insomnia
* npm
* Git
* GitHub
* Google Chrome dev tools
* Google Fonts

## Process
Both being history enthusiasts, Bojana and I decided to choose an API from the cultural field. After scouring the web and dissecting datasets with Insomnia REST Client, we settled to use API from the Cleveland Museum of Art to highlight their fantastic Islamic Art Collection (and even more fantastic usage of a controlled vocabulary, which made data curation a breeze). This dataset lists the 295 objects in the Museum's Islamic Art Department, as well as a curated portion of the Islamic Textile collection from which we pulled 624 of the 690 objects (excluding more modern art mimicking Islamic Art). After analyzing the dataset, we decided to divide our page into three main sections: Books, Decorative Arts and Textiles

To initiate the project, we then: 
* Created the app's wireframes
* Planned and wrote out the pseudo code 
* Created the necessary components in React: Home, Navbar, Footer, the three subject pages (Books, Decorative Arts and Textiles) and the individual object pages

### Styling
Wanting to flex our CSS muscles, we opted not to use a Framework and instead utilized Flexbox and color palettes sourced from the <a href="https://collection.cooperhewitt.org/objects/18346271/colors/" target="_blank" rel="noreferrer">Cooper Hewitt, Smithsonian Design Museum</a>, which was an excellent resource we discovered while researching APIs.

## Development
### Home
![Screen Shot 2021-02-27 at 8 09 02 AM (2)](https://user-images.githubusercontent.com/73107893/109378469-2048b300-78d3-11eb-8acc-7b195ed989a7.png)
The homepage is purposefully simple: the title, navigation links to the three components, the briefest of explanations and links disguised as pictures as a second route to the three components. The images are pulled directly from the API and we added a linear gradient to make the text pop more. 

```  
linear-gradient(rgba(160, 82, 45, 0.5), rgba(160, 82, 45, 0.5)),
url('https://openaccess-cdn.clevelandart.org/1926.533/1926.533_web.jpg'); 
```


### Component Pages

![Screen Shot 2021-02-27 at 9 20 41 AM (2)](https://user-images.githubusercontent.com/73107893/109381871-25aafb00-78dd-11eb-9e18-5d0f2155fb46.png)

All three component pages followed similar logic. 

First things first, we had to set up by importing React, useEffect, useState, axios and react-spinners to be used later in the program. We then set our function and our variables in order to be able to pull and filter the correct data, to shuffle the results, and to have a nice loader while the page is loading: 
```
const [books, updateBooks] = useState([])
const [loading, updateLoading] = useState(true)
const [filter, updateFilter] = useState('All') 
const _ = require('lodash')
```
  
Next, we employed useEffect to initiate the lifecycle. We used Axios to fetch the data from multiple endpoints, we spread those responses into arrays and then concatenated those data sets together into the `booksArray`. We then used `lodash` logic so that the results would be shuffled each time the page is refreshed, we updated the state of the `updateBooks` variable to be the shuffled results, and we alerted our guard condition that, when this is completed, the ClipLoader can disappear. For example, on the Books page:
```
useEffect(() => {
    axios.all([
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Manuscript'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Calligraphy'),
      axios.get('https://openaccess-api.clevelandart.org/api/artworks/?department=Islamic%20Art&has_image=1&type=Book%20Binding')
    ])
      .then(axios.spread((...responses) => {
        const booksArray = responses[0].data.data.concat(responses[1].data.data, responses[2].data.data)
        const shuffledBooksArray = _.shuffle(booksArray)
        updateBooks(shuffledBooksArray)
        updateLoading(false)
      }))
  }, [])
  
   if (loading) {
    return <ClipLoader loading={loading} size={35} color="#a0522d" />
  }
 ```
 
After we had pulled our dataset together, it was important to be able to filter it. We decided to style the filter as we styled the navigation bar so that all filter options were clearly identifiable. 
```
<ul className="books-nav">
        <li className="books-nav-links" onClick={(event) => updateFilter('manuscript')} value={'manuscript'}>Manuscript
        </li>
        <li className="books-nav-links" onClick={(event) => updateFilter('calligraphy')} value={'calligraphy'}>Calligraphy
        </li>
      </ul>
    </div>
```
    
Continuing on, it came time to map out all of thise data on the page. We mapped over the `books` variable and returned individual cards with data from a certain object on it, a card which is also a clickable link that will take you to that item's specific page.
The information we returned on the card was that information made available by the API which we felt relevant: the title, an image, the date it was created and the culture it was from.
```
<div className="card-container">
      {books.filter(item => {
        // console.log(item)
        return (filter === 'All' || filter === item.type.toLowerCase())
      })
        .map(item => {
          return <Link key={item.id} to={`/project-2/book/${item.id}`}>
            <div className="card" key={item.id}>
              <h3 className="title">{item.title}</h3>
              <img className="image" src={item.images.web.url} alt={item.title} width='200' />
              <h3 className="date">Date: {item.creation_date}</h3>
              <h3 className="culture">Culture: {item.culture}</h3>
            </div>
          </Link>

        })}

    </div>
  </div>
  ```
  
  We repeated this exact logic on the Decorative Arts and Textiles pages. 
  
  ### Individual pages
  ![Screen Shot 2021-02-27 at 9 34 22 AM](https://user-images.githubusercontent.com/73107893/109382159-0614d200-78df-11eb-9c67-e9b596ddc40e.png)

  
  The individual object pages followed a very similar logic: we managed the state of the variables in order to pull specific information from a specific object with a specific id. We did return additional information, as there was more space: the credit line (or provenance of the object), a much longer description of the item and, my personal favorite, a fun fact. 
  
  ## Takeaways 
  # Challenges
  * Finding the right API was difficult, as Bojana and I had a very clear idea of what we wanted to do from the beginning: work with museum data. We scoured the Internet and were really hoping to use the Smithsonian API, but we found that the Cleveland API was better organized, offered more dynamic information and was easier to manipulate.
  *  We realized, with about two hours to go, that, for example, if you are on the Books page and you click through the filters and then click on `Books` in the main nav bar, it did not repopulate the page with the entire dataset. We tried a few very hacky fixes, but then decided to dedicate the rest of our allotted time to more pressing issues
  * This project overall was a bit of a challenge, as it was my first time building a React app. But a good challenge! One that you grow from
  
  # Wins
  * Teamwork! Bojana and I made an honest effort to work as a team and it paid off: we had excellent communication, we listened to each others ideas, we offered constructive criticism and suggestions. 
  * The possibilities that learning how to find my own API, manipulate and return the data I want and splash that information on a webpage are endless and I am thrilled that I have that skillset
  
  # Future features
  * Mobile responsiveness
  * Search bar on both the three main pages and across the whole app
  * Map that shows where each item in the collection is from
  * Pagination 
  * Different ways to highlight the collection: 
    - A generator that returns `fun facts` from the dataset
    - A generator that returns a random object
    - Highlighting curiosities from the collection, such as forgeries or spindle whorls
    - Country highlights
  
  # Key learnings 
  * How to code as part of a team
  * How to choose the right API and how to manipulate it to get the information you want from it 







