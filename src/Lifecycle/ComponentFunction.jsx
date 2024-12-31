import React, { useState, useEffect } from 'react';

function ComponentFunction() {

  useEffect(() => {
    console.log('componentDidMount Function');

    return () => {
      console.log('componentWillUnmount Function');
    };
  }, []);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    console.log('Updating Function')
    setCount(count + 1);
  };
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default ComponentFunction;