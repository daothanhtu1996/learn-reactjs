import "./App.css";
import React from "react";
import AlbumFeature from "./component/features/Album/component";

function App() {
  // const age = 18;
  // const name = "tu";
  // const isFemale = false;
  // const student = {
  //   name: "thanhtu",
  // };
  // const list = ["red", "blue", "green"];
  return (
    <div className="App">
      {/* <TodoFeature/> */}
     <AlbumFeature></AlbumFeature>
   
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <p>
          xin chao {name}+ {age}+ {isFemale ? "Male" : "fermale"}
        </p>
        {isFemale ? <p>Male</p> : <p>fermale</p>}
        {isFemale && <p>Male</p>}
        {!isFemale && <p>fermale</p>}  
        {isFemale && (
          <>
            <p>Male</p>
            <p>Male</p>
            <p>Male</p>
          </>
        )}
        <p>{student.name}</p>
        <ul>
          {list.map((color) => (
            <li style={{ color }}>{color}</li>
          ))}
        </ul>
      </header> */}
    </div>
  );
}

export default App;
