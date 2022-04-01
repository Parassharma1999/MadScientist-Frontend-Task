import React from 'react'
import {BsBoxArrowInDown,BsLink} from 'react-icons/bs';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {BiUserMinus} from 'react-icons/bi';

const Option = () => {
  return (
    <div className='Options'>
        <div  id='first'> <BsBoxArrowInDown/> <span className='items'> Save</span></div>
        <div id='second'><BsLink/> <span className='items'> Unfollow</span></div>
        <div id='fourth'><AiOutlineCloseCircle/> <span className='items'> Block</span></div>
        <div id='third'><BiUserMinus/> <span className='items'>Report</span> </div>
    </div>
  )
}

export default Option