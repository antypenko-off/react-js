import { useInfiniteQuery } from "@tanstack/react-query";
import type { IMovieResponse } from "../../models/IMovie";
import {tmdbService} from "../../services/tmdb.services.ts";

type Params = {
    genreId?: number;
    query?: string;
};

export const useInfiniteMovies = ({ genreId, query }: Params) =>
    useInfiniteQuery({
        queryKey: ["movies", { genreId, query }],
        initialPageParam: 1,
        queryFn: ({ pageParam }):Promise<IMovieResponse> =>
            tmdbService.getMovies({ page: pageParam as number, genreId, query }) ,
        getNextPageParam: (lastPage) =>
            lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
    });
