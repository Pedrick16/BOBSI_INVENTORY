import React, { useEffect } from 'react'
import Navbar from '../../partials/navbar/Navbar'
import Sidebar from '../../partials/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import ScrollReveal from 'scrollreveal'

const HomeLayout = () => {
  useEffect(() => {
    ScrollReveal().reveal('._sidebar', {
      duration: 2000,
      easing: 'ease-in-out',
      reset: true, // This resets the properties when scrolling down
      origin: 'right', // You can change the origin as needed
      distance: '70px', // You can adjust the distance
      opacity: 0,
      afterReveal: (domEl) => {
        // Optional: You can add custom logic after the reveal animation
        console.log('Element revealed:', domEl);
      },
    });

    ScrollReveal().reveal('._top', {
      duration: 2000,
      easing: 'ease-in-out',
      reset: true, // This resets the properties when scrolling down
      origin: 'top', // You can change the origin as needed
      distance: '70px', // You can adjust the distance
      opacity: 0,
      afterReveal: (domEl) => {
        // Optional: You can add custom logic after the reveal animation
        console.log('Element revealed:', domEl);
      },
    });


  }, [])


  return (
    <div  className='h-screen w-screen grid grid-cols-[300px,1fr]'>
        <div className='_sidebar'>
        <Sidebar />
        </div>
       
     
        <div className='grid grid-rows-[60px,1fr] _top'>
           
            <Navbar/>

          
            <div className="">
              <Outlet/>

            </div>
        </div>

    </div>
  )
}

export default HomeLayout