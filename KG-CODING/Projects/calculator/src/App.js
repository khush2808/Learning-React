import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => increment(), 1000);
console.log("rerend")
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="App">
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
