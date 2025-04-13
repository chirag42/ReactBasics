
import logo from './logo.svg';
import './App.css';

/* eslint-disable no-unused-vars */
import Greeting from "./components/Greetings";
import Counter from "./components/Counter";
import NameGreeting from "./components/NameGreeting";
/* eslint-enable no-unused-vars */

import Calculator from "./components/Calculator";
import TaskRender from "./components/TaskRender";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greeting name="chirag"/>*/}
        {/*<Counter/>*/}
        {/*<NameGreeting/>*/}
        <TaskRender/>
        <Calculator/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
