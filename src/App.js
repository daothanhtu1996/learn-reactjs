import "./App.css";
import React from "react";
import { Route ,Routes,Link} from "react-router-dom";
import TodoFeature from "./component/features/todo/component";
import AlbumFeature from "./component/features/Album/component";
import Home from "./component/features/Home";
import PageHome from "./Page/Home";

function App() {
  return (
    <div className="App">
    <ul >
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/todo">About Us</Link>
    </li>
    <li>
      <Link to="/album">Contact Us</Link>
    </li>
    <li>
      <Link to="/home">PageHOme</Link>
    </li>
    </ul>
  <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/home' element={<PageHome/>}></Route>
      <Route exact path='/album' element={< AlbumFeature />}></Route>
      <Route exact path='/todo' element={< TodoFeature />}></Route>
  </Routes>
  </div>
  );
}

export default App;
