import './App.css'
import { useEffect } from 'react';
import { db } from './firebase';

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <h1> Hi </h1>
//     </>
//   )
// }

function App() {
  useEffect(() => {
    console.log("Firebase Initialized:", db);
  }, []);

  return <h1>Hello, Firebase!</h1>;
}

export default App


/* Default
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    */