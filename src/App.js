// src/App.js
import React from "react";
import Profile from "./Profile"; // Nhúng giao diện Profile vào

function App() {
  return (
    // Gọi và hiển thị duy nhất trang Profile
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
