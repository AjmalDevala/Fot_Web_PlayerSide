import React from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
// import { fullnameValidate } from "../../helper/validate";


function SignUp() {
  const navigate = useNavigate(); 
  const Formik = useFormik({
    initialValues: {
      fullname: "",
    },
    // validate :fullnameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });
  return (
    // <!-- component -->
    <body class="bg-white">

    
    
    
    
            <div class="md:w-1/2 max-w-lg mx-auto my-24 px-4 py-5 shadow-none">
    
                <div class="text-left p-0 font-sans">
                    
                    <h1 class=" text-gray-800 text-3xl font-medium">Create an account for free</h1>
                    <h3 class="p-1 text-gray-700">Free forever. No payment needed.</h3>
                </div>
                <form action="#" class="p-0">
                    <div class="mt-5">
    
                        {/* <!-- <label for="email" class="sc-bqyKva ePvcBv">Email</label> --> */}
                        <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="Email"/>
                    </div>
                    <div class="mt-5">
                        <input type="text" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent " placeholder="User-name"/>
                    </div>
                    <div class="mt-5">
                        <input type="password" class="block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent  " placeholder="Password"/>
                    </div>
    
                    <div className="mt-6 block p-5  md:font-sans text-xs text-gray-800">
                        <input type="checkbox" class="inline-block border-0  "/>
                        <span display="inline" class="">By creating an account you are agreeing to our 
                            <a class="" href="/s/terms" target="_blank" data-test="Link">
                            <span class="underline ">Terms and Conditions</span> </a> and
                        <a class="" href="/s/privacy" target="_blank" data-test="Link">
                            <span class="underline">Privacy Policy</span> </a>
                        </span>
                    </div>
    
                    <div class="mt-10">
                        <input type="submit" value="Sign up with email" class="py-3 bg-green-500 text-white w-full rounded hover:bg-green-600"/>
                    </div>
                </form>
                <a class="" href="/login" data-test="Link"><span class="block  p-5 text-center text-gray-800  text-xs ">Already have an account?</span></a>
            </div>
    </body>
    
    
    
  );
}

export default SignUp;
