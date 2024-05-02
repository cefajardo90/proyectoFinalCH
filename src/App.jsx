import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Carousel from './components/Carousel'
import GridHome from './components/GridHome'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetail from './components/ItemDetail'

function App() {
    return (
        <BrowserRouter>
          <NavBar/>
          <Carousel/>
          <Routes>
            <Route path={"/"} element={<ItemListContainer/>}/>
            <Route path={"/categoria/:id"} element={<ItemListContainer/>}/>
            <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          </Routes>
          <GridHome/>
          <Footer/>
        </BrowserRouter>
      )
}

export default App
