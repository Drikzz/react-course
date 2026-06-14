import { useState } from "react";
import { Chatbot } from "supersimpledev";
import LoaderSpinnerImage from "../assets/loading-spinner.gif";
import dayjs from "dayjs";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  // 3m
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState();

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  // 3k
  async function sendMessage() {
    // 3m
    if (isLoading || !inputText) {
      console.log("abort");
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ];

    setChatMessages(newChatMessages);
    setInputText("");

    // 3l
    const loadingChatBot = [
      ...newChatMessages,
      {
        message: <img src={LoaderSpinnerImage} className="loading-spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(loadingChatBot);
    setIsLoading(true);

    // 3k
    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: dayjs().valueOf(),
      },
    ]);

    setIsLoading(false);
  }

  function checkKey(event) {
    if (event.key === "Enter") {
      // console.log(event.target.value);
      sendMessage();
    }

    if (event.key === "Escape") {
      setInputText("");
    }
  }

  function clearMessages() {
    // localStorage.removeItem("messages");

    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        onKeyDown={checkKey}
        value={inputText}
        className="chat-input"
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button onClick={clearMessages} className="clear-button">
        Clear
      </button>
    </div>
  );
}
