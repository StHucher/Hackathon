import { useEffect, useState } from 'react'
import MoviesTable from './Components/MoviesTable'
import './App.css'
import { getMovies, addNewMovie, deleteMov } from './Api'
import { IMovies } from './Types/TypeInterface'
import { AddMovieForm } from './Components/AddMovieForm'

function App() {
  const [movies,setMovies] = useState<IMovies[]>([] as IMovies[]);
  const [deletedMovieId, setDeletedMovieId] = useState<number | null>(null);

  const handleAddNewMovie =async (newMovie: Partial<IMovies>) => {
    const response = await addNewMovie(newMovie);
    const movie = Array.isArray(response) ? response[0] : response;
    console.log(movie);
    setMovies(prevState => [...prevState, movie])
  };

  const handleDeleteMovie =async (movieId: number) => {
    const response = await deleteMov(movieId);
    const updatedMovies = movies.filter(m => m.id !== movieId);
    setMovies(updatedMovies);
  };

  useEffect(() => {getMovies().then(data => setMovies(data))},[]);

// console.log(movies);

  return (
    <div className="App">
      <h1>My Collection of Movies</h1>

      <div>
      <AddMovieForm addNewMovie = {handleAddNewMovie}/>
       <MoviesTable movies={movies} deleteMov={handleDeleteMovie}/>
      </div>
    </div>
  )
}

export default App
