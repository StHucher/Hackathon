import { FC, useEffect, useState } from "react";
import { deleteMov } from "../Api";
import { IMovies } from "../Types/TypeInterface";

type MoviesTableProps = {
    movies: IMovies[],
    deleteMov: (id: number) => void
}

const MoviesTable: FC<MoviesTableProps> = ({movies, deleteMov}) => {


    return(
        <>
            <table className="table">
                
                <thead>
                    <th className="head-title">Title</th>
                    <th className="head-title">Autor</th>
                    <th className="head-title">Genre</th>
                </thead>
                <tbody>
                {movies.map(m => { 
                        return<tr key = {m.id}>
                            <td className="table-data">{m.title}</td>
                            <td className="table-data">{m.autor}</td>
                            <td className="table-data">{m.genre}</td>
                            <td className="table-data"><button className="table-button" onClick={() => deleteMov(m.id)}>Delete</button></td>
                            </tr>; })}

                </tbody>
                    
            </table>
        </>

    );
}
export default MoviesTable;