import logo from './logo.svg';
import './App.css';
import  React  from 'react';

function App() {
  const age =18;
  const name ='tu';
  const isFemale = true;
  const student ={
    name: 'thanhtu'
  };
  const list = ['red','blue','green']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <p>xin chao {name}+ {age}+ {isFemale ? 'Male':'fermale'}</p>

      </header>
    </div>
  );
}

export default App;
