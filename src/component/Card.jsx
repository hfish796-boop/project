import React from 'react'
import { Star } from 'lucide-react'

const Card = ({title,img,price,rate,instructor,s_title}) => {
  return (
   <>
   
           <div className='bg-white h-[450px] rounded-xl overflow-hidden hover:shadow-2xl shadow-lg hover:cursor-pointer'>
            <div className='w-full h-2/4'>
            <img  className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className='px-4 py-1'>
            <span className='text-blue-600 text-sm'>{s_title}</span>
            <h2 className='text-2xl font-bold mt-1 line-clamp-1'>{title}</h2>
             <h4 className='mt-3'>{instructor}</h4>
             <div className='flex justify-between'>
              <span className=' flex items-center gap-2.5'>
                 <span className='text-amber-400'>
                <Star />
                </span>
                
                <span className='text-lg '>
                <span className='font-bold'>{rate}</span>
                (12500)
                </span>
                 </span>
              <span className='text-2xl font-bold text-blue-600'>${price}</span>
              
             </div>
             <button className='text-gray-50 px-5 bg-blue-700 hover:bg-blue-800 py-4 rounded-xl w-full mt-2.5'>Enroll Now</button>
            </div>
          </div>


          {/* <div className='bg-white h-[450px] rounded-xl overflow-hidden shadow-lg hover:cursor-pointer'>
            <div className='w-full h-2/4'>
            <img  className='w-full h-full object-cover' src="https://img-c.udemycdn.com/course/480x270/1754098_e0df_3.jpg" alt="" />
            </div>
            <div className='px-4 py-1'>
            <span className='text-blue-600 text-sm'>Data Science</span>
            <h2 className='text-2xl font-bold mt-1 line-clamp-1'>Python and Data Science</h2>
             <h4 className='mt-3'>Jane Smith</h4>
             <div className='flex justify-between'>
              <span className=' flex items-center gap-2.5'>
                 <span className='text-amber-400'>
                <Star />
                </span>
                
                <span className='text-lg '>
                <span className='font-bold'>4.9</span>
                (18200)
                </span>
                 </span>
              <span className='text-2xl font-bold text-blue-600'>$59.99</span>
              
             </div>
             <button className='text-gray-50 px-5 bg-blue-700 py-4 rounded-xl w-full mt-2.5'>Enroll Now</button>
            </div>
          </div>

          <div className='bg-white h-[450px] rounded-xl overflow-hidden shadow-lg hover:cursor-pointer'>
            <div className='w-full h-2/4'>
            <img  className='w-full h-full object-cover' src="https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg" alt="" />
            </div>
            <div className='px-4 py-1'>
            <span className='text-blue-600 text-sm'>Design</span>
            <h2 className='text-2xl font-bold mt-1 line-clamp-1'>UI/UX Design Masterclass</h2>
             <h4 className='mt-3'>Mike Johnson</h4>
             <div className='flex justify-between'>
              <span className=' flex items-center gap-2.5'>
                 <span className='text-amber-400'>
                <Star />
                </span>
                
                <span className='text-lg '>
                <span className='font-bold'>4.7</span>
                (9800)
                </span>
                 </span>
              <span className='text-2xl font-bold text-blue-600'>$44.99</span>
              
             </div>
             <button className='text-gray-50 px-5 bg-blue-700 py-4 rounded-xl w-full mt-2.5'>Enroll Now</button>
            </div>
          </div>

          <div className='bg-white h-[450px] rounded-xl overflow-hidden shadow-lg hover:cursor-pointer'>
            <div className='w-full h-2/4'>
            <img  className='w-full h-full object-cover' src="https://img-c.udemycdn.com/course/480x270/1362070_b9a1_2.jpg" alt="" />
            </div>
            <div className='px-4 py-1'>
            <span className='text-blue-600 text-sm'>Development</span>
            <h2 className='text-2xl font-bold mt-1 line-clamp-1'>React JS Complete Guide</h2>
             <h4 className='mt-3'>John Doe</h4>
             <div className='flex justify-between'>
              <span className=' flex items-center gap-2.5'>
                 <span className='text-amber-400'>
                <Star />
                </span>
                
                <span className='text-lg '>
                <span className='font-bold'>4.8</span>
                (15200)
                </span>
                 </span>
              <span className='text-2xl font-bold text-blue-600'>$49.99</span>
              
             </div>
             <button className='text-gray-50 px-5 bg-blue-700 py-4 rounded-xl w-full mt-2.5'>Enroll Now</button>
            </div>
          </div> */}
   
   
   </>
  )
}

export default Card