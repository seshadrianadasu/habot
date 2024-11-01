import React from 'react'
import { Link } from 'react-router-dom'
import { BsBriefcaseFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
function Body() {
  return (
    <>
    <div className='burj'>
       <h1>Are you a Supplier?</h1>
       <h2>Explore Matching opportunities.</h2>
       <div className=' input-flex'>
            <div className='briefcase'>
            <BsBriefcaseFill className=''/><input type="text" placeholder='Search your required service here' />
            </div>
            <div className='location'>
                <FaLocationDot/><input type="text" placeholder='Search your location here' /></div>
            <button className='border bg-success border-success px-3 py-2 rounded text-white'>search</button>
       </div>
       <p><strong>Are you a buyer?</strong> <Link className='link'>Click here if you are looking to post a requrement</Link></p>
    </div>
    </>
  )
}

export default Body