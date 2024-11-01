import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function Article() {
  return (
    <>
    <div className='container mt-5 d-flex justify-content-between block '>
        <div className='w-50 '>
            <h1 className=''><strong>Ready to dive into <span className='color '>HABOT?</span></strong></h1>
            <p>Signing up with HABOT opens the door to a world of new opportunities 
                and potential for business growth. Gain access to a vibrant community 
                of like-minded individuals, unlock valuable resources, and take the first 
                step towards realizing your entrepreneurial dreams.</p>
            <button className='btn btn-success button' >Sign up Today! <FaArrowRightLong/></button>
        </div>
        <div className=''>
            <div className='d-flex justify-content-between border-design'>
                <p className='border border-2 border-warning abudhabi '>Abu Dhabi</p>
                <p className='border border-2 border-warning dubai'>Dubai</p>
            </div>
            <div className='d-flex justify-content-between border-design'>
                <p className='border border-2 border-warning sharjah'>Sharjah & Ajman</p>
                <p className='border border-2 border-warning fujairah'> Fujairah</p>
            </div>
            <div className='d-flex justify-content-between border-design gap-2'>
            <p className='border border-2 border-warning ras'> Ras Al Khaimah</p>
            <p className='border border-2 border-warning umm'> Umm Al Quwain</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Article