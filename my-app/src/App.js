import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', null, "sth"/* ... h1 children ... */),
  React.createElement('h2', null, "sthsd"/* ... h1 children ... */),
  React.createElement('h3', null, "stsdh"/* ... h1 children ... */),
  React.createElement('h4', null, "stddh"/* ... h1 children ... */),
  React.createElement('h1', null, "stddhth"/* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="sth"
  //         rel="noopener noreferrer"
  //       >
  //         Learn Reacts
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
