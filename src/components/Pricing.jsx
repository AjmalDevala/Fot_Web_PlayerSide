import React from 'react'

function Pricing() {
  return (
    <div className="mt-5 bg-[url('https://images.unsplash.com/photo-1415018255745-0ec3f7aee47b?dpr=1&auto=format&fit=crop&w=1500&h=938&q=80&cs=tinysrgb&crop=')]">
      <section class=" py-8">
      <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Pricing
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none  bg-white lg:rounded-l-lg mt-4">
            <div class="flex-1  text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Free
              </div>
              <ul class="w-full text-center text-xl">
                <li class="border-b py-4">ONLY 3 CONNECTION</li>
                <li class="border-b py-4">ONLY ONE DAY MESSAGE </li>
                {/* <li class="border-b py-4">Thing</li> */}
              </ul>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £0
                <span class="text-base">for one user</span>
              </div>
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:bg-blend-color gradient text-slate-900 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Go
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <div class="w-full p-8 text-3xl font-bold text-center">Premium</div>
              <hr />
              <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
              <ul class="w-full text-center text-base font-bold">
                <li class="border-b py-4">UNLIMITED CONNECTION</li>
                <li class="border-b py-4">UNLIMITED MESSAGE </li>
                <li class="border-b py-4">PRIME MEMBER</li>
                {/* <li class="border-b py-4">Thing</li> */}
              </ul>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="w-full pt-6 text-4xl font-bold text-center">
                ₹ 230
                <span class="text-base">/ per user</span>
              </div>
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:translate-x-1 gradient text-neutral-900 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                 TRY PREMIUM 
                </button>
              </div>
            </div>
          </div>
          {/* <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
            <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
              <div class="p-8 text-3xl font-bold text-center border-b-4">
                Pro
              </div>
              <ul class="w-full text-center text-sm">
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
                <li class="border-b py-4">Thing</li>
              </ul>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                £x.99
                <span class="text-base">/ per user</span>
              </div>
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Sign Up
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Pricing
