import React from 'react'
import { Facebook, Frown, Mail } from 'lucide-react'
import { Phone } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Twitter } from 'lucide-react'
import { Instagram } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Youtube } from 'lucide-react'

const Footer = () => {
  return (
    
    <div>
    {/* <div className='w-100% h-130 bg-blue-950 flex'>
      
      <div className='w-[29%] h-100%  px-30 text-white'>
        <div className=' flex'>
        <img className='rounded-2xl w-15 h-15 top-14 relative' src="https://tse1.mm.bing.net/th/id/OIP.21MzzRaarZsvPBBw5sr2SAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
        <p className='top-17 relative text-2xl px-4 font-bold '>ETEC CENTER</p>
        </div>
        <div className='relative top-20 text-gray-400'><p>Lorem ipsum dolor, sit amet consectetur  praesentium animi! Consequatur incidunt dicta numquam blanditiis</p>
        <span className='flex relative top-6'><Mail /><p className='px-4'>hafish123@gmail.com</p></span>
        <span className='flex relative top-9'><Phone /><p className='px-4'>+(855) 961234567</p></span>
        <span className='flex relative top-12'><MapPin /><p className='px-4'>Phnom Penh , Cambodia</p></span>
        </div>
      </div>
      <div className='w-[21%] h-100%  '>
        <p className='top-14 relative text-2xl font-bold text-white'>Quick Link</p>
        <div className='top-23 relative text-xl text-gray-400'>
        <p className='relative top-1'>About Us</p>
        <p className='relative top-3'>Courses</p>
        <p className='relative top-5'>Instructors</p>
        <p className='relative top-7'>Pricing</p>
        <p className='relative top-9'>Blog</p>
        <p className='relative top-11'>Contact</p>
        </div>
      </div>
      <div className='w-[25%] h-100%'>
        <p className='top-14 relative text-2xl font-bold text-white'>Categories</p>
        <div className='top-23 relative text-xl text-gray-400'>
        <p className='relative top-1'>Web Development</p>
        <p className='relative top-3'>Mobile Development</p>
        <p className='relative top-5'>Data Science</p>
        <p className='relative top-7'>Design</p>
        <p className='relative top-9'>Business</p>
        <p className='relative top-11'>Marketing</p>
      </div>
      </div>
      <div className='w-[25%] h-100% '>
        <p className='top-14 relative text-2xl font-bold text-white'>Support</p>
        <div className='top-23 relative text-xl text-gray-400'>
        <p className='relative top-1'>Help Center</p>
        <p className='relative top-3'>Teams of Service</p>
        <p className='relative top-5'>Privacy Policy</p>
        <p className='relative top-7'>Refund Policy</p>
        <p className='relative top-9'>FAQ</p>
        <p className='relative top-11'>Career</p>
      </div>
      <div className='relative top-43 text-white'>
        <p className='text-xl font-bold'>Subscribe to Newsletter</p>
        <div className='relative top-4'>
        <input className='p-2 bg-blue-900 rounded-md outline-none' type="email" placeholder='Your email' />
        <button className='p-2 bg-blue-600 left-5 relative rounded-md'>Subscribe</button>
        </div>
      </div>
      </div>
    </div>
    <div className='border-1 border-gray-700'></div>
    <div className='w-100% h-25 bg-blue-950 flex'>
      <div className='w-[34%] h-100% text-center relative top-8 text-gray-400'>@ 2025 LearnHub.All rights reserved.</div>
      <div className='w-[33%] h-100% flex relative py-8 text-white gap-10 text-2xl'>
      <span className='bg-blue-900 px-4 rounded-4xl py-1'>  <Facebook /> </span>
       <span className='bg-blue-900 px-4 rounded-4xl py-1'> <Twitter /></span>
       <span className='bg-blue-900 px-4 rounded-4xl py-1'> <Instagram /></span>
         <span className='bg-blue-900 px-4 rounded-4xl py-1'><Linkedin /></span>
       <span className='bg-blue-900 px-4 rounded-4xl py-1'> <Youtube /></span>
      </div>
      <div className='w-[33%] h-100% py-8 text-xl gap-5 flex left-10 relative text-gray-400'>
        <span>We Accept:</span>
        <div className='text-white gap-9 flex relative left-4'>
        <span className='bg-blue-900 px-2'>VISA</span>
        <span className='bg-blue-900 px-2'>MC</span>
        <span className='bg-blue-900 px-2'>AMEX</span>
        </div>
      </div>
    </div> */}


<div className='bg-blue-950 text-white'>
  <div className='w-full md:w-4/5 grid p-5 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  
  <div className=' gap-0.5 items-center '>
    <div className='flex items-center'>
    <img className='w-15 rounded-xl' src="https://tse1.mm.bing.net/th/id/OIP.21MzzRaarZsvPBBw5sr2SAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" />
    <h1 className='font-bold text-2xl text-white mx-3'>ETEC CENTER</h1></div>
    <p className='mt-2 text-gray-400'> Empowering learners worldwide with high-quality online courses.Learn new skills, advance your career, and achieve your goals.</p>
    <ul className='mt-5 text-gray-400 '>
      <li className='flex items-center gap-1.5 my-3'>
        <Mail className='text-lg text-blue-600'/>
        support@gmail.com
        </li>
         <li className='flex items-center gap-1.5 my-3'>
        <Phone className='text-lg text-blue-600'/>
        +1 (555) 123-4567
        </li>
         <li className='flex items-center gap-1.5 '>
        <MapPin className='text-lg text-blue-600'/>
        123 Learning St Education City
        </li>
    </ul>
  </div>
  {/* Mobile */}
  <div className='mt-5 sm:block md:hidden'>
    <h1 className='font-bold text-xl'>Quick Links</h1>
    <ul className='flex flex-col gap-1.5 mt-3 text-gray-400'>
      <li>About</li>
      <li>Courses</li>
      <li>Instructos</li>
      <li>Pricing</li>
      <li>Contact</li>
      
    </ul>
  </div>
  

  {/* Laptop */}
  <div className='mx-9 hidden md:block'>
    <h1 className='font-bold text-xl'>Quick Links</h1>
    <ul className='flex flex-col gap-1.5 mt-3 text-gray-400'>
      <li>About</li>
      <li>Courses</li>
      <li>Instructos</li>
      <li>Pricing</li>
      <li>Contact</li>
      
    </ul>
  </div>
  <div className=''>
    <h1 className='font-bold text-xl'>Categoires</h1>
    <ul className='flex flex-col gap-1.5 mt-3  text-gray-400 '>
      <li>Web Development</li>
      <li>Mobile Development</li>
      <li>Data Science</li>
      <li>Design</li>
      <li>Business</li>
      <li>Marketing</li>
    </ul>
  </div>
  <div className=''>
    <h1 className='font-bold text-xl'>Support</h1>
    <ul className='flex flex-col gap-1.5 mt-3 text-gray-400'>
      <li>Help Center</li>
      <li>Terms of Service</li>
      <li>Privacy Policy</li>
      <li>Refund Policy</li>
      <li>FAQ</li>
      <li>Career</li>
    </ul>
    <h1 className='mt-8 font-bold'>Subscribe to Newsletter</h1>
    
    {/* Mobile */}
    <div className='gap-2.5 mt-3 sm:block md:hidden'>
     <input type="email" placeholder='Your email' className='rounded-sm bg-blue-900 py-1 px-21 focus:outline' />
      <button className='bg-blue-700 mt-2 rounded-sm px-35 py-1 hover:cursor-pointer '>Subscribe</button>
    </div>

    {/* Laptop */}
    <div className=' gap-2.5 mt-3 hidden md:block'>
      <input type="email" placeholder='Your email' className=' bg-blue-900 py-2 px-2 focus:outline' />
       <button className='bg-blue-700 mx-2  px-3.5 py-2 hover:cursor-pointer font-bold'>Subscribe</button>
    </div>
  </div>
  </div>

 <div>
  <div className='w-full mt-8 border-1 border-gray-700'></div>
 {/* Mobile */}

   <div className='sm:block md:hidden w-full md:w-4/5 grid p-5  m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  <div className='mt-1 text-center  '>
   @ 2025 LearnHub.All rights reserved.
  </div>
  <div >
    <ul className='flex gap-4 items-center mt-5 mx-10'>
      <li className=' bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
        <Facebook size={17}/>
        </li>
      <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
        <Twitter size={17}/>
        </li>
        <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
          <Instagram size={17}/>
        </li>
      <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
       <Linkedin size={17}/>
      </li>
    <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
     <Youtube size={17}/>
    </li>
    </ul>
  </div>
  <div>
    
  <ul className='flex mx-10 mt-5 m-2 gap-3 text-gray-400 '>
    <li >We </li>
    <li >Accept:</li>
    <li className='bg-blue-900 text-white  px-2'>VISA</li>
    <li className='bg-blue-900  text-white px-2'>MC</li>
    <li className='bg-blue-900  text-white px-2'>AMEX</li>
  </ul>
    
  </div>
  </div>

   {/* Laptop */}
  <div className='w-full md:w-4/5 grid p-5 hidden md:flex m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
  <div className='mt-2 text-gray-400 '>
   @ 2025 LearnHub.All rights reserved.
  </div>
  <div className='mx-50'>
    <ul className='flex gap-4 items-center '>
      <li className=' bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
        <Facebook />
        </li>
      <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
        <Twitter/>
        </li>
        <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
          <Instagram/>
        </li>
      <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
       <Linkedin/>
      </li>
    <li className='bg-gray-700 p-3 rounded-full hover:cursor-pointer hover:bg-blue-700 transition-all duration-200'>
     <Youtube/>
    </li>
    </ul>
  </div>
  <div>
    
  <ul className='flex  m-2 gap-3 text-gray-400 '>
    <li >We </li>
    <li >Accept:</li>
    <li className='bg-blue-900 text-white  px-2'>VISA</li>
    <li className='bg-blue-900  text-white px-2'>MC</li>
    <li className='bg-blue-900  text-white px-2'>AMEX</li>
  </ul>
    
  </div>
  </div>

 </div>
</div>





    </div>
  )
}

export default Footer