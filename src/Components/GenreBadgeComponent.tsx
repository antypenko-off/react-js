import type { FC, MouseEvent } from "react";
import type {IGenre} from "../models/IGenre.ts";
import {useGoToGenre} from "../hooks/useGoToGenre.ts";


type genreBadgeProps = { genre: IGenre };

const GenreBadge:  FC<genreBadgeProps> = ({ genre }) => {
    const goToGenre = useGoToGenre();
    const onClick = (e: MouseEvent) => { e.stopPropagation(); goToGenre(genre.id); };

    return (
        <button
            onClick={onClick}
            title={genre.name}
            className="mr-1 inline-flex items-center rounded-full border cursor-pointer border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-700 hover:bg-gray-100"
        >
            {genre.name}
        </button>
    );
};

export default GenreBadge;