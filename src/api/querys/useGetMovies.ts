import {useQuery} from "@tanstack/react-query";
import { getMovies} from "../../services/tmdb.services.ts";
import type {IMovieResponse} from "../../models/IMovie.ts";

export const useGetMovies = () => {
    return useQuery<IMovieResponse[]>({
        queryKey: ['movies'],
        queryFn: getMovies({}),
    });
};