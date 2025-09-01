import type { FC } from "react";
import { useParams } from "react-router-dom";
import type { IMovieDetails } from "../models/IMovieDetails";
import {useGetMovieDetails} from "../api/querys/useGetMovieDetails.ts";
import MovieInfo from "../Components/MovieInfoComponent.tsx";

const MovieDetailsPage: FC = () => {
    const { id } = useParams();
    const movieId = Number(id);
    const { data, isLoading, isError } = useGetMovieDetails(movieId) as {
        data?: IMovieDetails; isLoading: boolean; isError: boolean;
    };

    if (isLoading) return <div className="max-w-screen-xl mx-auto px-4 py-6">Loading…</div>;
    if (isError || !data) return <div className="max-w-screen-xl mx-auto px-4 py-6">Error</div>;

    return (
        <main className="bg-transparent ">
            <MovieInfo movie={data} />
        </main>
    );
};

export default MovieDetailsPage;
