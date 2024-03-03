import logo from './logo.svg';
import './App.css';
import { useReducer, useState } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

function reducer(state, action){
  switch (action.type){
    case ACTIONS.INCREMENT:
      return {count : state.count + 1}
    case ACTIONS.DECREMENT:
      return {count : state.count - 1}
    default:
      return state
  }      
}

function App() {
  const [state, dispatch] = useReducer(reducer, {count : 0})

  const handleInc = () => {
    dispatch({type: ACTIONS.INCREMENT});
  }

  const handleDec = () => {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div className="App">
      <div>
        <h1>
          Counter App
        </h1>
      </div>
      <div>
        <p>Count: {state.count}</p>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
