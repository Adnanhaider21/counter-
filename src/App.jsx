import { useState } from "react";
import { Counter } from "./Counter";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increment = () =>setCount(count+1);
  
  const decrement = () => count <= 0 ? setCount(0) :setCount(count-1);

  const reset = () => setCount(0)
  

  return (
    <>
      <div className="container">
        <h2 className="mainheading">Counter in react</h2>
        <p className="child">{count}</p>

        <Counter
          values={count}
          increment={increment}
          decrement={decrement}
          reset={reset}
        />
      </div>
    </>
  );
}

export default App;



 

