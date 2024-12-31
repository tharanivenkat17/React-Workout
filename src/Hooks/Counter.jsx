import React, { useState } from 'react';

function Counter() {
  // state----count : current value of the state variable.
  // setState----setCount: function used to update the state.
  // initialValue----0: initial value for the state variable.
  const [count, setCount] = useState(0);

  const Counter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <table>
          <tr>
            <td><h2>Count Increase in Function {count}</h2></td>
            <td><button onClick={Counter}>Increase Counter</button></td>
          </tr>
      </table>
    </div>
  );
}

export default Counter;