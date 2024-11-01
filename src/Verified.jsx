import React from 'react'

function Verified() {
  return (
    <>
    <div className=' container-fluid  d-flex justify-content-between my-5 verify p-5'>
        <h1>Lets Suppliers <span className=' border rounded-bottom border-warning border-4 border-top-0 border-start-0 border-end-0 '>Finds You</span></h1>
        <button className='my-2 mx-3 border-0 text-white rounded px-3 text-bold verified'>Get verified</button>
    </div>
    <div className='container text-center'>
        <h1 className='my-3'>How it Works?</h1>
        <p className='content text-center container my-4 '> Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with 
        potential buyers, and build successful business relationships, sharing valuable feedback</p>
    </div>
    </>
  )
}

export default Verified