import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/src/assets/images/6.jpg  ",
    "/src/assets/images/5.jpg ",
    "/src/assets/images/7.jpg",
    "/src/assets/images/6.jpg  ",
    "/src/assets/images/8.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  function handlePreviousClick() {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  }

  function handleNextClick() {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  }
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  return (
    <div className="bg-cyan-400/70">

      { !token ? (
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
      ) : (
        <>  

        {/* <div>{name}</div> */}

          <div className="relative w-full h-96 overflow-hidden bg-gray-900">
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
            <button
              className="absolute bottom-0 left-0 m-7 bg-white text-gray-900 p-3 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline"
              onClick={handlePreviousClick}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.707 5. 293l-5 5a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M7 14a1 1 0 012 0v-2.5a.5.5 0 001 0V14a1 1 0 01-2 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              className="absolute bottom-0 right-0 m-6 bg-white text-gray-900 p-3  rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:shadow-outline"
              onClick={handleNextClick}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M7.293 5. 293a1 1 0 011.414 0L10 7.586l2. 293-2. 293a1 1 0 111. 414 1.414L11.414 10l2. 293 2. 293a1 1 0 01-1.414 1.414L10 11.414 7. 707 14.707a1 1 0 01-1.414-1.414L8.586 10 6. 293 7.707a1 1 0 010-1. 414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          </>
      )}

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
                      Fit4Football is a player welfare and prevention programme
                      for our everyday athletes.
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
                    <img
                      class="w-full z-50"
                      src="/src/assets/images/trining.png"
                    />
                  </div>
                </div>
              </div>

              <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 p-6 ">
                  <div class="w-full   text-center">
                    <img
                      class="w-full z-50"
                      src="/src/assets/images/goly.png"
                    />
                  </div>
                </div>
                <div class="w-full sm:w-1/2 p-6 mt-6">
                  <div class="align-middle">
                    <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                      Player Profiling
                    </h3>
                    <p class="text-gray-600 mb-8">
                      Profiling is a great coaching tool to develop an overview
                      of a player as an individual and as a sports person. It
                      also assists in identifying strengths and weaknesses.
                      <br />
                      <br />
                      <div>
                        🎫 Personal details, including emergency contact
                        information <br />
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
                      The athlete environment is a key component of the
                      Fit4Football programme, consisting of several key areas
                    </h1>
                    <p>
                      🎫 Respect, responsibility and integrity <br />
                      🎫 Tournament guidelines <br />
                      🎫 Health, safety and wellbeing for football in New
                      Zealand <br />
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

          <section class="bg-white border-b py-8">
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
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
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
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
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
                      Aliquam at ipsum eu nunc commodo posuere et sit amet
                      ligula.
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
          </section>

          <svg
            class="wave-top"
            viewBox="0 0 1439 147"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-1.000000, -14.000000)"
                fill-rule="nonzero"
              >
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
            <h3 class="my-4 text-3xl leading-tight">CREATE  PROFILE</h3>
            <button onClick={()=>{navigate("/profile")}}  class="mx-auto lg:mx-0 hover:underline bg-amber-400 text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Action!
            </button>
          </section>
    
    </div>
  );
}

export default Home;
