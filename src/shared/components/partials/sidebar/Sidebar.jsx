import React from 'react'
import './sidebar.scss'
import { RxDashboard } from "react-icons/rx";
import { FaUserAlt } from "react-icons/fa";
import { TbBuildingBroadcastTower } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { BiSolidReport } from "react-icons/bi";
import { VscSettings } from "react-icons/vsc";


const Sidebar = () => {
  return (
    <div className='__sidebar w-[300px] h-screen    bg-slate-200 grid grid-rows-[auto,auto,1fr]'>
      
       <div className='px-[20px] pt-[20px] '>
       <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=334,fit=crop,q=95/m2WbBNyqvMInW7G9/bobsi-sample-web-YZ9naB97xzfo3OOg.jpg"  alt="" />
       </div>
       <div className="flex  justify-center pt-2 ">
            <span className='text-center text-1xl font-bold text-[#050505]'>BOBSI INVENTORY</span>
       </div>
       
      
            <ul className=' __menu-container text-center mt-5'>
                <li className='_li h-[60px] border-t border-r border-l border-b border-solid shadow-sm md:shadow-md flex  flex-row items-center ps-4'>
                  <RxDashboard /><span className='ps-5'>Dashboard</span>
                </li>
                <li className='_li h-[60px]  shadow-xl  flex  flex-row items-center ps-4'>
                 
                  <FaUserAlt /><span className='ps-5'> User Accounts</span>
            
                </li>
                <li className='_li h-[60px]  shadow-xl  flex  flex-row items-center ps-4'>
                  
                  <TbBuildingBroadcastTower /><span className='ps-5'> Broadband Plans</span>
                </li>
              
                <li className='_li h-[60px]   shadow-xl flex  items-center ps-4'>
              
                  <BiSolidReport /><span  className='ps-5'>Network</span>
               
                </li>
                <li className='_li h-[60px] shadow-xl  flex  flex-row items-center ps-4'>
               
               <GrMoney />
               <span className='ps-5'> Finance</span >
               
             </li>
             <li className='_li h-[60px] shadow-xl  flex  flex-row items-center ps-4'>
               
               <GrMoney />
               <span className='ps-5'>Security</span >
               
             </li>

                <li className='_li h-[60px]   shadow-xl flex  items-center ps-4'>
              
                 <BiSolidReport /><span  className='ps-5'>Reported Issues</span>
                  
                </li>
                <li className='_li h-[60px] shadow-xl  flex items-center flex-row ps-4 '>
           
                  <VscSettings /><span  className='ps-5'>Settings</span>
                
                  
                </li>

            </ul>
     
    </div>
  )
}

export default Sidebar