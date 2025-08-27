import axios from 'axios';
import type {IGenre} from "../models/IGenre.ts";
import type {IMovieResponse} from "../models/IMovie.ts";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authentification": 'Bearer ' + API_KEY },
});

export const getGenres = async ():Promise<IGenre[]> => {
    const { data } = await apiClient.get('/genre/movie/list');
    return data.genres;
};

export const getMovies = async (selectors: {
    page?: number;
    genreId?: number;
    query?: string;
}):Promise<IMovieResponse[]> => {
    const endpoint = params.query ? '/search/movie' : '/discover/movie';
    const { data } = await apiClient.get(endpoint, {
        params: {
            page: params.page || 1,
            with_genres: params.genreId,
            query: params.query,
        },
    });
    return data;
};

export const getMovieDetails = async (id: number) => {
    const { data } = await apiClient.get(`/movie/${id}`);
    return data;
};