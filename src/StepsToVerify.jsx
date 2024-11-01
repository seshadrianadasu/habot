import React from 'react'
import user from './assets/images/user-with-plus-sign.png'
import document from './assets/images/document.png'
import paper from './assets/images/paper.png'
import resume from './assets/images/resume.png'
import share from './assets/images/sharing.png'
import hand from './assets/images/handshake.png'

function StepsToVerify() {
  return (
    <>
    <section className='container steps'>
    <div className='d-flex text-center '>
        <div className='even-color h5-4'>
            <img src={user} alt="user" />
            <h5>Select Your Role and Sign Up</h5>
        </div>
        <div className='h5-2'>
            <img src={document} alt="" />
            <h5>Buyers Post Your Requirements</h5>   
        </div>
        <div className='even-color h5-2'>
            <img src={paper} alt="" />
            <h5>Review, Select, and  Contact the Best Suppliers</h5>
        </div>
    </div>
    <div className='d-flex text-center '>
         <div className='h5-2'>
            <img src={resume} alt="" />
            <h5> Suppliers Complete your profile and get notified for opportunities</h5>
        </div>
        <div className='even-color h5-3'>
            <img src={share} alt="" />
            <h5>Contact to Buyers and Share your Quote for the service</h5>   
        </div>
        <div className='h5-3'>
            <img src={hand} alt="" />
            <h5> Both the Parties can Connect and Make Business Leave a Feedback</h5>
        </div>
    </div>
    </section>
    </>
  )
}

export default StepsToVerify