import { useState, useEffect } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import "./App.css";

function App() {
  const time = dayjs().valueOf();
  // const currentTime = dayjs(time).format("h:mma");
  console.log(time);
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );
  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  // 5h
  useEffect(() => {
    Chatbot.addResponses({
      wassup: "wassup foo",
      dap: "got u booboo honeybunch",
      "awh hell na": "u a homophobic person",
    });
  }, []);

  // 5j
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
