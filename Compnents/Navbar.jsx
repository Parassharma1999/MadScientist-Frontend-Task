import React from 'react'
import {CgPlayListAdd} from "react-icons/cg";
import {VscSearch} from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className='navbarContainer'>
        <div className='left'>

            <div className='left1'>
            <button className='write'>Write ups</button>
            <button className='forums'>Forums</button>
            </div>
            
            <div className="left2">
                <button className='new'>New <CgPlayListAdd id='add'/></button>
            </div>

        </div>


        <div className="middle"></div>

        <div className='right'>
            <div className='search'><VscSearch id='SearchIcon'/></div>
        </div>
    </div>
  )
}

export default Navbar