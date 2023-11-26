import { useState } from 'react';
import { Button } from '@rewind-ui/core';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite & React</h1>
      <div className='card'>
        <Button color="blue" size="sm" className="font-semibold" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h1 className='text-3xl font-bold text-yellow-600'>
        Simple React Typescript Tailwind Sample
      </h1>
    </>
  );
}

export default App;
