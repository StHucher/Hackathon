import { FC } from "react";
import { IMovies } from "../Types/TypeInterface";

type MoviesTableProps = {
    movies: IMovies[],
}

const MoviesTable: FC<MoviesTableProps> = ({movies}) => {

    return(
        <div>

        {

           movies.map(m => 
            {
                return<p>{m.title}</p>
            })
        }
        </div>

    );
}
export default MoviesTable;