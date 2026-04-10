import { useEffect, useRef } from "react";
import { chatCon } from "../contexts/chat.context";
import { Bot, LoaderCircle } from "lucide-react";
import MarkChat from "./MarkChat";
import { AuthCon } from "../contexts/auth.context";

const Chat = () => {
  const { message, loader } = chatCon();
  const { user } = AuthCon()
  const messageEndRef = useRef()

  useEffect(() => {
    messageEndRef?.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [message])

  return (
    <div className="w-full md:h-[70vh] hide-scroll h-[80vh] p-4 overflow-y-auto bg-gray-50 rounded-lg space-y-4">



      {message.map((msg, index) => (
        <div
          key={index}
          className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"
            }`}
        >

          <div className="flex items-end gap-2 md:max-w-[70%]">

            {msg.role !== "user" && (
              <div className="p-1 flex items-center justify-center rounded-full bg-gray-300 text-sm">
                <Bot />
              </div>
            )}


            <div
              className={`px-4 py-2 rounded-2xl shadow-sm whitespace-pre-wrap text-sm ${msg.role === "user"
                ? "bg-indigo-600 shadow-lg border  text-white rounded-br-none"
                : "bg-white text-gray-800 rounded-bl-none border"
                }`}
            >
              <MarkChat content={msg?.content} />

              <div ref={messageEndRef}></div>
            </div>


            {msg.role === "user" && (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm">
                U
              </div>
            )}
          </div>

        </div>
      ))}

      {
        message.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full text-center px-4">

            <h1 className="text-3xl font-bold text-gray-800 mb-2">
               Hey, {user?.username || "User"}
            </h1>

            <p className="text-gray-600 text-lg">
              How can I help you today?
            </p>

          </div>
        )
      }

      {
        loader && (
          <div className="flex items-center gap-2">
            <LoaderCircle className="animate-spin" />
            Thinking...
          </div>
        )
      }
    </div>
  );
};

export default Chat;