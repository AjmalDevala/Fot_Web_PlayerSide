import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import ShowScoutModal from "../redux/showScoutModal";
function Scout() {
  const userId = localStorage.getItem("userId");
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(false);

  const searchData = (scout) => {
    return search === ""
      ? scout
      : scout.scoutId.fullname.toLowerCase().includes(search) ||
          scout.currentClub.toLowerCase().includes(search);
  };
  const [scout, setScout] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:7007/api/admin/allScout?userId=${userId}`)
      .then((response) => {
        setScout(response.data.scout);
        setUser(response.data.user[0].premium);
      });
  }, []);

  const Connect = (id) => {
    const userId = localStorage.getItem("userId");
    axios
      .post(
        `http://localhost:7007/api/connectScout?userId=${userId}&scoutId=${id}`
      )
      .then((response) => {
        toast.success(response.data.msg)
        SetWaiting(response.data.waiting)
        console.log(SetWaiting);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };
  return (
    <div>
      <Toaster position="top-center"></Toaster>
      {/* <ShowScoutModal/> */}
      <link
        rel="stylesheet"
        href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
      />

      <div className="flex items-center justify-center min-h-screen bg-white ">
        <div className="flex flex-col">
          <div className="flex flex-col mt-6">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">
                    Meet the Scout
                  </h1>

                  {/* <!-- Description --> */}
                  <p className="text-gray-700 text-lg font-light">
                    A player scout typically attends as many football matches as
                    possible to evaluate targets first hand. Scouts who wish to
                    identify promising young players typically attend
                    lower-league club games,.
                  </p>
                  <p className="text-center text-bold">Connect and Message!</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <form className="w-full max-w-md ">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
                    onChange={(e) => {
                      let searchValue = e.target.value.toLocaleLowerCase();
                      setSearch(searchValue);
                    }}
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                  <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {user ? (
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {scout.filter(searchData).map((scout) => (
                      <div key={scout?.id} className="group relative">
                        <Link to={"/singlePage"} state={scout.scoutId._id}>
                          <div className="min-h-80  aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 lg:aspect-none lg:h-80">
                            <img
                              src={scout?.profileUrl}
                              alt="add"
                              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                          </div>
                        </Link>
                        <p className="mt-1 text-xl text-blue-600 flex justify-center">
                          {scout?.position}
                        </p>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-lg text-bold text-">
                              {scout?.scoutId.fullname}
                            </h3>
                            <div className="flex">
                              <h4 className="text-justify font-bold text-neutral-900">
                                Age:
                              </h4>
                              <span className="ml-1">{scout?.age}</span>
                            </div>
                            <div className="flex">
                              <h4 className="text-base font-bold text-neutral-900">
                                Experience:
                              </h4>
                              <span className="ml-2 font-bold text-teal-500">
                                {scout?.experience} years
                              </span>
                            </div>
                          </div>
                          <p className="text-sm font-medium text-gray-900">
                            {scout?.nationality}
                          </p>
                        </div>
                        <p className="text-sm flex justify-center  font-bold text-blue-600 ">
                          {scout?.currentClub}
                        </p>
                        <div className="flex justify-center">
                          <button
                            onClick={() => Connect(scout.scoutId._id)}
                            className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                          >
                            Connect!
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {scout
                      .filter(searchData)
                      .slice(0, 2)
                      .map((scout) => (
                        <div key={scout?.id} className="group relative">
                          <Link to={"/singlePage"} state={scout.scoutId._id}>
                            <div className="min-h-80  aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-80 lg:aspect-none lg:h-80">
                              <img
                                src={scout?.profileUrl}
                                alt="add"
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                              />
                            </div>
                          </Link>
                          <p className="mt-1 text-xl text-blue-600 flex justify-center">
                            {scout?.position}
                          </p>
                          <div className="mt-4 flex justify-between">
                            <div>
                              <h3 className="text-lg text-bold text-">
                                {scout?.scoutId.fullname}
                              </h3>
                              <div className="flex">
                                <h4 className="text-justify font-bold text-neutral-900">
                                  Age:
                                </h4>
                                <span className="ml-1">{scout?.age}</span>
                              </div>
                              <div className="flex">
                                <h4 className="text-base font-bold text-neutral-900">
                                  Experience:
                                </h4>
                                <span className="ml-2 font-bold text-teal-500">
                                  {scout?.experience} years
                                </span>
                              </div>
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                              {scout?.nationality}
                            </p>
                          </div>
                          <p className="text-sm flex justify-center  font-bold text-blue-600 ">
                            {scout?.currentClub}
                          </p>
                          <div className="flex justify-center">
                            <button
                              onClick={() => Connect(scout.scoutId._id)}
                              class="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                              Connect!
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {user ? (
            ""
          ) : (
            <div className="flex justify-center">
              <Link to={"/pricing"}>
                <button className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  see more Scouts
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scout;
