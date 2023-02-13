import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="bg-cyan-400/70">
      <div class="pt-24  bg-white">
        <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div class=" flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <p class="uppercase tracking-loose w-full">Choose your Career?</p>
            <h2 class="my-4 text-3xl text-gray-800 font-bold leading-tight">
              Want to Start Your Career as a Professional Football Player
            </h2>
            <button
              class="mx-auto lg:mx-0 hover:none bg-blue-400 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              Sign in
            </button>
            {/* <h2 class="my-4 text-3xl text-gray-800 font-bold leading-tight">
              want to start your career as a football scout
            </h2>
            <button class="mx-auto lg:mx-0 hover:none bg-blue-400 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Sign in
            </button> */}
          </div>
          {/* <!--Right Col--> */}

          <div class="w-full md:w-3/5  text-center">
            <img
              class="w-full md:w-4/5 z-50"
              src="/src/assets/images/undraw_junior_soccer_6sop (1).png"
            />
          </div>
        </div>
      </div>

      {/* home */}
      <section class="relative  bg-[url('/src/assets/images/undraw_junior_soccer_6sop (1).png')] bg-cover bg-center bg-no-repeat">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong class="block font-extrabold text-rose-700">
                Forever Home.
              </strong>
            </h1>

            <p class="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div class="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#"
                class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="#"
                class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            ABOUT
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Early Days
              </h3>
              <p class="text-gray-600 mb-8">
                <h1 className="text-xl">
                  Fit4Football is a player welfare and prevention programme for
                  our everyday athletes.
                </h1>
                <p>
                  🎫 Skill and technique <br />
                  🎫 Physical conditioning <br />
                  🎫 Nutrition <br />
                  🎫 Mental well-being and psychology <br />
                </p>
                <br />
                <br />
                Soccer Drills For Beginners:
                <a
                  class="text-pink-500 underline"
                  href="https://youtu.be/6m3cQucR2i4 "
                >
                  -For Beginners
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 ">
              <div class="w-full   text-center">
                <img class="w-full z-50" src="/src/assets/images/trining.png" />
              </div>
            </div>
          </div>

          {/* DOWN */}

          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 ">
              <div class="w-full   text-center">
                <img class="w-full z-50" src="/src/assets/images/goly.png" />
              </div>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Player Profiling
                </h3>
                <p class="text-gray-600 mb-8">
                  Profiling is a great coaching tool to develop an overview of a
                  player as an individual and as a sports person. It also
                  assists in identifying strengths and weaknesses.
                  <br />
                  <br />
                  <div>
                    🎫 Personal details, including emergency contact information{" "}
                    <br />
                    🎫 Physical attributes and parameters <br />
                    🎫 General health, illnesses, and allergies <br />
                    🎫 Injury screening (past and present)
                  </div>
                  Soccer Player Profile:
                  <a
                    class="text-pink-500 underline"
                    href="https://youtu.be/d6HozFPKfB0"
                  >
                    - Player Profile
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="w-5/6 sm:w-1/2 p-6">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                Athlete Environment
              </h3>
              <p class="text-gray-600 mb-8">
                <h1 className="text-xl">
                  The athlete environment is a key component of the Fit4Football
                  programme, consisting of several key areas
                </h1>
                <p>
                  🎫 Respect, responsibility and integrity <br />
                  🎫 Tournament guidelines <br />
                  🎫 Health, safety and wellbeing for football in New Zealand{" "}
                  <br />
                  🎫 Player loading, overloading and welfare <br />
                </p>
                <br />
                <br />
                What young players NEED to make it:
                <a
                  class="text-pink-500 underline"
                  href="https://youtu.be/41khN86KxvI"
                >
                  - Jürgen Klopp Advice
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6 ">
              <div class="w-full   text-center">
                <img class="w-full z-50" src="/src/assets/images/jym.png" />
              </div>
            </div>
          </div>

          {/* down */}

          <div class="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 ">
              <div class="w-full   text-center">
                <img
                  class="w-full z-50"
                  src="/src/assets/images/recovery.png"
                />
              </div>
            </div>
            <div class="w-full sm:w-1/2 p-6 mt-6">
              <div class="align-middle">
                <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Recovery
                </h3>
                <p class="text-gray-600 mb-8">
                  Recovery – a return to a normal state of health, mind, or
                  strength.
                  <br />
                  <br />
                  <div>
                    🎫 The level or grade of the game/match <br />
                    🎫 Your injury status <br />
                    🎫 Situation – weekly match play or week long tournament
                    <br />
                    🎫 The intensity and duration of the game
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div class="p-8">
        <div class="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
          <h4 class="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
            FAQ
          </h4>
          <p class="text-center text-gray-600 text-sm mt-2">
            Here are some of the frequently asked questions
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
            <div class="flex space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-700">
                  Lorem ipsum dolor sit amet?
                </h4>
                <p class="text-gray-600 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  dignissimos. Neque eos, dignissimos provident reiciendis
                  debitis repudiandae commodi perferendis et itaque, similique
                  fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!
                </p>
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  title="Read More"
                >
                  Read More
                </a>
              </div>
            </div>

            <div class="flex space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-700">
                  Consectetur adipisicing elit?
                </h4>
                <p class="text-gray-600 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  dignissimos. Neque eos, dignissimos provident reiciendis
                  debitis repudiandae commodi perferendis et itaque, similique
                  fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!
                </p>
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  title="Read More"
                >
                  Read More
                </a>
              </div>
            </div>

            <div class="flex space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-700">
                  Neque eos, dignissimos provident reiciendis debitis?
                </h4>
                <p class="text-gray-600 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  dignissimos. Neque eos, dignissimos provident reiciendis
                  debitis repudiandae commodi perferendis et itaque, similique
                  fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!
                </p>
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  title="Read More"
                >
                  Read More
                </a>
              </div>
            </div>

            <div class="flex space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-700">
                  Repudiandae commodi perferendis et itaque?
                </h4>
                <p class="text-gray-600 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  dignissimos. Neque eos, dignissimos provident reiciendis
                  debitis repudiandae commodi perferendis et itaque, similique
                  fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!
                </p>
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  title="Read More"
                >
                  Read More
                </a>
              </div>
            </div>

            <div class="flex space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-700">
                  Similique fugiat cumque?
                </h4>
                <p class="text-gray-600 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  dignissimos. Neque eos, dignissimos provident reiciendis
                  debitis repudiandae commodi perferendis et itaque, similique
                  fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!
                </p>
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  title="Read More"
                >
                  Read More
                </a>
              </div>
            </div>

            <div class="flex space-x-8 mt-8">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                  ></path>
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-bold text-gray-700">
                  Impedit iusto vitae dolorum, nostrum fugit?
                </h4>
                <p class="text-gray-600 my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
                  dignissimos. Neque eos, dignissimos provident reiciendis
                  debitis repudiandae commodi perferendis et itaque, similique
                  fugiat cumque impedit iusto vitae dolorum. Nostrum, fugit!
                </p>
                <a
                  href="#"
                  class="text-blue-600 hover:text-blue-800 hover:underline capitalize"
                  title="Read More"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="bg-gray-200 p-4 rounded-lg text-center">
        <h3 class="text-lg font-bold">Football Score</h3>
        <div class="flex">
          <div class="w-1/2 p-2">
            <p class="font-bold">Home Team</p>
            <p class="text-4xl">3</p>
          </div>
          <div class="w-1/2 p-2">
            <p class="font-bold">Away Team</p>
            <p class="text-4xl">2</p>
          </div>
        </div>
      </div>

      <div class="flex p-4 bg-gray-200">
        <div class="w-1/3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDkZ1TeMLnWyC-R8ujl3xhynL16ZtTp3fSyNE7TQnzE1Dr1Vvjlz-SDJ83ivNTfibvGQ&usqp=CAU"
            alt="Team 1 Logo"
          />
        </div>
        <div class="w-1/3 text-center font-bold text-xl">
          <div class="flex flex-col items-center p-4 bg-gray-200 rounded-lg">
            <div class="flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDkZ1TeMLnWyC-R8ujl3xhynL16ZtTp3fSyNE7TQnzE1Dr1Vvjlz-SDJ83ivNTfibvGQ&usqp=CAU"
                alt="Team 1 Logo"
                class="w-12 h-12 mr-4"
              />
              <div class="text-3xl font-bold">Team 1</div>
            </div>
            <div class="text-2xl font-bold my-2">3</div>
            <div class="flex">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDkZ1TeMLnWyC-R8ujl3xhynL16ZtTp3fSyNE7TQnzE1Dr1Vvjlz-SDJ83ivNTfibvGQ&usqp=CAU"
                alt="Team 2 Logo"
                class="w-12 h-12 mr-4"
              />
              <div class="text-3xl font-bold">Team 2</div>
            </div>
            <div class="text-sm font-medium mt-2">Stadium Name</div>
            <div class="text-sm font-medium">Match Date</div>
          </div>
        </div>
        <div class="w-1/3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlDkZ1TeMLnWyC-R8ujl3xhynL16ZtTp3fSyNE7TQnzE1Dr1Vvjlz-SDJ83ivNTfibvGQ&usqp=CAU"
            alt="Team 1 Logo"
          />
        </div>
      </div>

      <div class="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

      {/* form */}

      {/* <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-start">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                class="flex flex-wrap no-underline hover:no-underline"
              >
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                  xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                  Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
              </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
              <div class="flex items-center justify-end">
                <button class="mx-auto lg:mx-0 hover:none gradient text-orange-400 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Action
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
      <svg
        class="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g class="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section class="container mx-auto text-center py-6 mb-12">
        <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
          Call to Action
        </h2>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 class="my-4 text-3xl leading-tight">CREATE PROFILE</h3>
        <button class="mx-auto lg:mx-0 hover:underline bg-amber-400 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Action!
        </button>
      </section>

      <div> </div>
    </div>
  );
}

export default Home;
