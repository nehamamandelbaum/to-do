import {useState} from "react";
import {Header} from "./components/Header";
import {NewTodo} from "./components/NewTodo";

import "./global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <NewTodo />
    </div>
  );
}

export default App;
