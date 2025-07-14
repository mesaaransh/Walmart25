import { FaPlay } from "react-icons/fa6";
import SplitText from "../../ReactBits/SplitText/SplitText";
import "./Chat.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useState, useEffect } from "react";
import Topbar from "./Components/Topbar/Topbar";

export default function Chat() {
  const conversation = [
    {
      type: "answer",
      text: "Got it! Are you cooking at home all week or ordering out sometimes?",
    },
    {
      type: "answer",
      text: "Understood. Quick meals, ₹1,200 budget. Should I avoid anything you don't like?",
    },
    { type: "answer", text: <Cart /> },
    {
      type: "answer",
      text: "Done. Added your preferred tea leaves and milk brand from last month. Your cart totals ₹1,190. Want to save this combo for next week?",
    },
    {
      type: "answer",
      text: "Saved as 'Quick Healthy Week.' Please proceed to payment. Happy cooking!",
    },
  ];

  const [chatIndex, setChatIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [initialMessageShown, setInitialMessageShown] = useState(false);

  useEffect(() => {
    // Add the static initial message once when component mounts
    if (!initialMessageShown) {
      setMessages([
        { type: "answer", text: "Hi! I am Smart Cart AI. How can I help you?" },
      ]);
      setInitialMessageShown(true);
    }
  }, [initialMessageShown]);

  const handleSend = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const newMessages = [...messages, { type: "question", text: inputText }];
    setMessages(newMessages);
    setInputText("");

    // Add AI response if available
    if (chatIndex < conversation.length) {
      setTimeout(() => {
        setMessages((prev) => [...prev, conversation[chatIndex]]);
        setChatIndex(chatIndex + 1);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="results">
          {messages.map((msg, index) =>
            msg.type === "question" ? (
              <Question key={index} text={msg.text} />
            ) : (
              <Answer key={index} text={msg.text} isInitial={index === 0} />
            )
          )}
        </div>

        <div className="chatBox">
          <textarea
            placeholder="Let us help you..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>
            <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
}

function Question({ text }) {
  return <div className="question">{text}</div>;
}

function Answer({ text, isInitial }) {
  return (
    <div className="answer">
      {isInitial ? text : <SplitText text={text} splitType="words" />}
    </div>
  );
}

function Cart() {
  return (
    <div>
      Noted! No mushrooms added. Building your cart now...
      <ul>
        <li>✔️ Oats, eggs, bananas, whole wheat bread</li>
        <li>✔️ Veggies for stir-fry (pre-cut)</li>
        <li>✔️ Frozen parathas, hummus, peanut butter</li>
        <li>✔️ One treat: Dark chocolate 😄</li>
      </ul>
      Want to add your usual chai supplies again?
    </div>
  );
}
