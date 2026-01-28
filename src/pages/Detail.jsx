import React from 'react'
import { useParams } from 'react-router-dom'
import { courses } from '../data/data'
import { Star, User,Clock4,BookOpen, SearchCheck,Circle,CirclePlay,Globe,Award } from 'lucide-react'

const Detail = () => {
    const {id}=useParams()

    const finding =courses.find(e=> e.id == id)
    // console.log(finding)
 
  return (
    <>
    
    <div className='w-[76%] shadow-xl border-gray-200 border mt-5 rounded-3xl h-full m-auto mb-10'>
        <div className='w-[90%] h-full border border-gray-300 mb-10 mt-10  m-auto'>
           <img className='w-full object-cover rounded-2xl' src={finding.img} alt="" />
           <ul className='p-15'>
            <li className='text-3xl text-black font-bold'>{finding.title}</li>
            <li className='text-lg mt-3'>{finding.description}</li>
           <li className='flex gap-5 mt-4'>
            <span className='flex gap-4'><Star /> {finding.rate}</span>
            <span className='flex gap-4'><User/>12,500 students</span>
            <span className='flex gap-4'><Clock4 />12h 30m</span>
           </li>
           </ul>
           <div className='border border-gray-200 mx-20'></div>
           <ul className='mx-15 mt-8 flex'>
            <li className='w-[50%]'>
             <span className='flex gap-4 font-bold text-black text-xl'>
                <SearchCheck size={30} className='text-green-500'/>
                What you'll learn</span>
             <span className='flex gap-4 text-lg mt-2'>
                <SearchCheck size={27} className='text-green-500'/>
                Build responsive websites using HTML5, CSS3, and modern JavaScript</span>
             <span className='flex gap-4 text-lg mt-2'><SearchCheck size={27} className='text-green-500'/>Master React.js and create dynamic single-page applications</span>
             <span className='flex gap-4 text-lg mt-2'><SearchCheck size={27} className='text-green-500'/>Understand web development best practices and industry standards</span>
             <span className='flex gap-4 text-lg mt-2'><SearchCheck size={27} className='text-green-500'/>Deploy your projects to production environments</span>
            </li>
            <li className='mx-3'>
             <span className='flex gap-4 font-bold text-xl'><BookOpen size={27} className='text-blue-600 '/>Requirements</span>
             <span className='flex gap-4 text-lg mt-2'><Circle size={10} className='mt-3 mx-2 bg-blue-600 rounded-full'/>A computer with internet connection</span>
             <span className='flex gap-4 text-lg mt-2'><Circle size={10} className='mt-3 mx-2 bg-blue-600 rounded-full'/>No prior programming experience required</span>
             <span className='flex gap-4 text-lg mt-2'><Circle size={10} className='mt-3 mx-2 bg-blue-600 rounded-full'/>Willingness to learn and practice coding daily</span>
            </li>
           </ul>
           <div className='mx-15 mt-10'>
            <div className='flex gap-4 font-bold text-black text-xl'><CirclePlay size={30} className='text-purple-600'/>Course Curriculum</div>
            <ul>
               <li className='flex mt-5 bg-gray-50 text-black p-4 justify-between rounded-xl hover:bg-gray-100 hover:cursor-pointer'>
                  <span className='mx-2 '>
                     <p className='font-bold'>Introduction to Web Development</p>
                     <p className='text-gray-600'>12 lessons</p>
                  </span>
                  <span className='items-center flex'>1h 30m</span>
               </li>
               <li className='flex mt-5 bg-gray-50 text-black p-4 justify-between rounded-xl hover:bg-gray-100 hover:cursor-pointer'>
                  <span className='mx-2 '>
                     <p className='font-bold'>HTML & CSS Fundamentals</p>
                     <p className='text-gray-600'>18 lessons</p>
                  </span>
                  <span className='items-center flex'>2h 45m</span>
               </li>
               <li className='flex mt-5 bg-gray-50 text-black p-4 justify-between rounded-xl hover:bg-gray-100 hover:cursor-pointer'>
                  <span className='mx-2 '>
                     <p className='font-bold'>JavaScript Essentials</p>
                     <p className='text-gray-600'>24 lessons</p>
                  </span>
                  <span className='items-center flex'>3h 20m</span>
               </li>
               <li className='flex mt-5 bg-gray-50 text-black p-4 justify-between rounded-xl hover:bg-gray-100 hover:cursor-pointer'>
                  <span className='mx-2 '>
                     <p className='font-bold'>React.js Framework</p>
                     <p className='text-gray-600'>20 lessons</p>
                  </span>
                  <span className='items-center flex'>2h 50m</span>
               </li>
               <li className='flex mt-5 bg-gray-50 text-black p-4 justify-between rounded-xl hover:bg-gray-100 hover:cursor-pointer'>
                  <span className='mx-2 '>
                     <p className='font-bold'>Building Real Projects</p>
                     <p className='text-gray-600'>15 lessons</p>
                  </span>
                  <span className='items-center flex'>2h 50m</span>
               </li>

               <li className='flex mt-5 bg-gray-200 text-black p-4 justify-between rounded-xl hover:bg-gray-100 hover:cursor-pointer'>
                  <span className='mx-2 '>
                     <p className='text-gray-600'>Instructor</p>
                     <p className='font-bold text-2xl'>{finding.instructor}</p>
                     
                  </span>
                  <span className='items-center flex gap-8'>
                     <p className='text-gray-600'><Globe className='m-auto'/>English</p>
                     <p className='text-gray-600'><Award className='m-auto'/>Certificate</p>
                  </span>
               </li>
            </ul>
             <div className='border border-gray-200 mx-20 mt-14'></div>
             <div className='flex justify-between mt-3'>
               <span className='mx-2 '>
                     <p className='text-gray-600'>Price</p>
                     <p className='font-bold text-4xl'>${finding.price}</p>
                  </span>
                  <span className='mb-7'>
                     <button className='bg-blue-600 hover:cursor-pointer hover:bg-blue-700 text-white text-xl p-4 font-bold mt-4 rounded-xl'>Enroll Now</button>
                  </span>
             </div>
           </div>
        </div>
    
    </div>
    
    </>
  )
}

export default Detail