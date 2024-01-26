import React from 'react'

import './navbar.scss'


import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


import { CiLogout } from "react-icons/ci";




const Navbar = () => {


  

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
        navigate('/')
      }
    
    })

    
  }


  
  

  


  return (
    <div className='__navbar grid grid-cols-[1fr] items-center ps-[10px] pe-[40px] '>
     
      <div className="__logout flex justify-end ">
        <CiLogout onClick={handleLogout} size={30} className='cursor-pointer' />
      </div>
     
      </div>
  )
}

export default Navbar