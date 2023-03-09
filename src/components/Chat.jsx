import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import InputEmoji from "react-input-emoji";
import { BiVideoPlus, BiImageAdd } from "react-icons/bi";
import { toast, Toaster } from "react-hot-toast";
import Instance from "./config/Instance";
import dateFormat, { masks } from "dateformat";

const toastConfig = {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

function Chat() {
  const [connectedScout, setConnectedScout] = useState([]);
  const [count, setScoutCount] = useState("");
  const [currentChat, setCurrentChat] = useState({});
  const [message, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [unread, setUnread] = useState("");
  const [image, setImage] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const token = localStorage.getItem("token");
  const fullname = localStorage.getItem("fullname");
  const userId = localStorage.getItem("userId");
  const scoutId = currentChat?._id;
  const cloudAPI = "dqrsgqgot";
  const scrolRef = useRef();
  const socket = useRef();
  const imageRef = useRef();
  const videoRef = useRef();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const connectedScout = async () => {
      const { data } = await Instance.post(
        "/admin/connectedScout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setConnectedScout(data.connectedScout);
      setScoutCount(data.connectedScout.length);
    };
    connectedScout();
  }, []);

  const handleSelect = (scout) => {
    setCurrentChat(scout);
  };

  const UnreadMsg = async () => {
    const token = localStorage.getItem("token");
    const { data } = await Instance.get("/admin/userUnread", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUnread(data.count);
  };

  useEffect(() => {
    const getMessages = async (scoutId) => {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const { data } = await Instance.get(
        `/admin/getMessage/${userId}/${scoutId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(data);
    };
    getMessages(currentChat._id);
    UnreadMsg();
  }, [currentChat._id]);

  useEffect(() => {
    scrolRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    if (currentChat !== "") {
      // socket.current = io("http://localhost:7007");
      socket.current = io("https://fotweb.evotym.site/api");
      socket.current.emit("addUser", userId);
    }
  }, [userId]);

  const sendmsg = async () => {
    const messages = {
      myself: true,
      message: inputMessage,
    };

    socket.current.emit("send-msg", {
      to: currentChat._id,
      message: inputMessage,
      type: "text",
    });

    let data = {
      to: currentChat._id,
      from: userId,
      message: inputMessage,
      type: "text",
    };
    await Instance.post("/admin/sendMessage", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(message.concat(messages));
    setInputMessage("");
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (data) => {
        setArrivalMessage({
          myself: false,
          message: data.message,
          type: data.type,
        });
      });
    }
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage && setMessages((pre) => [...pre, arrivalMessage]);
  }, [arrivalMessage]);

  //Sending Media through messages
  const UploadFile = async () => {
    if (videoFile === null && image === null) {
      return;
    }
    const type = !image ? "video" : "image";
    const file = !image ? videoFile : image;
    if (file.size > 7000000) {
      toast.info("🥵 Seems like a big file, take some time", toastConfig);
    }
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudAPI}/${type}/upload`;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fotwebcloud");
    data.append("cloud_name", "dqrsgqgot");
    try {
      const res = await fetch(cloudinaryUrl, {
        method: "post",
        body: data,
      });
      const json = await res.json();
      const url = json.url;

      const messages = {
        myself: true,
        message: url,
        type: type,
      };
      socket.current.emit("send-msg", {
        to: currentChat._id,
        message: url,
        type: type,
      });
      let fileData = {
        to: currentChat._id,
        from: userId,
        message: url,
        type,
      };
      await axios.post(
        "http://localhost:7007/api/admin/sendMessage",
        fileData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(message.concat(messages));
    } catch (err) {
      toast.error("Oops, uploading failed");
    }
  };

  return (
    <div>
      <Toaster position="top-center"></Toaster>
      <div className="flex h-screen antialiased text-gray-800">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-2 w-48 bg-white flex-shrink-0">
            <div className="flex flex-row items-center justify-center h-12 w-full">
              <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 font-bold text-2xl">Chat</div>
            </div>
            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-36 py-6 px-4 rounded-lg">
              <div className="h-20 w-15 rounded-full border overflow-hidden">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  className="h-full w-full"
                />
              </div>
              <div className="text-sm font-semibold mt-2">
                {currentChat.fullname}{" "}
              </div>
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Notification</span>
                <span className="flex items-center justify-center ml-2 bg-green-400 h-4 w-4 rounded-full">
                  {unread}
                </span>
              </div>
              <div className="flex flex-row items-center mt-3">
                <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div className="leading-none ml-1 text-xs">Active</div>
              </div>
            </div>
            <div className="flex flex-col mt-8">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  {count}
                </span>
              </div>

              <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                {connectedScout.map((Connect) => (
                  <button
                    onClick={() => handleSelect(Connect)}
                    className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
                  >
                    <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                      {Connect.fullname[0]}
                    </div>
                    <div className="ml-2 text-sm font-semibold online-dot">
                      {Connect.fullname}{" "}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* <div
            ref={scroll}
            key={id}
            className={message.senderId === currentUser ? "own" : "message"}
          >
            {message.type === "text" && (
              <span>{message.text ? message.text : ""}</span>
            )}
            {message.type === "image" && <img src={message.text}></img>}
            {message.type === "video" && (
              <video src={message.text} controls></video>
            )}
            <span className="date">{format(message.createdAt)}</span>
          </div> */}

          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-screen">
                  <div className="grid grid-cols-12 gap-y-2">
                    {message.map((msg) =>
                      msg.myself ? (
                        <div
                          key={msg._id}
                          className="col-start-6 col-end-13 p-3 rounded-lg"
                        >
                          <div className="flex items-center justify-start flex-row-reverse">
                            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                              {msg?.type === "video" ? (
                                <video src={msg.message} controls></video>
                              ) : msg.type === "image" ? (
                                <img src={msg.message}></img>
                              ) : (
                                <div className="text-base font-semibold">
                                {msg.message ? msg.message : ""}
                              </div>
                              )}
                                <div className=" flex justify-end">
                                <p className="text-xs text-slate-500">
                                  {dateFormat(msg.createdAt, "shortTime")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={msg._id}
                          className="col-start-1 col-end-8 p-3 rounded-lg"
                        >
                          <div className="flex flex-row items-center">
                            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                              {msg?.type === "video" ? (
                                <video src={msg.message} controls></video>
                              ) : msg.type === "image" ? (
                                <img src={msg.message}></img>
                              ) : (
                                <div className="text-base font-semibold">
                                  {msg.message ? msg.message : ""}
                                </div>
                              )}
                              <div className=" flex justify-end">
                                <p className="text-xs text-slate-400">
                                  {dateFormat(msg.createdAt, "shortTime")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    <div ref={scrolRef} />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow ml-4">
                  <div className="relative w-full">
                    <input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      type="text"
                      className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <InputEmoji
                        value={inputMessage}
                        onChange={setInputMessage}
                      />
                    </button>

                    <div
                      style={{
                        display: "block",
                        textAlign: "center",
                        height: "max-content",
                        position: "absolute",
                        marginTop: "-7em",
                        marginLeft: "-0.7em",
                      }}
                    >
                      <div
                        onClick={() => imageRef.current.click()}
                        style={{
                          backgroundColor: "#FFFFFF",
                          padding: "5px",
                          borderRadius: "50%",
                          // marginBottom: "0.1em",
                        }}
                      >
                        <BiImageAdd
                          style={{ fontSize: "2em", color: "#21F052" }}
                        />
                        <input
                          disabled={videoFile}
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          type="file"
                          id="file"
                          ref={imageRef}
                          style={{ display: "none" }}
                          accept="image/x-png,image/gif,image/jpeg"
                        />
                      </div>

                      <div
                        onClick={() => videoRef.current.click()}
                        style={{
                          backgroundColor: "#FFFFFF",
                          padding: "5px",
                          borderRadius: "50%",
                          marginBottom: "0.2em",
                        }}
                      >
                        <BiVideoPlus
                          style={{ fontSize: "2em", color: "#EC4768" }}
                        />
                        <input
                          disabled={image}
                          onChange={(e) => {
                            setVideoFile(e.target.files[0]);
                          }}
                          type="file"
                          id="file"
                          ref={videoRef}
                          style={{ display: "none" }}
                          accept="video/mp4,video/x-m4v,video/*"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() =>
                      inputMessage === "" ? UploadFile() : sendmsg()
                    }
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <spanv className=" ">Send</spanv>
                    <span className="ml-2">
                      <svg
                        className="w-4 h-4 transform = rotate-45 -mt-px"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
