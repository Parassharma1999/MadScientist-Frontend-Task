import React from 'react'
import Card from './Card'
import Navbar from "./Navbar"
const MainPage = () => {
  return (
    <div className='mainContainer'>
    <div id="Navbar">
       <Navbar/>
    </div>

    <div className="textarea">
      CHECK OUT MORE WRITE-UPS~~
    </div>
     <div className="cardSpace">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
     </div>
    </div>
  )
}

export default MainPage