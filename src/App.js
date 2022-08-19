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

        <p>This is the new feature branch!!!</p>

      </header>
    </div>
  );
}

export default App;
