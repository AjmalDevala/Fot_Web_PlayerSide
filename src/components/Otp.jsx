import axios from "axios"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function otp() {
const navigate = useNavigate()
const [otpvalue,setOtpvalue] = useState("")

const verifyOtp = (e)=>{
    e.preventDefault()
    

    axios.post("http://localhost:7007/api/userSignup",{
        otpvalue
        
    }).then(()=>{

        navigate('/login' ,{replace:true})
    })
}

  return (
    <div>
      <section
        className="h-screen bg-cover pt-44   bg-[url('/src/assets/images/bg.jpeg')]"
        
      >
        <form action={verifyOtp}>
        <div className="flex h-full  w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl sm:text-5xl capitalize tracking-widest text-white lg:text-6xl">
              Welcome to Toools
            </h1>

            <p className="mt-6 lg:text-lg text-black">
              Verify your Email here, Enter your OTP send to your mail
            </p>

            <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
              <input
                id="otp"
                value={otpvalue}
                type="number"
                onChange={(e)=>{
                    setOtpvalue(e.target.value)
                }}
                className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
                placeholder="Enter OTP"
              />

              <button 
               type="submit"
               onClick={verifyOtp}
              className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                Verify 
              </button>
            </div>
          </div>
        </div>
        </form>
      </section>
    </div>
  );
}

export default otp;