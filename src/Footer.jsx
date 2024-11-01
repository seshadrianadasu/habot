import React from 'react'
import habot from './assets/images/habot-logo.jpg'
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <>
    <footer className='container footer p-4 '>
        <div className=' d-flex border-1 border border-secondary p-4 border-start-0 border-end-0 align-items-center justify-content-evenly'>
            <div className='d-flex d'>
            <div className=' w-25 text-center '>
            <img className='w-50 habot' src={habot} alt="habot" />
            <p>&copy Singhania</p>
            </div>
            <div className='d-flex gap-3'>
                <ul className=' flex-column'>
                    <li><strong>Company</strong></li>
                    <li>About</li>
                    <li>Faq</li>
                </ul>
                <ul className=' flex-column'>
                    <li><strong>Terms</strong></li>
                    <li> Data privacy</li>
                    <li>Terms</li>
                    <li>Accessibility</li>
                </ul>
                <ul className=' flex-column'>
                    <li><strong>Related</strong></li>
                    <li>Find Buyer</li>
                    <li>Feedback</li>
                </ul>
            </div>
            </div>
            <div className='icon'>
                <FaInstagram className='mx-2'/>
                <SlSocialTwitter className='mx-2'/>
                <CiFacebook className='mx-2'/>
                <FaYoutube className='mx-2'/>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer