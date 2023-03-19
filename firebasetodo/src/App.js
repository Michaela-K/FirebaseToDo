import React from "react";
import "./index.css";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...`
}

function App() {

  return (
    <div className={style.bg}>
       Hello
    </div>
  );
}

export default App;
