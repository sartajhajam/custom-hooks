import { useState } from 'react'

import './App.css'

// custom hook 
// function only which starts with use and uses another hook inside it
// custom hooks are used to share logic between components
// custom hooks are not used to render anything

function useCounter() {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  } 
  return {
    count : count,
    increaseCount : increaseCount
  }
}

function App() {
  // using custom hook
  const { count, increaseCount } = useCounter();
  
    return (
      <div>
        <button  onClick={increaseCount}>Increase {count}</button>
      </div>

   
  )
}

export default App
