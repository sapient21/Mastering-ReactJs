import  RobotProfileImage  from "../assets/my-notion-face-portrait-robot.png";
import  UserProfileImage  from "../assets/miles morales.jpg";

export function ChatMessage(/*props*/ { message, sender }) {
  //const message = props.message;
  //const sender = props.sender;
  //const { message, sender } = props;

  /*if (sender === "robot") {
          return (
            // JSX CODE
            <div>
              <img
                src="./Assets/images/ChatGPT Image Aug 8, 2025, 11_01_36 AM.png"
                width="70"
              />
              {message}
            </div>
          );
        }*/
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          className="chat-message-profile"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          src={UserProfileImage}
          className="chat-message-profile"
        />
      )}
    </div>
  );
}