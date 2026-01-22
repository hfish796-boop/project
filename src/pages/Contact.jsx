import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser'
import { GoogleMap,LoadScript, Marker } from '@react-google-maps/api';

const Contact = () => {
  const formRef = useRef();
  const submit =(e)=>{
   e.preventDefault();
   emailjs.sendForm("service_9nhdwen","template_qasdemj",formRef.current,"SUo55WMtqYPDPw-EV").then(()=> {
    alert("Email send successfully")
   },
   (err=> {
    console.err(err);
    alert("Email send failed");
   })
  )
  // console.log(formRef.current.name.value);
  // console.log(formRef.current.email.value);
  // console.log(formRef.current.number.value);
  // console.log(formRef.current.message.value);​
  }
  const center = {
    lat: 11.6084732,
    lng: 104.924512,
   };
  return (
    <>
    
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Hero */}
        <div className=" h-[380px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/35/35/14/353514cdfb91e50bb13634eece94573f.jpg')",
          }}
        >
          
          <div className=" inset-0  flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 mt-10">
              Get In Touch
            </h2>
            <p className="text-gray-200 max-w-2xl text-lg">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div> 
        </div>

        {/* Contact Cards */}
        <div className="px-6 pb-16 -mt-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Phone */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-blue-500 text-white text-2xl">
                📞
              </div>
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                +1 (555) 123-4567 <br />
                +1 (555) 987-6543
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-red-500 text-white text-2xl">
                ✉️
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                info@company.com <br />
                support@company.com
              </p>
            </div>

            {/* Office */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-orange-500 text-white text-2xl">
                📍
              </div>
              <h3 className="font-bold text-lg mb-2">Office</h3>
              <p className="text-gray-600 text-sm">
                123 Business Street <br />
                New York, NY 10001
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl bg-green-500 text-white text-2xl">
                ⏰
              </div>
              <h3 className="font-bold text-lg mb-2">Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon - Fri: 9:00 AM - 6:00 PM <br />
                Sat - Sun: Closed
              </p>
            </div>

          </div>
        </div>

     
    </section>
    


     <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT: CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Send Us a Message
          </h2>

          <form className="space-y-6" onSubmit={submit} ref={formRef}>
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name='name'
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                name='email'
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                name='number'
                  type="text"
                  placeholder="+1 (555) 123-4567"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                name='subject'
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
              name='message'
                rows="6"
                placeholder="Tell us more about your inquiry..."
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition"
            >
              ✈️ Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: FAQ */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Response time:</span> Within 24
              hours
            </p>
            <p>
              <span className="font-semibold">Consultations:</span> Free initial
              consultation
            </p>
            <p>
              <span className="font-semibold">Visits:</span> Virtual or in-person
              available
            </p>
          </div>
        </div>

       
      

      </div>

       <div className='bg-blue-600'>

        <LoadScript>
          <GoogleMap mapContainerStyle={{ width:"100%",height:"600px"}}
          center={center}
          zoom={20}
          >
          <Marker position={center}></Marker>
          </GoogleMap>
        </LoadScript>

    </div>

    </section>


    
    
    </>
  )
}

export default Contact