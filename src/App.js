import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const handleClick = (n) => {
    setCount((p) => p + n);
  }

  return (
    <div className="App">
      <div>
        <h1>
          Counter App
        </h1>
      </div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => handleClick(1)}>Increment</button>
        <button onClick={() => handleClick(-1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
