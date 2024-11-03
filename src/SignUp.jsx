import React,{useState} from 'react'

function Login() {
  const [Islogin,setlogin]=useState(false)

  const toggleForm=()=>{
    setlogin(!Islogin);
  };
  return (
    <>
      <div className=' bg-dark text-white p-5 '>
       <h1> <strong>{Islogin?"Login Here":"SignUp Here"}</strong></h1>
        <form className='flex-column d-flex  justify-content-center w-50'>
          {!Islogin &&(
          <div className='mb-3 w-100'>
            <label className='mb-2' htmlFor="firstname">Enter First name:</label>
            <input className='ms-2 w-100 rounded' type="text" />
          </div >
          )}
          {!Islogin &&(
          <div className='mb-3 w-100'>
            <label className='mb-2' htmlFor="lastname">Enter Last name:</label> 
            <input className='ms-2 w-100 rounded' type="text" />
          </div>
          )}
          <div className='mb-3 w-100'>
            <label className='mb-2' htmlFor="email">Enter Email:</label> 
            <input className='ms-2 rounded w-100' type="email" />
          </div>
          <div className='mb-3 w-100 '>
            <label className='mb-2' htmlFor="password">Enter password:</label> 
            <input className='ms-2 rounded w-100' type="password" />
          </div>
          {!Islogin &&(
          <div className='mb-3 w-100'>
            <label className='mb-2' htmlFor="text">ReEnter password :</label> 
            <input className='ms-2 rounded w-100' type="password" />
          </div>
          )}
          <button type="submit" className='btn btn-primary w-25'>{Islogin ? "Login":"SignUp"}</button>
        </form>
      </div>
    </>
    
  )
}

export default Login