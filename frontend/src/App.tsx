import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import MoviesTable from './Components/MoviesTable'
import './App.css'
import { getMovies } from './Api'
import { IMovies } from './Types/TypeInterface'

function App() {
  const [count, setCount] = useState(0)
  const [movies,setmovies] = useState<IMovies[]>([] as IMovies[])

  useEffect(() => {getMovies().then(data => setmovies(data))},[])
console.log(movies);
  return (
    <div className="App">
      <div>
       <MoviesTable movies={movies} />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
