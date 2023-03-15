import { IMovies } from "./Types/TypeInterface";

export const getMovies = async () => {
    const movieResponse = await fetch("http://localhost:5153/api/Movies");
    const moviesData = (await movieResponse.json()) as IMovies[];
    return moviesData
};