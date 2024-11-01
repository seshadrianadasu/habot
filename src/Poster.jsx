import React from 'react'
import img from './assets/images/habotimg.jpeg'
import youtube from './assets/images/youtube.png'
import { FaRegCircleCheck } from "react-icons/fa6";

function Poster() {
  return (
    <>
    <div className='container-fluid  bg-color d-flex my-5 '>
        <img src={img} className='img-width container' alt="img" />
        <img src={youtube} alt="youtube"  className='youtube '/>
        <div className='d-flex list'>
            <ul className='d-block   pe-3'>
            <h3 className='pb-3 border rounded-bottom border-warning border-4 border-top-0 border-start-0 border-end-0'>Buyer</h3>
                <li className='pb-3'> <FaRegCircleCheck /> Post your requirements.</li>
                <li className='pb-3'> <FaRegCircleCheck /> Sit back for multiple suppliers to contact you.</li>
                <li className='pb-3'><FaRegCircleCheck /> Choose among the suppliers based on the
                ratings and reviews</li>
            </ul>
            
            <ul className='d-block  pe-3'>
            <h3 className='pb-3 border rounded-bottom border-warning border-4 border-top-0 border-start-0 border-end-0'>Supplier</h3>
                <li className='none pb-3'><FaRegCircleCheck /> Complete your profile and get verified.</li>
                <li className='text-center pb-3'><FaRegCircleCheck /> Select service tags for relevent opportunities.</li>
                <li><FaRegCircleCheck /> Reach out to buyers and expand your business</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Poster