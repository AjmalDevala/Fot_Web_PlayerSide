import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

function Chat() {
  const [connectedScout, setConnectedScout] = useState([]);
  const [message, setMessages] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [inputMessage, setInputMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const token = localStorage.getItem("token");
  const fullname = localStorage.getItem("fullname");
  const { userId } = localStorage.getItem;
  const scrolRef = useRef();
  const socket = useRef();

  useEffect(() => {
    const connectedScout = async () => {
      const { data } = await axios.post(
        "http://localhost:7007/api/admin/connectedScout",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setConnectedScout(data.Following);
    };
    connectedScout();
  }, []);

  const handleSelect = (user) => {
    setCurrentChat(user);
  };

  useEffect(() => {
    const getMessages = async (user) => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        `http://localhost:7007/api/admin/getMessages?to=${user}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessages(data);
    };
    getMessages(currentChat._id);
  }, [currentChat._id]);

  useEffect(() => {
    scrolRef.current.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    if (currentChat !== "") {
      socket.current = io("http://localhost:7007");
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
    });

    let data = {
      to: currentChat._id,
      message: inputMessage,
    };

    await axios.post("http://localhost:7007/api/admin/sendMessage", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(message.concat(messages));
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-receive", (msg) => {
        setArrivalMessage({ myself: false, message: msg });
      });
    }
  }, [arrivalMessage]);

  useEffect(() => {
    arrivalMessage && setMessages((pre) => [...pre, arrivalMessage]);
  }, [arrivalMessage]);

  return (
    <div>
      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <div class="flex flex-row items-center justify-center h-12 w-full">
              <div class="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                <svg
                  class="w-6 h-6"
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
              <div class="ml-2 font-bold text-2xl">Chat</div>
            </div>
            <div class="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
              <div class="h-20 w-20 rounded-full border overflow-hidden">
                <img
                  src="https://avatars3.githubusercontent.com/u/2763884?s=128"
                  alt="Avatar"
                  class="h-full w-full"
                />
              </div>
              <div class="text-sm font-semibold mt-2">Scout </div>
              <div class="text-xs text-gray-500"></div>
              <div class="flex flex-row items-center mt-3">
                <div class="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                  <div class="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                </div>
                <div class="leading-none ml-1 text-xs">Active</div>
              </div>
            </div>
            <div class="flex flex-col mt-8">
              <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Active Conversations</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                  4
                </span>
              </div>
              <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                
                <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                  <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                    N
                  </div>
                  <div class="ml-2 text-sm font-semibold">nihal </div>
                </button>
                
              </div>
            </div>
          </div>
          <div class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div class="flex flex-col h-full overflow-x-auto mb-4">
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-12 gap-y-2">
                    {message.map((msg) =>
                      msg.myself ? (
                        <div
                          key={msg._id}
                          className="col-start-6 col-end-13 p-3 rounded-lg"
                        >
                          <div className="flex items-center justify-start flex-row-reverse">
                            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                              <div>{msg.message}</div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div
                          key={msg.message}
                          className="col-start-1 col-end-8 p-3 rounded-lg"
                        >
                          <div className="flex flex-row items-center">
                            <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                              <div>{msg.message}</div>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                    <div ref={scrolRef} />
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div class="flex-grow ml-4">
                  <div class="relative w-full">
                    <input
                      onChange={(e) => setInputMessage(e.target.value)}
                      type="text"
                      class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                      <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="ml-4">
                  <button
                    onClick={sendmsg}
                    class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                  >
                    <spanv className=" ">Send</spanv>
                    <span class="ml-2">
                      <svg
                        class="w-4 h-4 transform = rotate-45 -mt-px"
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
