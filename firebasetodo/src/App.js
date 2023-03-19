import React from "react";
import "./index.css";
import TodoList from "./components/TodoList";

const style = {
  // bg: `h-screen w-screen p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...`
  bg: `h-screen w-screen p-4 bg-gray-200 bg-[url("https://www.transparenttextures.com/patterns/purty-wood.png")]`,
}

function App() {

  return (
    <div className={style.bg}>
      <TodoList/>
    </div>
  );
}

export default App;
