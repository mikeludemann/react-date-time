import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Year, Month, Week, Day, Hour, Minute, Second, Millisecond } from './components/date-time';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="content">
        <Year></Year>
        <Month format="text"></Month>
        <Week></Week>
        <Day></Day>
        <Hour></Hour>
        <Minute></Minute>
        <Second></Second>
        <Millisecond></Millisecond>
      </section>
      <footer className="App-footer">
        (c) Copyright - Mike Ludemann
      </footer>
    </div>
  );
}

export default App;
