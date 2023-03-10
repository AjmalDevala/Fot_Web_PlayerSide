import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import ShowScoutModal from "../redux/showScoutModal";
import { Link, useNavigate } from "react-router-dom";
import Instance from "./config/Instance";
import ReactPaginate from "react-paginate";
import "../pagenation.css"
function Scout() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token")
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(false);
  const [change, setChange] = useState(false);
  const [tempScout, setTempScout] = useState([]);
  const [connectedScout, setConnectedScout] = useState([]);


  //  Pagination......................
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const dataToRender = tempScout.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };


//search data .......................................

  const searchData = (scout) => {
    return search === ""
      ? scout
      : scout.scoutId.fullname.toLowerCase().includes(search) ||
          scout.currentClub.toLowerCase().includes(search) ||
          scout.nationality.toLowerCase().includes(search)||
          scout.experience.toString().includes(search.toLowerCase());

  };
  const [scout, setScout] = useState([]);
  useEffect(() => {
    Instance
      .get(`/admin/allScout`,{
        headers:{Authorization:`Bearer ${token}`}
      })
      .then((response) => {
        setScout(response.data.scout);
        setTempScout(response.data.scout);
        setUser(response.data.user[0].premium);
        connected();
      });
  }, [change]);

  const connected = () => {
    const token = localStorage.getItem("token")
    Instance
      .get(
        `/admin/connectedScoutCheck`,{
          headers:{Authorization:`Bearer ${token}`}
        })
      .then((response) => {
        setConnectedScout(response.data.connectedScout);
      });
  };

  const Connect = (id) => {
    const token = localStorage.getItem("token")
    Instance
    .post(`/connectScout?scoutId=${id}`,{},{
      headers:{Authorization:`Bearer ${token}`}
    })
    .then((response) => {
      change === true ? setChange(false) : setChange(true);
      toast.success(response.data.msg);
      })
      .catch((error) => {
        toast.error(error.response.data.error);
      });
  };
  const filterByExperience = (experience) => {
    let filtered = scout.filter((data) => data.experience > experience );
    setTempScout(filtered);
  };
  const filterByCountry = (india) => {
    let filtered = scout.filter((data) => data.nationality.length< india );
    setTempScout(filtered);
  };

  const all = () => {
    setTempScout(scout);
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
              <div className="flex flex-wrap justify-center text-center mb-8">
                <div className="w-full lg:w-6/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold ">
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
            {user && (
              <>
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
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() =>all()}
                    className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                  >
                    All Scout
                  </button>
                  <button
                    onClick={() => filterByExperience(4)}
                    className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                  >
                    High experience
                  </button>
                  {/* <button
                    onClick={() => filterByCountry("india")}
                    className="mx-auto lg:mx-0 bg-blue-500/40 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline  transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Other Country
                  </button> */}
                 
                </div>
              </>
            )}

            <div className="bg-white">
              <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                {user ? (
                  <div className="mt-1 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {dataToRender.filter(searchData).map((scout) => (
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
                          {connectedScout.includes(scout.scoutId._id) ? (
                            <button
                              onClick={() => navigate("/chat")}
                              className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                              Message
                            </button>
                          ) : (
                            <button
                              onClick={() => Connect(scout.scoutId._id)}
                              className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                            >
                              Connect!
                            </button>
                          )}
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
                            {connectedScout.includes(scout.scoutId._id) ? (
                              <button
                                onClick={() => navigate("/chat")}
                                className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                              >
                                Message
                              </button>
                            ) : (
                              <button
                                onClick={() => Connect(scout.scoutId._id)}
                                className="mx-auto lg:mx-0 hover:none bg-emerald-200 text-gray-800 font-bold box-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                              >
                                Connect!
                              </button>
                            )}
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
      <ReactPaginate
        pageCount={Math.ceil(tempScout.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        previousLabel="Previous"
        nextLabel="Next"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </div>
  );
}

export default Scout;
