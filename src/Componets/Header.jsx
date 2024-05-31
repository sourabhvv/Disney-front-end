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
function Header() {
    const { user, isAuthenticated, isLoading } = useAuth0();
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
            name:'WATCH LIST',
            link:'/',
            icon:HiPlus
        },
        {   
            name:'ORIGINALS',
            link:'/',
            icon:HiStar
        },
        {   
            name:'MOVIES',
            link:'/',
            icon:HiPlayCircle
        },
        {   
            name:'SERIES',
            link:'/',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex  gap-8 items-center'>
        <img src={logo} className='w-[80px] 
        md:w-[115px] object-cover' />
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
        

        {!isAuthenticated ? (
    <LoginButton />
) : (
    <div>
    <img src={user.picture} 
    className='w-[40px] rounded-full'
    onClick={togglePopup}
    />

    {
    showPopup && (
            <div className="popup">
            <img src={user.picture} className='w-[100px] rounded-full'/>
            <p>Username: {user.name}</p>
            <p>Username: {user.email}</p>
           <LogoutButton/>
          </div> 
        )
    }
   
    </div>
    
)}
      
       
  
    </div>
  )
}

export default Header