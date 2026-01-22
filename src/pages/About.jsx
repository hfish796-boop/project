import React from 'react'
import { Award, Eye, Globe, Heart, Users,Star } from 'lucide-react'
import { Target } from 'lucide-react'
import { timelineData } from '../data/data'

const About = () => {
  return (
    <>
     {/* Mobile */}
     <div className='bg-white sm:block md:hidden rounded-xl w-[90%] shadow-xl mx-5'>
      <div className='bg-gray-100 mt-10 w-[85%]   py-10 mx-7'>
          <ul className='grid grid-cols-1 md:grid-cols-2 '>
             <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-10'>
              <Target size={25} className='bg-blue-100 text-blue-600 h-13 w-13 p-3 rounded-full'/>
              <h2 className='font-bold text-3xl mt-5'>Our Mission</h2>
              <h5 className='mt-5 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi cupiditate fugiat. Sapiente dicta unde nam fugit hic iure expedita excepturi nemo quas. Explicabo earum itaque sunt quia culpa.</h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-10'>
              <Eye size={25} className='bg-purple-100 text-purple-600 h-13 w-13 p-3 rounded-full'/>
              <h2 className='font-bold text-3xl mt-5'>Our Version</h2>
              <h5 className='mt-5 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi cupiditate fugiat. Sapiente dicta unde nam fugit hic iure expedita excepturi nemo quas. Explicabo earum itaque sunt quia culpa.</h5>
            </li>
          </ul>
        </div>
        <div className='sm:block md:hidden'>
          <h1 className='text-center mt-10 text-3xl font-bold'>Our Story </h1>
          <div className='p-5 mx-8 text-xl'>dipisicing elit. Ducimus, ratione, totam nihil omnis repudiandae exercitationem laboriosam ipsam quibusdam vel reprehenderit eaque cum! Numquam similique eum, dolores consectetur dolor corporis in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse cumque dolorem magni libero. Perspiciatis, natus. Accusamus, consequatur. Sequi quibusdam culpa id eveniet omnis commodi quae itaque molestiae, doloribus quos.</div>
          
        </div>
        </div>

    <div className='  shadow-2xl w-full  md:px-50 py-7'>
      <div className='bg-white rounded-xl w-full shadow-xl'>
        <div className='bg-gray-100 hidden md:block w-[90%] py-10 mt-10 mx-15'>
          <ul className='grid grid-cols-1 md:grid-cols-2 '>
             <li className='bg-white w-[80%] mx-13 mt-20 shadow-xl rounded-xl p-10'>
              <Target size={25} className='bg-blue-100 text-blue-600 h-13 w-13 p-3 rounded-full'/>
              <h2 className='font-bold text-3xl mt-5'>Our Mission</h2>
              <h5 className='mt-5 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi cupiditate fugiat. Sapiente dicta unde nam fugit hic iure expedita excepturi nemo quas. Explicabo earum itaque sunt quia culpa.</h5>
            </li>
            <li className='bg-white w-[80%] mx-13 mt-20 shadow-xl rounded-xl p-10'>
              <Eye size={25} className='bg-purple-100 text-purple-600 h-13 w-13 p-3 rounded-full'/>
              <h2 className='font-bold text-3xl mt-5'>Our Version</h2>
              <h5 className='mt-5 text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi cupiditate fugiat. Sapiente dicta unde nam fugit hic iure expedita excepturi nemo quas. Explicabo earum itaque sunt quia culpa.</h5>
            </li>
          </ul>
        </div>

        
        <div className='hidden md:block'>
          <h1 className='text-center mt-10 text-3xl font-bold'>Our Story </h1>
          <div className='p-5 px-60 text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet doloremque dolore! Voluptatibus ullam esse, adipisci consequatur id earum laborum. Maiores rem amet officia quisquam, numquam praesentium eum exercitationem nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ratione, totam nihil omnis repudiandae exercitationem laboriosam ipsam quibusdam vel reprehenderit eaque cum! Numquam similique eum, dolores consectetur dolor corporis in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur esse cumque dolorem magni libero. Perspiciatis, natus. Accusamus, consequatur. Sequi quibusdam culpa id eveniet omnis commodi quae itaque molestiae, doloribus quos.</div>
          
        </div>

      <section className="bg-white  py-16 px-6 flex">
      <div className="max-w-5xl md:mx-32 relative">
        
        {/* Vertical Line */}
        <div className="absolute hidden md:block right-8 top-0 h-full w-1 bg-blue-200"></div>

        <div className="space-y-16">
          {timelineData.map((item, index) => (
            <div key={index} className="relative md:flex items-center">
              
              {/* Card */}
              <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-2xl mr-24">
                <h4 className="text-blue-600 text-3xl font-bold mb-2">
                  {item.year}
                </h4>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>

              {/* Icon */}
              <div className="absolute hidden md:flex right-3 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white">
                ✓
              </div>
              {/* Mobile */}
               <div className=" sm:block md:hidden  bg-blue-600 w-12 my-20 left-37 relative  h-12 rounded-full flex items-center justify-center text-white">
                ✓
              </div>

            </div>
          ))}
        </div>

      </div>
      
    </section>

    <div className='bg-gray-100  w-[90%] py-10 mt-10 mx-15'>
       <div className=''>
          <h1 className='text-center mt-10 text-3xl font-bold'>Our Core Values </h1>
          <div className='p-5 px-60 text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumqu</div>
          
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10'>
             <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-6'>
              <Heart size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Passion for learning</h2>
              <h5 className='mt-5 text-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-7'>
              <Users size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Student-centered</h2>
              <h5 className='mt-5 text-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi  </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-7'>
              <Award size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Quality Excellence</h2>
              <h5 className='mt-5 text-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-7'>
              <Globe size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Global  Community</h2>
              <h5 className='mt-5 text-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi </h5>
            </li>
          </ul>
    </div>

    <div className=''>
          <h1 className='text-center mt-10 text-3xl font-bold'>Meet Our Team </h1>
          <div className='p-5 px-60 text-xl text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem cing</div>
          
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5 mb-10'>
             <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-10'>
              <Heart size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>HENG PHEAKNA</h2>
              <h4 className='text-blue-700 font-bold text-center'>Director</h4>
              <h5 className='mt-5 text-md text-center'>15+ years in education technology </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-10'>
              <Users size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Kung Norasmey</h2>
               <h4 className='text-blue-700 font-bold text-center'>Vice Director</h4>
              <h5 className='mt-5 text-md text-center'>Former software architect at tech giants </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-10'>
              <Award size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Srin Nalen</h2>
              <h4 className='text-blue-700 font-bold text-center'>Web Developer</h4>
              <h5 className='mt-5 text-md text-center'>Former software architect at tech giants </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-10'>
              <Globe size={25} className='bg-blue-100 mx-12 text-blue-600 h-16 w-16 p-3 rounded-full'/>
              <h2 className='font-bold text-xl mt-5 text-center'>Srin Nalen</h2>
              <h4 className='text-blue-700 font-bold text-center'>Web Developer</h4>
              <h5 className='mt-5 text-md text-center'>Former software architect at tech giants</h5>
            </li>
          </ul>

       <div className='bg-gray-100  w-[90%] py-14 mt-10 mx-15'>
       <div className=''>
          <h1 className='text-center mt-10 text-3xl font-bold '>What our students say </h1>
          <div className='p-5 px-60 text-xl text-center'>Real feedback from real students who transformed their careers with us.</div>
          
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 mb-10'>
             <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-6'>
              <Heart size={25} className='bg-blue-100  text-blue-600 h-16 w-16 p-3 rounded-full'/>
             
              <h5 className='mt-5 text-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-7'>
              <Users size={25} className='bg-blue-100  text-blue-600 h-16 w-16 p-3 rounded-full'/>
              
              <h5 className='mt-5 text-md text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id laudantium modi  </h5>
            </li>
            <li className='bg-white w-[84%] mx-6 mt-7 shadow-xl rounded-xl p-7'>
              <Award size={25} className='  text-blue-600 h-16 w-16 p-3 rounded-full'/>
              
              <h5 className='mt-5 text-md text-center'>I love that I can learn at my own pace. The platform is intuitive, the lessons are practical, and I've already started applying what I learned at work!</h5>
              <div className='flex'>
                <div>
                <img className='w-25 h-25 mt-7' src="https://i.pinimg.com/1200x/55/06/62/55066253d0d056c690cfb49f4f91ff82.jpg" alt="" />
                 </div>
                 <div className='mt-12'>
                  <h4 className='font-bold text-md text-center'>James Wilson</h4>
                 <h5 className='mx-3 text-sm text-center'>Marketing Manager</h5>
              </div>
              </div>
              <ul className='flex mt-5 gap-1 text-yellow-300 '>
                <li><Star size={21}/></li>
                <li><Star size={21}/></li>
                <li><Star size={21}/></li>
                <li><Star size={21}/></li>
                <li><Star size={21}/></li>
              </ul>
            </li>
           
          </ul>


          <div className='bg-blue-600 text-white '>
      <div className=''></div>
     <h1 className='font-bold text-4xl text-center pt-17'>Join Our Growing Community</h1>
        <p className='text-center text-xl mt-2.5 m-7'>Start your learning journey today and become part of something amazing.</p>
        <div className='flex justify-center'>
        <button className='bg-white hover:bg-gray-100 text-blue-600 text-lg py-3 px-9 rounded-xl  mt-10 mb-20'>Get Started Now</button>
     </div></div>
    </div>
      </div>
    </div>
    
    
    </>
  )
}

export default About