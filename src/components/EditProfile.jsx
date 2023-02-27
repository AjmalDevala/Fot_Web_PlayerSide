import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "./layout/Navbar";
import moment from "moment";

//edit profile
const EditProfile = () => {
  useEffect(() => {
    showProfile();
    Upload();
  }, []);

  const showProfile = async () => {
    await axios
      .get("http://localhost:7007/api/showProfile", {
        headers: { Authorization: `Bearer ${token} ` },
      })
      .then((res) => {
        setUser(res.data.user);
        setFullName(res.data.user.fullname);
        setEmail(res.data.user.email);
        setPhone(res.data.user.phone);
        setUserData(res.data.userData);
        setProfileUrl(res.data.userData.profileUrl);
        setPosition(res.data.userData.position);
        setDataofbirth(res.data.userData.dateOfBirth);
        setAge(res.data.userData.age);
        setHeight(res.data.userData.height);
        setFoot(res.data.userData.foot);
        setCurrentteam(res.data.userData.currentTeam);
        setPreviousteam(res.data.userData.previousTeam);
        setLanguage(res.data.userData.language);
        setNationality(res.data.userData.nationality);
        setAwards(res.data.userData.awards);
        setAddress(res.data.userData.address);
        setDescription(res.data.userData.description);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
      });
  };

 

  //ceating and updating

  const cloudAPI = "dqrsgqgot";
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [position, setPosition] = useState("");
  const [dateOfBirth, setDataofbirth] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [foot, setFoot] = useState("");
  const [currentTeam, setCurrentteam] = useState("");
  const [previousTeam, setPreviousteam] = useState("");
  const [language, setLanguage] = useState("");
  const [nationality, setNationality] = useState("");
  const [awards, setAwards] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({});
  const token = localStorage.getItem("token");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", profile);
    formData.append("upload_preset", "fotwebcloud");
    await axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudAPI}/image/upload`,
        formData
      )
      .then(async (res) => {
        const profileUrl = res.data.secure_url;
        console.log(res.data.secure_url);
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        await axios
          .post(
            `http://localhost:7007/api/editProfile/${userId}`,
            {
              profileUrl,
              position,
              dateOfBirth,
              nationality,
              age,
              height,
              foot,
              currentTeam,
              previousTeam,
              language,
              awards,
              address,
              description,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          )
          .then((response) => {
            if (response) {
              toast.success("Profile Added Successfully");
              navigate("/profile");
            }
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              toast.error(error.response.data.error);
            } else {
              toast.error(error.message);
            }
          });
      });
  };

  const Upload = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    await axios
      .post(
        "http://localhost:7007/api/editAccount",
        {
          fullname,
          email,
          phone,
        },
        {
          headers: { Authorization: `Bearer ${token} ` },
        }
      )
      .then((res) => {
        const { msg } = res.data;
        toast.success(msg);
      });
  };

  console.log(dateOfBirth,'topppppppppppppppppp')
  return (
    <div>
      <>
        <Navbar />

        <Toaster position="top-center"></Toaster>

        <section className="max-w-4xl p-6 mx-auto bg-indigo-600  rounded-md shadow-xl dark:bg-gray-800 mt-20">
          <h1 className="text-xl font-bold text-white capitalize dark:text-white">
            Profile settings
          </h1>
          <div className="flex justify-end">
            <button
              onClick={() => {
                navigate("/profile");
              }}
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-green-500 rounded-md hover:bg- focus:outline-none focus:bg-gray-600"
            >
              Back
            </button>
          </div>
          <form onSubmit={handleUpload}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-white">
                  Profile
                </label>
                <div className=" flex justify-center px-3  pb-4 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <div className="flex justify-center">
                      <img
                        class="w-20 border-4 border-white rounded-full"
                        src={profileUrl}
                        alt="notget"
                      />
                    </div>
                    <div className="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span className="">Upload a your photo</span>
                        <input
                          onChange={(e) => {
                            setProfile(e.target.files[0]);
                          }}
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Position
                </label>
                <select
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  value={position}
                  onChange={(e) => {
                    setPosition(e.target.value);
                  }}
                >
                  <option>{position}</option>
                  <option>Forward</option>
                  <option>Winger</option>
                  <option>Central Midfielder</option>
                  <option>Full-back</option>
                  <option>Goalkeeper</option>
                </select>
              </div>

              {dateOfBirth.length >1 ? (
                
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Date of birth
                  </label>
                  <input
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDataofbirth(e.target.value);
                    }}
                    id=""
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              ) : (
                <div>
                  <label
                    className="text-white dark:text-gray-200"
                    htmlFor="passwordConfirmation"
                  >
                    Date of birth
                  </label>
                  <input
                    value={dateOfBirth}
                    onChange={(e) => {
                      setDataofbirth(e.target.value);
                    }}
                    id=""
                    type="date"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  />
                </div>
              )}

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Age
                </label>
                <input
                  placeholder=""
                  required
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  id="number"
                  type="age"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  HEIGHT
                </label>
                <input
                  required
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                  }}
                  id="number"
                  type="age"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Preferred Foot
                </label>
                <select
                  className="block w-full px-4 py-2 mt-2  text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  defaultValue={foot}
                  onChange={(e) => {
                    setFoot(e.target.value);
                  }}
                >
                  <option>{foot}</option>
                  <option>RightFoot</option>
                  <option>LeftFoot</option>
                </select>
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="emailAddress"
                >
                  CurrentTeam
                </label>
                <input
                  required
                  value={currentTeam}
                  onChange={(e) => {
                    setCurrentteam(e.target.value);
                  }}
                  id="text"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label className="text-white dark:text-gray-200" for="password">
                  Previous Team
                </label>
                <input
                  value={previousTeam}
                  onChange={(e) => {
                    setPreviousteam(e.target.value);
                  }}
                  id="text"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label className="text-white dark:text-gray-200" for="password">
                  Language
                </label>
                <input
                  value={language}
                  onChange={(e) => {
                    setLanguage(e.target.value);
                  }}
                  id="text"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  NATIONALITY *
                </label>
                <input
                  value={nationality}
                  onChange={(e) => {
                    setNationality(e.target.value);
                  }}
                  id="number"
                  type="age"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  Awards *
                </label>
                <input
                  value={awards}
                  onChange={(e) => {
                    setAwards(e.target.value);
                  }}
                  id="number"
                  type="age"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  ADDRESS
                </label>
                <textarea
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  id="textarea"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  for="passwordConfirmation"
                >
                  About you
                </label>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  id="textarea"
                  type="textarea"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </section>

        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-xl dark:bg-gray-800 mt-20">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Account settings
          </h2>

          <form onSubmit={Upload}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="username"
                >
                  Player name
                </label>
                <input
                  value={fullname}
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  id="username"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="emailAddress"
                >
                  Email Address
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  id="emailAddress"
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  for="password"
                >
                  phone number
                </label>

                <input
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  type="tel"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button
                type="submit"
                className="px-6 py-2 leading-5  text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </>
    </div>
  );
};

export default EditProfile;
