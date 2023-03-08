import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Instance from "./config/Instance";
import Navbar from "./layout/Navbar";

function SinglePage() {
    const token = localStorage.getItem("token")
    const navigate =useNavigate()
    const location =useLocation()
    const scoutId =location?.state

    const [scout, setScout] = useState([]);
    useEffect(() => {
      Instance.get(`/singleScout/${scoutId}`,{
        headers:{Authorization:`Bearer ${token}`}
      })
      .then((response) => {
        setScout(response.data.scout);
      });
    }, []);

  return (
    <div>
      <Navbar/>
      <div class="container mx-auto my-60">
        <div>
          <div class="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
            <div class="flex justify-center">
              <img
                src={scout?.profileUrl}
                alt="som"
                class=" object-contain mx-auto absolute -top-36 w-48 h-48 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div class="mt-20">
              <h1 class="font-bold text-center text-3xl text-gray-900">
              {scout.scoutId?.fullname}
              
              </h1>
              <p class="text-center text-sm text-gray-400 font-medium">
               football Scout
              </p>
              <p>
                <span></span>
              </p>
              <div class="my-5 px-6">
                <a
                  href="#"
                  class="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white"
                >
                  Connect with <span class="font-bold">@{scout.scoutId?.fullname}</span>
                </a>
              </div>

              <div class="w-full">
                <h3 class="font-medium text-gray-900 text-left px-6">
                  Recent activites
                </h3>
                <div class="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Scouting Experience
                    <span class="text-gray-500 text-base font-extrabold ml-2">{scout?.experience} years</span>
                  </a>

                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Scout Curent Club :
                    <span class="text-gray-500 font-bold text-xs ml-2">{scout?.currentClub}</span>
                  </a>

                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                   Scout Age :
                    <span class="font-bold">#{scout?.age}</span>
                  </a>

                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                   Scout Past Clubs :
                    <span class="text-gray-500 ml-2 text-xs">{scout?.pastClub}</span>
                  </a>

                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Scout language :
                    <span class="text-gray-500 ml-3 text-xs">{scout?.language}</span>
                  </a>
                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    Nationality :
                    <span class="text-gray-500 ml-3 text-xs">{scout?.nationality}</span>
                  </a>
                  <a
                    href="#"
                    class="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3  block hover:bg-gray-100 transition duration-150 overflow-hidden"
                  >
                    <img
                      src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                      alt=""
                      class="rounded-full h-6 shadow-md inline-block mr-2"
                    />
                    profile updated at :
                    <span class="text-gray-500 ml-2 text-xs">{scout?.scoutId?.updatedAt}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
