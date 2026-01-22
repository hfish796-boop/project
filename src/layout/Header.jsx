import React, { useState } from 'react'
import {Form, House} from 'lucide-react'
import { User } from 'lucide-react'
import { Settings } from 'lucide-react'
import { Mail } from 'lucide-react'
import { BadgeAlert } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  return (



    // <div className='w-100% h-20 bg-red-500 flex shadow-md'>
    //   <div className='w-[50%] h-100% bg-gray-100 px-60 flex '>
      // <img className='rounded-2xl w-15 h-15 top-2.5 relative' src="https://tse1.mm.bing.net/th/id/OIP.21MzzRaarZsvPBBw5sr2SAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
    //   </div>
    //   <div className='w-[50%] h-100% bg-gray-100 flex gap-10 '>
    //   <span className='flex relative top-6 text-2xl gap-3 hover:text-blue-600 cursor-pointer'>
    //   <House />
    //   <p className='relative bottom-1'>Home</p>
    //   </span>
    //   <span className='flex relative top-6 text-2xl gap-3 hover:text-blue-600 cursor-pointer'>
    //   <User />
    //   <p className='relative bottom-1'>About</p></span>
    //   <span className='flex relative top-6 text-2xl gap-3 hover:text-blue-600 cursor-pointer'>
    //     <Settings />
    //    <p className='relative bottom-1'>Service</p> </span>
    //   <span className='flex relative top-6 text-2xl gap-3 hover:text-blue-600 cursor-pointer'>
    //     <Mail />
    //     <p className='relative bottom-1'>Contact</p></span>
    //   <span className='flex relative top-6 text-2xl gap-3 hover:text-blue-600 cursor-pointer'>
    //     <BadgeAlert />
    //    <p className='relative bottom-1'>Info</p> </span>
    //   </div>

    // </div>


<>
    <nav className='shadow-md'>
     <div className='w-full md:w-4/5 px-3.5 right-4 relative  m-auto flex justify-between'>
     <div className='w-16'>
      <img className='w-full h-full mx-8' src="https://tse1.mm.bing.net/th/id/OIP.21MzzRaarZsvPBBw5sr2SAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
     </div>
     <div className='md:hidden h-16 flex items-center'>
      <span><Menu className='text-2xl ' onClick={() => setMenuOpen(!menuOpen)}/>
      
      </span>
     </div>

     <div className={`absolute bg-gray-50  h-60 top-16 w-full duration-150 ease-in-out transition-all 
    shadow-2xl ${menuOpen ? "top-0" : "right-full md:hidden"}`}>
      <ul className='px-8 py-2.5 mt-2'> 
        {/* <li className='font-bold text-4xl text-center text-blue-400'>
          Menu
        </li> */}
        <li>
         <Link to={"/"} className='py-1.5 hover:bg-blue-50 duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <House/> Home
         </Link> 
        </li>
        <li > 
          <Link to={"/about"} className= 'py-1.5 hover:bg-blue-50 duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <User/>About
          </Link>
          </li>
        <li >
          <Link to={"/service"} className='py-1.5 hover:bg-blue-50 duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <Settings/>Service
          </Link>
           </li>
        <li >
          <Link to={"/contact"} className='py-1.5 hover:bg-blue-50 duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <Mail/>Contact
          </Link>
           </li>
        <li > 
          <Link to={"/info"} className='py-1.5 hover:bg-blue-50 duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <BadgeAlert/>Info
          </Link>
          </li>
      </ul>
     </div>
     

        <div className='hidden lg:block'>
          <ul className='px-3 py-2.5 flex gap-10'> 
        
        <li>
         <Link to={"/"} className='py-1.5  duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <House/> Home
         </Link> 
        </li>
        <li > 
          <Link to={"/about"} className= 'py-1.5  duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <User/>About
          </Link>
          </li>
        <li >
          <Link to={"/service"} className='py-1.5  duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <Settings/>Service
          </Link>
           </li>
        <li >
          <Link to={"/contact"} className='py-1.5  duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <Mail/>Contact
          </Link>
           </li>
        <li > 
          <Link to={"/info"} className='py-1.5  duration-150 transition-all rounded-md flex gap-2.5 hover:text-blue-600 hover:cursor-pointer'>
          <BadgeAlert/>Info
          </Link>
          </li>
      </ul>
        </div>


     </div>
      
    </nav>
</>
  )
}

export default Header