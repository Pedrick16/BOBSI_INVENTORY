import React from 'react'
import './sidebar.scss'
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { BiSolidReport } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";

import { FiMenu } from "react-icons/fi";
import { useState } from 'react';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleIconClick = () => {
    setIsMenuOpen((prev) => !prev);
    console.log(isMenuOpen);
  };

  

  return (
    <div className={`__sidebar ${isMenuOpen ? "__show" : "__hide"} w-[300px] h-screen bg-slate-200 grid grid-rows-[auto,auto,auto,1fr]`}>
         
          {isMenuOpen ? (<FiMenu size={50}  className='__icon cursor-pointer  text-slate-400'  onClick={handleIconClick}/> ) : (
            < IoClose  size={50}  className='__icon cursor-pointer text-slate-400' onClick={handleIconClick} />
          )}

        
       <div className='px-[20px] pt-[20px] '>
       <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=334,fit=crop,q=95/m2WbBNyqvMInW7G9/bobsi-sample-web-YZ9naB97xzfo3OOg.jpg"  alt="" />
       </div>
       <div className="flex   justify-center pt-2 " >
            <span className='text-center text-1xl font-bold text-[#050505]'>BOBSI INTRANET</span>
       </div>
       
      
            <ul className=' __menu-container text-center mt-5'>
                <Link to='/dashboard' className='_li h-[60px] border-t border-r border-l border-b border-solid shadow-sm md:shadow-md flex  flex-row items-center ps-4'>
                  <RxDashboard /><span className='ps-5'>Dashboard</span>
                </Link>
                <Link to='/dashboard' className='_li h-[60px]  shadow-xl  flex  flex-row items-center ps-4'>
                 
                  <FaUserAlt /><span className='ps-5'> User Accounts</span>
            
                </Link>
                <Link to='/dashboard' className='_li h-[60px]  shadow-xl  flex  flex-row items-center ps-4'>
                  
                  <TbBuildingBroadcastTower /><span className='ps-5'> Broadband Plans</span>
                </Link>
              
                <Link to='/dashboard' className='_li h-[60px]   shadow-xl flex  items-center ps-4'>
              
                  <BiSolidReport /><span  className='ps-5'>Network</span>
               
                </Link>
                <li className='_li h-[60px] shadow-xl  flex  flex-row items-center ps-4'>
               
               <GrMoney />
               <span className='ps-5'> Finance</span >
               
             </li>
             <Link to='/dashboard' className='_li h-[60px] shadow-xl  flex  flex-row items-center ps-4'>
               
               <GrMoney />
               <span className='ps-5'>Security</span >
               
             </Link>

                <Link to='/dashboard' className='_li h-[60px]   shadow-xl flex  items-center ps-4'>
              
                 <BiSolidReport /><span  className='ps-5'>Reported Issues</span>
                  
                </Link>
                <Link to="/dashboard" className='_li h-[60px] shadow-xl  flex items-center flex-row ps-4 '>
           
                  <VscSettings /><span  className='ps-5'>Settings</span>
                
                  
                </Link>

            </ul>
     
    </div>
  )
}

export default Sidebar