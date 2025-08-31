
import { useMemo } from "react";
import type { IGenre } from "../models/IGenre";
import {useGetGenres} from "../api/querys/useGetGenres.ts";

export const useGenreById = () => {
    const { data: genres } = useGetGenres();
    const map = useMemo(
        () => new Map<number, IGenre>(((genres as IGenre[] | undefined)?.map(g => [g.id, g])) ?? []),
        [genres]
    );
    return (id: number) => map.get(id);
}
