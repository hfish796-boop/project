import React from 'react'
import { BookOpenText } from 'lucide-react'
import { Users } from 'lucide-react'
import { Star } from 'lucide-react'
import { Clock3 } from 'lucide-react'
import { Award } from 'lucide-react'
import { Headphones } from 'lucide-react'
import Card from '../component/Card'
import { courses } from '../data/data'
// console.log(data);


const Home = () => {
  return (

    <>
    {/* Mobile */}
   <div className=' sm:block md:hidden  w-full md:w-4/5 shadow rounded-2xl mx-auto my-4 p-5'>
      <div className='bg-blue-600 h-120 rounded-lg  mx-4 '>
        <div className='w-full md:h-full lg:w-3/5 mx-4 '>
        <h1 className='text-4xl font-bold text-white '>Learn Without Limits</h1>
        <p className='text-xl mx-3 text-gray-300 mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et fugiat modi omnis officia hic? Minima quaerat molestias ad enim </p>
        <div className=' gap-7 mt-9'>
          <button className='bg-gray-50 py-3  px-26 rounded-xl text-blue-600 font-medium hover:bg-blue-600 hover:border-2 hover:border-gray-200 hover:text-gray-50'>
           Get Start 
          </button>
          <button className='border-gray-200 border-2  py-3 px-22 mt-4 rounded-xl text-gray-50 font-medium hover:bg-gray-200 hover:text-blue-700'>
           Watch Demo
          </button>

        </div>
        </div>
      </div>
      {/* <div className='mx-9 mt-17'>
          <div className='flex justify-between'>
            <div>
              <span className='text-blue-600 font-bold text-4xl mx-4'>50K+</span>
              <p className='text-gray-600 m-1'>Active Students</p>
            </div>
            <div>
              <span className='text-blue-600 font-bold text-4xl m-4'>500+</span>
              <p className='text-gray-600 m-1'>Online Coureses</p>
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              <span className='text-blue-600 font-bold text-4xl mx-4'>50K+</span>
              <p className='text-gray-600 m-1'>Active Students</p>
            </div>
            <div>
              <span className='text-blue-600 font-bold text-4xl m-4'>500+</span>
              <p className='text-gray-600 m-1'>Online Coureses</p>
            </div>
          </div>
          
        </div> */}
    </div>
  
    {/* Laptop */}
    <div className= ' w-full  md:w-4/5 shadow-2xl mx-auto my-4 md:p-5 '>
      <div className='bg-blue-600 rounded-2xl md:flex md:px-4 md:py-7'>
        <div className='w-full hidden md:block md:h-full lg:w-3/6 mx-5 mt-15'>
        <h1 className='text-7xl font-bold text-white '>Learn Without Limits</h1>
        <p className='text-xl text-gray-300 mt-3.5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus et fugiat modi omnis officia hic? Minima quaerat molestias ad enim tempora. Pariatur excepturi iure itaque laborum totam provident, numquam et.</p>
        <div className='flex gap-7 mt-9'>
          <button className='bg-gray-50 py-4 px-9 rounded-xl text-blue-600 font-medium hover:bg-blue-600 hover:border-2 hover:border-gray-200 hover:text-gray-50'>
           Get Start
          </button>
          <button className='border-gray-200 border-2  py-4 px-9 rounded-xl text-gray-50 font-medium hover:bg-gray-200 hover:text-blue-700'>
           Watch Demo
          </button>

        </div>
        </div>
        {/* <div className='w-full lg:w-3/6 mt-15 '>
          <div className='w-115 rounded-3xl h-90 bg-white mx-30'>
            <div className='flex p-10 gap-7'>
           <img className='w-14 h-14' src="https://img.icons8.com/?size=100&id=AmE9lLCid7lN&format=png&color=000000" alt="" />
           <ul>
            <li className=' text-lg'>500+ Courses</li>
            <li className='text-blue-500'>Available Now</li>
           </ul>
            </div>
            <div className='flex mx-10 gap-7'>
              <img className='w-14 h-14' src="https://img.icons8.com/?size=100&id=J77ZG0kNVE7q&format=png&color=000000" alt="" />
            <ul>
              <li className=' text-lg'>50+ Students</li>
              <li className='text-blue-500'>Join Our Community</li>
            </ul>
            </div>
            <div className='flex p-10 gap-7'>
            <img className='w-14 h-14' src="https://img.icons8.com/?size=100&id=80355&format=png&color=000000" alt="" />
            <ul>
              <li className=' text-lg'>4.8 Rating</li>
              <li className='text-blue-500'>From 10K+ Reviews</li>
            </ul>
            </div>
          </div>
        </div> */}

     <div className='w-full hidden md:block md:h-full lg:w-2/5 md:p-7 mt-3.5'>
      <ul className=' bg-gray-50 p-10 rounded-xl flex flex-col gap-3.5'>
       <li className='flex gap-7'>
        <div className='w-15 h-15 bg-blue-300 rounded-2xl p-2'>
          <img src="https://img.icons8.com/?size=100&id=WjoY9Do6usur&format=png&color=000000" alt="" />
        </div>
        <span>
          <h3 className='font-bold text-xl '>500+ Courses</h3>
          <p className='text-blue-500'>Available now</p>
        </span>
       </li>

       <li className='flex gap-7 mt-8'>
        <div className='w-15 h-15 bg-blue-300 rounded-2xl p-2'>
          <img src="https://img.icons8.com/?size=100&id=J77ZG0kNVE7q&format=png&color=000000" alt="" />
        </div>
        <span>
          <h3 className='font-bold text-xl '>50K+ Students</h3>
          <p className='text-blue-500'>Join our community</p>
        </span>
       </li>
       <li className='flex gap-7 mt-8'>
        <div className='w-15 h-15 bg-blue-300 rounded-2xl p-2'>
          <img src="https://img.icons8.com/?size=100&id=81760&format=png&color=000000" alt="" />
        </div>
        <span>
          <h3 className='font-bold text-xl '>4.8 Rating</h3>
          <p className='text-blue-500'>From 10K+ reviews</p>
        </span>
       </li>
      </ul>
     </div>
      


      </div>

     <div className='grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 bg-gray-50 shadow m-5'>
      <div className='flex flex-col  justify-center items-center py-15'>
      <h1 className='text-4xl font-bold text-blue-600 '>50K+</h1>
      <p className='text-md mt-1'> Active Students</p>
      </div>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className='text-4xl font-bold text-blue-600 '>500+</h1>
      <p className='text-md mt-1'> Online Courses</p>
      </div>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className='text-4xl font-bold text-blue-600 '>100+</h1>
      <p className='text-md mt-1'> Expert Instructors</p>
      </div>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className='text-4xl font-bold text-blue-600 '>98%</h1>
      <p className='text-md mt-1'>Success Rate </p>
      </div>

    </div>
      <div className='mt-15 m-5 bg-gray-50 shadow'>
        <h1 className='text-center m-4 text-3xl font-bold'>
          Explore Top Categories
        </h1>
        <p className='text-center text-xl mt-2 '>Choose from hundreds of courses across different categories</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6'>
         <div className='p-5 rounded-lg border border-gray-500 flex flex-col justify-center
                         items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer
         '>
          <img className='w-16' src="https://img.icons8.com/?size=100&id=42920&format=png&color=000000" alt="" />
          <h2 className='mt-2.5 font-bold text-lg'>Development</h2>
          <p>120 Courses</p>
         </div>

         <div className='p-5 rounded-lg border border-gray-500 flex flex-col justify-center
                         items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer
         '>
          <img className='w-16' src="https://img.icons8.com/?size=100&id=80382&format=png&color=000000" alt="" />
          <h2 className='mt-2.5 font-bold text-lg'>Business</h2>
          <p>85 Courses</p>
         </div>

          <div className='p-5 rounded-lg border border-gray-500 flex flex-col justify-center
                         items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer
         '>
          <img className='w-16' src="https://img.icons8.com/?size=100&id=Hs4y0qsqaZ6G&format=png&color=000000" alt="" />
          <h2 className='mt-2.5 font-bold text-lg'>Design</h2>
          <p>95 Courses</p>
         </div>

          <div className='p-5 rounded-lg border border-gray-500 flex flex-col justify-center
                         items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer
         '>
          <img className='w-16' src="https://img.icons8.com/?size=100&id=Hs4y0qsqaZ6G&format=png&color=000000" alt="" />
          <h2 className='mt-2.5 font-bold text-lg'>Marketing</h2>
          <p>70 Courses</p>
         </div>

          <div className='p-5 rounded-lg border border-gray-500 flex flex-col justify-center
                         items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer
         '>
          <img className='w-16' src="https://img.icons8.com/?size=100&id=u6A1fcsd1q2J&format=png&color=000000" alt="" />
          <h2 className='mt-2.5 font-bold text-lg'>Photography</h2>
          <p>45 Courses</p>
         </div>

         <div className='p-5 rounded-lg border border-gray-500 flex flex-col justify-center
                         items-center m-3 hover:shadow-lg duration-150 transition-all cursor-pointer
         '>
          <img className='w-16' src="https://img.icons8.com/?size=100&id=p6vT9rfwUGw6&format=png&color=000000" alt="" />
          <h2 className='mt-2.5 font-bold text-lg'>Music</h2>
          <p>60 Courses</p>
         </div>


        </div>
      </div>

      <div className='mt-12 shadow-xl bg-gray-100 m-7'>
        <h1 className='font-bold text-4xl text-center pt-20 '>Featured Courses</h1>
        <p className='text-center text-xl mx-3 mt-4'>Most popular courses chosen by our students</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 md:mt-10 md:px-2 md:py-3'>
          


          {courses.map((c)=> ( <Card  title={c.title} price={c.price} img={c.img} instructor={c.instructor} s_title={c.s_title}/> ))}
         

































          {/* <div className='bg-white shadow-sm hover:cursor-pointer  rounded-2xl mx-5 hover:shadow-md'>
            <img className='rounded-2xl' src="https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg" alt="" />
            <ul className='mx-7 mt-3'>
              <li className='text-blue-600'>Development</li>
              <li className='text-xl font-bold mt-2 line-clamp-1'>Web development Bootcamp</li>
              <li className='text-gray-600 mt-2'>John Doe</li>
              <li className='flex mt-4 justify-between'>
                <div className='flex'>
                <span><img className='w-6 ' src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000" alt="" /></span>
                <p className='font-bold mx-1'> 4.8   </p>
                <span className='text-gray-500'>(12500)</span></div>
                <div className='text-blue-600 font-bold text-xl'>$49.99</div>
              </li>
              <li>
                <button className='border-2 mb-6 bg-blue-600 text-white text-xl mt-4 px-13 py-2 rounded-xl hover:bg-blue-700'>Enroll Now</button>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow-sm hover:cursor-pointer rounded-2xl mx-5 hover:shadow-md'>
            <img className='rounded-2xl' src="https://img-c.udemycdn.com/course/480x270/1754098_e0df_3.jpg" alt="" />
            <ul className='mx-7 mt-3'>
              <li className='text-blue-600'>Data Science</li>
              <li className='text-xl font-bold mt-2 line-clamp-1'>Python for Data Science</li>
              <li className='text-gray-600 mt-2'>Jane Smith</li>
              <li className='flex mt-4 justify-between'>
                <div className='flex'>
                <span><img className='w-6 ' src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000" alt="" /></span>
                <p className='font-bold mx-1'> 4.9   </p>
                <span className='text-gray-500'>(18200)</span></div>
                <div className='text-blue-600 font-bold text-xl'>$59.99</div>
              </li>
              <li>
                <button className='border-2 mb-6 bg-blue-600 text-white text-xl mt-4 px-13 py-2 rounded-xl hover:bg-blue-700'>Enroll Now</button>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow-sm hover:cursor-pointer rounded-2xl mx-5 hover:shadow-md'>
            <img className='rounded-2xl' src="https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg" alt="" />
            <ul className='mx-7 mt-3'>
              <li className='text-blue-600'>Design</li>
              <li className='text-xl font-bold mt-2 line-clamp-1'>UI/UX Design Masterclass</li>
              <li className='text-gray-600 mt-2'>Mike Johnson</li>
              <li className='flex mt-4 justify-between'>
                <div className='flex'>
                <span><img className='w-6 ' src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000" alt="" /></span>
                <p className='font-bold mx-1'> 4.7   </p>
                <span className='text-gray-500'>(9800)</span></div>
                <div className='text-blue-600 font-bold text-xl'>$44.99</div>
              </li>
              <li>
                <button className='border-2 mb-6 bg-blue-600 text-white text-xl mt-4 px-13 py-2 rounded-xl hover:bg-blue-700'>Enroll Now</button>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow-sm hover:cursor-pointer rounded-2xl mx-5 hover:shadow-md'>
            <img className='rounded-2xl' src="https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg" alt="" />
            <ul className='mx-7 mt-3'>
              <li className='text-blue-600'>Development</li>
              <li className='text-xl font-bold mt-2 line-clamp-1'>React JS Complete Guide</li>
              <li className='text-gray-600 mt-2'>John Doe</li>
              <li className='flex mt-4 justify-between'>
                <div className='flex'>
                <span><img className='w-6 ' src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000" alt="" /></span>
                <p className='font-bold mx-1'> 4.8   </p>
                <span className='text-gray-500'>(15200)</span></div>
                <div className='text-blue-600 font-bold text-xl'>$49.99</div>
              </li>
              <li>
                <button className='border-2 mb-6 bg-blue-600 text-white text-xl mt-4 px-13 py-2 rounded-xl hover:bg-blue-700'>Enroll Now</button>
              </li>
            </ul>
          </div>
          <div className='bg-white shadow-sm hover:cursor-pointer rounded-2xl mx-5 hover:shadow-md'>
            <img className='rounded-2xl' src="https://img-c.udemycdn.com/course/480x270/756150_c033_4.jpg" alt="" />
            <ul className='mx-7 mt-3'>
              <li className='text-blue-600'>Backend</li>
              <li className='text-xl font-bold mt-2'>Laravel From Scratch</li>
              <li className='text-gray-600 mt-2'>John Doe</li>
              <li className='flex mt-4 justify-between'>
                <div className='flex'>
                <span><img className='w-6 ' src="https://img.icons8.com/?size=100&id=XBMnwwJYQvfN&format=png&color=000000" alt="" /></span>
                <p className='font-bold mx-1'> 4.6   </p>
                <span className='text-gray-500'>(11200)</span></div>
                <div className='text-blue-600 font-bold text-xl'>$39.99</div>
              </li>
              <li>
                <button className='border-2 mb-6 bg-blue-600 text-white text-xl mt-4 px-13 py-2 rounded-xl hover:bg-blue-700'>Enroll Now</button>
              </li>
            </ul>
          </div> */}
          
          
          
        </div>
      </div>
        <h1 className='font-bold text-3xl text-center pt-20 '>Why Choose ETEC?</h1>
        <p className='text-center text-xl mt-2.5 m-7'>We provide the best learning experience for students worldwide</p>
          
          <div className='grid md:grid-cols-2 xl:grid-cols-4 '>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className=' text-blue-600 bg-blue-200 px-3 py-3 rounded-full'><Users size={35}/></h1>
      <p className='text-xl mt-5 font-bold '> Expert Instructors</p>
      <p>Learn from industry professionals </p>
      <p>with years of experience</p>
      </div>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className=' text-blue-600 bg-blue-200 px-3 py-3 rounded-full'><Clock3 size={35}/></h1>
      <p className='text-xl mt-5 font-bold '> Lifetime Access</p>
      <p>Access your courses anytime, </p>
      <p>anywhere, on any device</p>
      </div>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className=' text-blue-600 bg-blue-200 px-3 py-3 rounded-full'><Award size={35}/></h1>
      <p className='text-xl mt-5 font-bold '> Certificates</p>
      <p>Earn certificates upon completion </p>
      <p>to boost your career</p>
      </div>
      <div className='flex flex-col justify-center items-center py-15'>
      <h1 className=' text-blue-600 bg-blue-200 px-3 py-3 rounded-full'><Headphones size={35}/></h1>
      <p className='text-xl mt-5 font-bold '> 24/7 Support</p>
      <p>Get help whenever you need it </p>
      <p>from our support team</p>
      </div>
    </div>
     
     <div className='bg-blue-600 text-white m-7'>
      <div className=''></div>
     <h1 className='font-bold text-4xl text-center pt-17'>Ready to Start Learning?</h1>
        <p className='text-center text-xl mt-2.5 m-7'>Join thousands of students already learning on LearnHub</p>
        <div className='flex justify-center'>
        <button className='bg-white hover:bg-gray-100 text-blue-600 text-lg py-3 px-9 rounded-xl  mt-10 mb-20'>Get Started for Free</button>
     </div></div>


    </div>
    


    </>
  )
}

export default Home