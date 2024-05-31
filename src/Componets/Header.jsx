import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';

import LoginButton from '../Auth/LoginButton';
import LogoutButton from '../Auth/LogoutButton';
import logo from './../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from "react-icons/hi2";
import { HiPlus,HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function logOut(){
  localStorage.clear();
  window.location.href ="http://localhost:5173/";
}
function Header() {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    const token = localStorage.getItem('token');
    const [toggle,setToggle]=useState(false);
    const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

    const menu=[
        {   
            name:'HOME',
            link:'/',
            icon:HiHome
        },
        {   
            name:'SEARCH',
            link:'explore',
            icon:HiMagnifyingGlass
        },
        {   
            name:'Play LIST',
            link:'/Playlist',
            icon:HiPlus
        },
        {   
          name:'public Play LIST',
          link:'/public-play-list',
          icon:HiPlus
      },
       
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
      
        <div className='hidden md:flex gap-8'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} Icon={item.icon} link={item.link} />
        ))}
        </div>
          <div className='flex md:hidden gap-5'>
        {menu.map((item,index)=>index<3&&(
            <HeaderItem name={''} Icon={item.icon} />
        ))}
         <div className='md:hidden' onClick={()=>setToggle(!toggle)}>       
            <HeaderItem name={''} Icon={HiDotsVertical} />
           {toggle? <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
            {menu.map((item,index)=>index>2&&(
            <HeaderItem name={item.name} Icon={item.icon} />
            ))}
            </div>:null}
            </div> 
        </div>
        </div>
        

        {!token ? (
       <>
       <Link to={`/login`}> login</Link>
       
       </>
) : (
    <div>
   <button onClick={logOut}>logout</button>

{
  showPopup && (
    <div className="fixed z-40 top-20 right-40 flex w-20 h-30 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 max-w-xs">
        <img src={user.picture} className="w-14 h-14 mx-auto rounded-full mb-1"/>
        <p className="text-lg font-bold text-center mb-1">{user.name}</p>
        <p className="text-sm text-gray-600 text-center mb-2">{user.email}</p>
        <LogoutButton/>
      </div>
    </div>
  )
}
   
    </div>
    
)}
      
       
  
    </div>
  )
}

export default Header