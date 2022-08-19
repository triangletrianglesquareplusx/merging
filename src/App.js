import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is the count {count}
        </p>
        <button onClick={()=>setCount(count+1)}>Click to increment</button>

        <p>This is something very cool now!</p>
        <p>I wish I knew more about git and other stuff too!</p>

      </header>
    </div>
  );
}

export default App;
