
import type { FC } from "react";
import type { IMovieDetails } from "../models/IMovieDetails";

import { tmdbImg } from "../utils/tmdbImage";
import PosterPreview from "./PosterPreviewComponent.tsx";
import StarsRating from "./StarsRatingComponent.tsx";
import GenreBadge from "./GenreBadgeComponent.tsx";

type Props = {
    movie: IMovieDetails;
};

const MovieInfo: FC<Props> = ({ movie }) => {
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : undefined;

    return (
        <section className="relative">
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${tmdbImg(movie.backdrop_path, "original")})` }}
                aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white" aria-hidden />

            <div className="relative max-w-[1150px] mx-auto px-4 py-8 grid gap-6 md:grid-cols-[220px,1fr]">
                <div className="self-start">
                    <PosterPreview path={movie.poster_path || movie.backdrop_path} alt={movie.title} size="w500" />
                </div>

                <div className="bg-white/85 backdrop-blur rounded-lg p-4">
                    <h1 className="text-2xl font-semibold">
                        {movie.title} {year ? `(${year})` : ""}
                    </h1>

                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-700">
                        <StarsRating value={movie.vote_average}/>
                        <span>{movie.vote_average.toFixed(1)}/10</span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-1">
                        {movie.genres.map(g => (
                            <GenreBadge key={g.id} genre={g}/>
                        ))}
                    </div>

                    <p className="mt-4 text-gray-900">{movie.overview || "No description"}</p>
                </div>
            </div>
        </section>
    );
};

export default MovieInfo;
