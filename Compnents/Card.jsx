import React,{useState} from 'react'
import {IoLogOutOutline} from "react-icons/io5";
import {HiDotsHorizontal} from "react-icons/hi";
import {GoVerified} from "react-icons/go";
import img1 from "../Images/user1.jpg"
import img2 from "../Images/user2.jpg"
import img3 from "../Images/user3.jpg"
import img4 from "../Images/user4.jpg"
import Option from './Option';


const Card = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='CardWrapper'>
         
         <div className="cardHeader">
          <img src={img1} alt="User Image" id='userImage' />
  
        <div className="userDetails">
         <div className="user">

         <p id='userName'>Bhanu Mergoju</p>
          <GoVerified id='verify'/>
         </div>
         <p id='userDesc'>Machine Learning Engineer</p>
        </div>
        
        <div className='options'>
        <HiDotsHorizontal className='dots' onClick={()=>{setIsOpen(!isOpen)}}/>  
        </div>
         
        {isOpen && <Option/>}

         </div>

         <div className="cardIntro">
           Electric power lies and other distribution infrastructure also have a footprint
         </div>

         <div className="cardDescription">
          Electricity transmission lines and the distribution infstracture that carries electricity from power plants to customers also have environmental effect.Most
         </div>


         <div className="bottom">
             <div className="bottomLeft">
             <button className='liked'>Liked &ensp; 201</button>
             <button className='views'>Views &ensp; 12K</button>
             </div>

             <div className="bottomRight">
              <IoLogOutOutline className='logout'/>
             </div>
        
         </div>
    </div>
  )
}

export default Card