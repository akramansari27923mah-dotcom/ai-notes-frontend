import { EllipsisVertical, LoaderCircle, Send, Trash, X } from "lucide-react";
import { getChatSupportHandel } from "../api/api";
import { useEffect, useRef, useState } from "react";
import MarkChat from "../chatComponents/MarkChat";
import { AuthCon } from "../contexts/auth.context";

const ChatSupport = () => {
  const [formValue, setFormValue] = useState("");
  const [message, setMessage] = useState([]);
  const [loader, setLoader] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [openDiloge, setOpenDiloge] = useState(false);
  const messageEndRef = useRef(null);
  const { user } = AuthCon();

  useEffect(() => {
    const msg = sessionStorage.getItem("message");
    if (msg) {
      setMessage(JSON.parse(msg));
    }
  }, []);
  
  useEffect(() => {
    if (message.length !== 0) {
      sessionStorage.setItem("message", JSON.stringify(message));
    }
  }, [message]);

  const sendMessage = async () => {
    if (!formValue.trim()) return;

    setMessage((prev) => [
      ...prev,
      {
        role: "user",
        content: formValue,
      },
    ]);
    setFormValue("");
    setLoader(true);

    try {
      const res = await getChatSupportHandel(
        formValue,
        message,
        user?.username,
      );
      setMessage((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res?.reply,
        },
      ]);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    messageEndRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [message]);

  const handelKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const deleteChat = () => {
   sessionStorage.removeItem('message')
   setMessage([])
  };

  return (
    <div>
      <img
        onClick={() => setShowChat(!showChat)}
        className={`fixed bottom-2 right-2 animate__animated ${!showChat && 'animate__jello'} animate__infinite w-[70px] hover:scale-105 transition-all duration-300 cursor-pointer`}
        src="msg.png"
        alt=""
      />

      {showChat && (
        <div
          className={`fixed md:right-[70px] md:bottom-[70px] ${showChat ? "animate__zoomIn" : "animate__zoomOut"} animate__animated  border border-gray-200 shadow-lg bottom-0 md:h-[500px] h-screen w-[400px] rounded-lg bg-white`}
        >
          <div className="flex justify-between p-2 items-center border-b">
            <div className="flex items-center justify-center gap-1">
              <img
                className="w-10 h-10 object-cover rounded-full"
                src="logoChat.png"
                alt=""
              />
              <div>
                <span className="text-xl font-semibold">NoteCraft</span>
                <div className="flex justify-center items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-sm text-gray-600">
                    {loader ? "Typing..." : " Online . Always here to help"}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <EllipsisVertical
                className="cursor-pointer"
                onClick={() => setOpenDiloge(!openDiloge)}
              />
            </div>
          </div>

          {openDiloge && (
            <div className="absolute right-6 top-12 bg-white p-2 border rounded-b-lg rounded-tl-lg shadow-lg space-y-2">
              <div
                className="flex justify-center items-center bg-red-500 text-white px-4 py-2 rounded-lg gap-1 cursor-pointer"
                onClick={() => {setShowChat(false), setOpenDiloge(false)}}
              >
                <X size={20} />
                <span>Close</span>
              </div>

              <div
                className="flex justify-center items-center bg-red-500 text-white px-4 py-2 rounded-lg gap-1 cursor-pointer"
                onClick={deleteChat}
              >
                <Trash size={20} />
                <span>Chat</span>
              </div>
            </div>
          )}

          {/* Chat section */}
          <div className="md:h-[380px] h-[550px] px-3 overflow-scroll hide-scroll">
            {message.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={` p-2 ${msg.role === "user" ? "bg-indigo-500 my-2 rounded-t-lg rounded-bl-lg text-white" : "bg-gray-50 w-[85%] text-black mb-2 rounded-t-lg rounded-br-lg"}`}
                >
                  <MarkChat content={msg.content} />
                </div>
              </div>
            ))}

            <div ref={messageEndRef}></div>
            {loader && (
              <div className="flex items-center gap-2 mt-2 animate__animated animate__flash animate__slow animate__infinite">
                <LoaderCircle className="animate-spin" />
                Thinking...
              </div>
            )}
          </div>

          {/* Input section */}
          <div className="flex justify-center sticky bottom-0 items-center w-full md:px-1  ">
            <input
              onChange={(e) => setFormValue(e.target.value)}
              value={formValue}
              onKeyDown={handelKeyPress}
              type="text"
              disabled={loader}
              className="md:w-full w-[370px] p-3  outline-none border rounded-full border-gray-300 bg-white shadow-lg"
              placeholder="Type your message..."
            />
            <div
            disabled={loader || !formValue.trim()}
            className="absolute  md:right-3 right-6 p-2 rounded-full bg-indigo-600 flex justify-center items-center cursor-pointer disabled:opacity-80 disabled:cursor-not-allowed">
              <Send size={20} onClick={sendMessage} color="white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatSupport;
