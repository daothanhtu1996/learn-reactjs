import "./App.css";
import React from "react";
import Lists from "./Lists";
import TodoFeature from "./component/features/todo/component";


function App() {

  return (
    <div className="App">
    <Lists />
    <TodoFeature/>
    </div>
  );
}

export default App;
