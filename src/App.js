import{useState} from "react";
import './App.css';


function App() {
  const [count,setcount]=useState(0)
  function increase(){
      setcount(count+1)
  }
  function decrease(){
    setcount(count-1)
}

  function resetcount(){
    setcount(0);
  }
  return (
    <div id='wrapper'>
      <header>Increament & Decrement</header>
      <div id='content'>
        <button id='increase' onClick={increase}>+</button>
        <div id='value'>{count}</div>
        <button id='decrease'onClick={decrease}>-</button>
      </div>
      <div id='resetbutton'>
        <button className='change' onClick={resetcount}>Reset</button>
      </div>
    </div>
  )
}

export default App;
