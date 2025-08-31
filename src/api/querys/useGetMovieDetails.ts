import { useQuery } from '@tanstack/react-query';
import {tmdbService} from "../../services/tmdb.services.ts";
import type {IMovieDetails} from "../../models/IMovieDetails.ts";


export const useGetMovieDetails = (id: number) => {
    return useQuery<IMovieDetails>({
        queryKey: ['movie', id],
        queryFn: () => tmdbService.getMovieDetails(id),
        enabled: !!id,
    });
};