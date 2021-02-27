import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './styles/style.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'

import Textiles from './components/Textiles'
import Textile from './components/Textile'

import DecorativeArts from './components/DecorativeArts'
import DecArt from './components/DecArt'

import Books from './components/Books'
import Book from './components/Book'


const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/project-2" component={Home}/>
      
      <Route exact path="/project-2/textiles" component={Textiles}/>
      <Route exact path="/project-2/textile/:id" component={Textile}/>

      <Route exact path="/project-2/decorativearts" component={DecorativeArts}/>
      <Route exact path="/project-2/decart/:id" component={DecArt}/>
      
      <Route exact path="/project-2/books" component={Books}/>
      <Route exact path="/project-2/book/:id" component={Book}/>

    </Switch>
    <Footer />
  </BrowserRouter>
)

export default App