import React from 'react'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Dashboad = () => {
  useEffect(() => {
    ScrollReveal().reveal('._dashboard', {
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

    


  }, [])
  return (
    <div className='_dashboard h-[100%] bg-slate-50 gap-10 grid grid-cols-3 grid-rows-3 p-10 mt-[1px] '>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>User Account </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Broadband Plans </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Network </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Finance </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Security </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Reported Issues </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Settings </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Lorem </span> <span className='font-bold text-[25px]'></span></Link>
      <Link to='/sample' className="bg-white  shadow-xl flex flex-col items-center justify-center  cursor-pointer" ><span>Lorem </span> <span className='font-bold text-[25px]'></span></Link>
     


    </div>
  )
}

export default Dashboad