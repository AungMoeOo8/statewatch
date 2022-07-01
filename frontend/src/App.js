import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [socket, setSocket] = useState(new WebSocket("ws://localhost:8080"));
  const [message, setMessage] = useState({});
  useEffect(() => {
    // setSocket(new WebSocket("ws://localhost:8080"));

    socket.onmessage = (event) => {
      // setMessage(JSON.parse(event.data));
      console.log(event.data);
    };
  }, []);

  const json = JSON.stringify({
    language: "javascript",
    dataType: "array",
    data: [
      { name: "Aung Moe Oo", age: 22 },
      { name: "Aung Moe Oo", age: 22 },
      { name: "Aung Moe Oo", age: 22 },
    ],
  });
  return (
    <div className="App">
      <button onClick={() => socket.send(json)}>Send</button>
      {/* <div style={{ maxWidth: "250px", backgroundColor: "gray" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p>{message.language}</p>
          <p>{message.dataType}</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
