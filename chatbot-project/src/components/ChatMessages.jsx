import { useEffect, useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
// 4l
function useAutoScroll(dependecies) {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependecies]);

  return containerRef;
}

function ChatMessages({ chatMessages }) {
  // the code snippet of the useAutoScroll used to be here
  const chatMessageRef = useAutoScroll(chatMessages);

  // why this not working?
  const displayMessages =
    chatMessages.length === 0 ? (
      <p className="welcome-text">
        Welcome to the chatbot project! Send a message using the text below.
      </p>
    ) : (
      chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })
    );

  return (
    // 4j
    <div className="chat-messages-container" ref={chatMessageRef}>
      {displayMessages}
    </div>
  );
}

export default ChatMessages;
