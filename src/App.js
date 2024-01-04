import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[count, setCount] = useState(0);

  const incCount=()=>{
    setCount((prev)=> prev+1)
  }
  
const DecCount=()=>{
  setCount((prev)=> prev-1)
}

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={incCount}>Increment</button>
      <button onClick={DecCount}>Decrement</button>
    </div>
  );
}

export default App;
