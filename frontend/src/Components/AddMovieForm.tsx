import { FC, SyntheticEvent, useEffect, useState } from "react";
import { getMovies } from "../Api";
import { IMovies } from "../Types/TypeInterface";

type AddMovieFormProps = {
    addNewMovie: (mov: Partial<IMovies>) => void
}

export const AddMovieForm: FC<AddMovieFormProps> = ({ addNewMovie }) => {
    const [titleMovie, setTitleMovie] = useState('');
    const [autorMovie, setAutorMovie] = useState('');
    const [genreMovie, SetGenreMovie] = useState('');

    const onFormSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        if (titleMovie === '' || autorMovie === '' || genreMovie === ''){
          alert('seed the field');
        }
        const newMovie: Partial<IMovies> = {
            title: `${titleMovie}`,
            autor: `${autorMovie}`,
            genre: `${genreMovie}`
        };
       addNewMovie(newMovie);
      
    }

    //  useEffect(() => {getMovies()}, [addNewMovie]);


    return(
        <form className='add-mov-form' onSubmit={onFormSubmit}>
          <input className="input-form" onChange={(e) => {
            setTitleMovie(e.target.value);
          }} placeholder='Enter title' type="text" />
          <input className="input-form" onChange={(e) => {
            setAutorMovie(e.target.value);
          }} placeholder='Enter autor' type="text" />
          <input className="input-form" onChange={(e) => {
            SetGenreMovie(e.target.value);
          }} placeholder='Enter genre' type="text" />
          <button className="input-button">Add New Movie</button>
        </form>
    )
}