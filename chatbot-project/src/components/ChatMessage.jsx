import RobotProfileImage from "../assets/robot.png";
// import UserProfileImage from "../assets/user.png";
import UserProfileImage from "../assets/UserProfileImage.jpg";
import dayjs from "dayjs";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, time }) {
  // const message = props.message;
  // const sender = props.sender;
  // const {message, sender} = props;

  // if (sender === 'robot') {
  //   return (
  //   <div>
  //     { sender === 'robot' && <img src="robot.png" width="50" />}
  //     {message}
  //   </div>
  //   );
  // }
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">
        <p className="chat-message">{message}</p>
        {time && <p className="chat-time">{dayjs(time).format("h:ma")}</p>}
      </div>
      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
