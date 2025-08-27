import axios from 'axios';
import type {IGenre} from "../models/IGenre.ts";
import type {IMovie} from "../models/IMovie.ts";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    params: { Auhorization:"Barier " + API_KEY },
});

export const fetchGenres = async (): Promise<IGenre[]> => {
    const { data } = await api.get('/genre/movie/list');
    return data.genres;
};

export const fetchMovies = async (params: {
    page?: number;
    genreId?: number;
    query?: string;
}): Promise<{ results: IMovie[]; total_pages: number }> => {
    const endpoint = params.query ? '/search/movie' : '/discover/movie';
    const { data } = await api.get(endpoint, {
        params: {
            ...params,
            with_genres: params.genreId,
            page: params.page || 1,
        },
    });
    return data;
};

export const fetchMovieDetails = async (id: number): Promise<IMovie> => {
    const { data } = await api.get(`/movie/${id}`);
    return data;
};