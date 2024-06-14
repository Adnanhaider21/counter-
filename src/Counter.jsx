import React from 'react'

export const Counter = (props) => {
    console.log(props);
  return (
    <>

      <div className="buttons">
        <div>
          <button className="increment" onClick={props.increment}>
            +
          </button>
        </div>
        <div>
          <button className="reset" onClick={props.reset}>
            Reset
          </button>
        </div>
        <div>
          <button className="decrement" onClick={props.decrement}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
