import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import Instance from "./config/Instance";

function Otp() {

const navigate = useNavigate()
const [otpvalue,setOtpvalue] = useState("")
const [counter,setCounter] = useState(30)

useEffect(() => {
  counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
}, [counter]);

const verifyOtp = (e)=>{
    e.preventDefault()
    
    Instance.post("/userSignup",{otpvalue}).then(()=>{
        navigate('/login' ,{replace:true})
    })
}

const resendOtp = ()=>{
  toast.success('OTP resending...')
 try{
   toast.success("Resending OTP")
 
  Instance.get('/resendOtp').then((response)=>{

  if(response){

    toast.success('OTP resend successfully')
    setCounter(60)
  } else{
    toast.error("Something Went Wrong")
  }
  
})
} catch(error){
  toast.error(error.response.data.error)
}
}

  return (
   
   <div className="h-screen bg-[url(/images/playerlogin.jpg')] pt-44">
        <Toaster position="top-center"></Toaster>
        <form action={verifyOtp}>
        <div className="flex h-full  w-full items-center justify-center container mx-auto px-8">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl sm:text-5xl capitalize tracking-widest text-white lg:text-6xl">
              welcome fotweb
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

            <div className="flex items-center justify-center text-center">
              {counter ? (
                <p className="text-lg text-lightBlue">Timer : {counter} Sec</p>
              ) : (
                <p className="text-sm text-lightBlue">
                  Didn't get OTP?
                  <button className="ml-1  text-green-600" onClick={resendOtp}>
                    Resend
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
        </form>
    
    </div>
  );
}

export default Otp;