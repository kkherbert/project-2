import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Textiles from './components/Textiles'
import DecorativeArts from './components/DecorativeArts'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/project-2" component={Home}/>
      <Route path="/project-2/textiles" component={Textiles}/>
      <Route path="/project-2/decorativearts" component={DecorativeArts}/>
    </Switch>
  </BrowserRouter>
)

// const Home = () => {
//   return <h1>Hello world</h1>
// }

export default App