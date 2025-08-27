import { useQuery } from '@tanstack/react-query';
import {getMovieDetails} from "../../services/tmdb.services.ts";
import type {IMovie} from "../../models/IMovie.ts";


export const useGetMovieDetails = (id: number) => {
    return useQuery<IMovie>({
        queryKey: ['movie', id],
        queryFn: () => getMovieDetails(id),
        enabled: !!id,
    });
};