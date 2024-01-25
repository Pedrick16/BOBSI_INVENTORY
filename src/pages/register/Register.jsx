import React from 'react'
import './register.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Register = () => {

  useEffect(() => {
    ScrollReveal().reveal('._register-container', {
      duration: 2000,
      easing: 'ease-in-out',
      reset: true, // This resets the properties when scrolling down
      origin: '', // You can change the origin as needed
      distance: '10px', // You can adjust the distance
      opacity: 0,
      afterReveal: (domEl) => {
        // Optional: You can add custom logic after the reveal animation
        console.log('Element revealed:', domEl);
      },
    },);
  }, [])
  return (
    <div className='__register'>
        <div className="__image-overlay flex items-center justify-center  ">

          <div className="_register-container h-[auto] w-[400px] bg-white p-[40px] grid grid-rows-[1fr,auto,1fr] rounded-[5px]">
              <div className="mb-[50px] text-center text-2xl font-bold  ">BOBSI INVENTORY</div>
              <div className=" flex flex-col" >
              <span className='mb-[20px] font-medium'>Register</span>
                      <label htmlFor="">Username</label>
                      <input type="text" placeholder='Enter your username' className='__input  h-[40px] p-5'/>
              
                      <label htmlFor="" className='mt-3'>Password</label>
                      <input type="password" placeholder='Enter your Password'  className='__input  h-[40px] p-5' />

                      <label htmlFor="" className='mt-3'>Confirm Password</label>
                      <input type="password" placeholder='Re-type your password ' className=' __input h-[40px] p-5' />
                    
                      <input type="submit" value="Register"  className='mt-3 h-[40px] bg-green-500'/>
             
              </div>
              <div className="mt-[20px] text-center text-[13px]">
                  <span>Already have an account?</span><br />
                  <Link to="/login" className='text-[blue] ps-1'>Login</Link>
              </div>
          </div>

        </div>

    </div>
  )
}

export default Register