import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import  {siginupValidation} from "../../helper/validate";
function SignUp() {
  const navigate = useNavigate();
  const Formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone:"",
      password: "",
    },
    validate :siginupValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const signupPromise = await axios.post('http://localhost:7007/api/userSignup',{values})
        toast.promise(signupPromise,{
          loading:'Creating...!🕐',
          success:<b>Successfully created</b>,
          error:<b>errror</b>
        }).then(()=>{
          navigate('/login')
 
        }).catch((error)=>{
          toast.dismiss()
          toast.error(error)
        }     
  )},
  });
  return (
    // <!-- component -->
    <div className=" h-full bg-white outline-1 outline-cyan-600">
      <Toaster position="top-center"></Toaster>
      <div class="md:1/2 max-w-lg mx-auto my-24 px-4 outline-offset-8 py-5 shadow-2xl">
        <div class="text-left p-0 font-sans">
          <h1 class=" text-gray-800 text-3xl font-medium">
            Create an account for free
          </h1>
          <h3 class="p-1 text-gray-700">Your journey starts here</h3>
        </div>
        <form action="#" class="p-0" onSubmit={Formik.handleSubmit}>
          <div class="mt-5">
            <input
            {...Formik.getFieldProps('fullname')}
              type="text"
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="fullname"
            />
          </div>
          <div class="mt-5">
            <input
            {...Formik.getFieldProps('email')}
              type="email"
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent "
              placeholder="Email"
            />
          </div>
          <div class="mt-5">
            <input
              {...Formik.getFieldProps('phone')}

              type="phone"
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none   required pattern=[6789][0-9]{9} focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Phone Number"
            />
          </div>
          <div class="mt-5">
            <input
            {...Formik.getFieldProps('password')}
              type="password"
              class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  "
              placeholder="Password"
            />
          </div>

          <div class="mt-10">
            <input
              type="submit"
              value="Sign up with email"
              class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"
            />
          </div>
        </form>
        <a class="" href="/login" data-test="Link">
          <span class="block  p-5 text-center text-gray-800  text-xs ">
            Already have an account?
          </span>
        </a>
      </div>
      </div>
  );
}

export default SignUp;
