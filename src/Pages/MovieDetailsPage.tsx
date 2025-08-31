
import type { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";

import type { IMovieDetails } from "../models/IMovieDetails";
import {useGetMovieDetails} from "../api/querys/useGetMovieDetails.ts";
import MovieInfo from "../Components/MovieInfoComponent.tsx";

const MovieDetailsPage: FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movieId = Number(id);
    const { data, isLoading, isError } = useGetMovieDetails(movieId) as {
        data?: IMovieDetails;
        isLoading: boolean;
        isError: boolean;
    };


    if (isLoading) return <div className="p-4">Loading…</div>;
    if (isError || !data) return <div className="p-4">Error</div>;

    return (
        <main>
            <div className="max-w-[1150px] mx-auto px-4 pt-4">
                <button onClick={()=>navigate(-1)} className="mb-2 text-sm text-blue-600 underline">← Back</button>
            </div>
            <MovieInfo movie={data}/>
        </main>
    );
};

export default MovieDetailsPage;
