import { useQuery } from '@tanstack/react-query';
import {tmdbService} from "../../services/tmdb.services.ts";
import type {IGenre} from "../../models/IGenre.ts";


export const useGetGenres = () => {
    return useQuery<IGenre[]>({
        queryKey: ['genres'],
        queryFn: tmdbService.getGenres,
    });
};