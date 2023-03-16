import { IMovies } from "./Types/TypeInterface";

export const getMovies = async () => {
    const movieResponse = await fetch("http://localhost:5153/api/Movies");
    const moviesData = (await movieResponse.json()) as IMovies[];
    return moviesData
};

export const addNewMovie =async (mov: Partial<IMovies>) => {
    const response = await fetch("http://localhost:5153/api/Movies", {
        method:"POST",
        body: JSON.stringify(mov),
        headers: {
            "content-type": "application/json",
        },
    });
    const json = (await response.json()) as { movie: IMovies[]};
    return json.movie;
}

export const deleteMov = async (movieId: number) => {
        const response = await fetch(
          `http://localhost:5153/api/Movies/${movieId}`,{
            method: "DELETE",
          });
    
        const json = (await response.json()) as { movie: IMovies[] };
        return json.movie;
    };

