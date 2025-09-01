import type {FC} from "react";

import {useNavigate} from "react-router-dom";
import type {IMovie} from "../models/IMovie.ts";
import PosterPreview from "./PosterPreviewComponent.tsx";
import StarsRating from "./StarsRatingComponent.tsx";
import GenreBadge from "./GenreBadgeComponent.tsx";
import {useGenreById} from "../hooks/useGenreById.ts";

type Props = {
    movie: IMovie;
};

const MoviesListCard: FC<Props> = ({ movie}) => {
    const navigate = useNavigate();
    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : undefined;
    const genreById = useGenreById();

    return (
        <article
            onClick={()=>navigate(`/movie/${movie.id}`)}
            className="cursor-pointer rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
        >
            <PosterPreview path={movie.poster_path || movie.backdrop_path} alt={movie.title} size="w342"/>
            <div className="p-4 grid gap-2">
                <h3 className="m-0 text-base md:text-lg font-semibold leading-tight line-clamp-2" title={movie.title}>
                    {movie.title}
                </h3>
                <div className="text-xs md:text-sm text-gray-500">{year ?? "—"}</div>
                <p className="m-0 text-sm md:text-base text-gray-800 line-clamp-3 md:line-clamp-4">
                    {movie.overview || "No description"}
                </p>
                <div className="mt-1"><StarsRating value={movie.vote_average}/></div>
                <div className="mt-1 flex flex-wrap gap-1">
                    {movie.genre_ids.map(id => {
                        const g = genreById(id);
                        return g ? <GenreBadge key={id} genre={g}/> : null;
                    })}
                </div>
            </div>
        </article>
    );
};

export default MoviesListCard;
