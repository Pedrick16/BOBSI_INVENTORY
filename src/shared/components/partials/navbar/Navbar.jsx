import React from 'react'
import { FiMenu } from "react-icons/fi";
import './navbar.scss'
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { CiLogout } from "react-icons/ci";




const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleIconClick = () => {
    setIsMenuOpen((prev) => !prev);
    console.log(isMenuOpen);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
   

    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Logout Successfully!'
        )
        navigate('/login')
      }
    
    })

    
  }


  
  

  


  return (
    <div className='__navbar bg-white grid grid-cols-[auto,1fr] items-center ps-[10px] pe-[40px]'>
      <div >
      {isMenuOpen ? (  <FiMenu size={30} className=' text-slate-400'  onClick={handleIconClick}/> ) : (
          <IoClose size={30} className='  text-slate-400' onClick={handleIconClick} />
      )}
        
      </div>
      <div className="flex justify-end ">
        <CiLogout onClick={handleLogout} size={30} className='cursor-pointer' />
      </div>
     
      </div>
  )
}

export default Navbar