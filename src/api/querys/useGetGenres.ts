import { useQuery } from '@tanstack/react-query';
import {getGenres} from "../../services/tmdb.services.ts";
import type {IGenre} from "../../models/IGenre.ts";


export const useGetGenres = () => {
    return useQuery<IGenre[]>({
        queryKey: ['genres'],
        queryFn: getGenres,
    });
};