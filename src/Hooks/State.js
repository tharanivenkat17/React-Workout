import React, { useState } from "react";
const State = () => {
  const [message, setMessage] = useState("Hello");
  return (
   
    <div>
      <h2>{message}</h2>
      <button onClick={() => setMessage("Hi")}>
        Message
      </button>
    </div>
  );
}

export default State