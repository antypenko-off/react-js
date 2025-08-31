import type { FC, ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

import type { IGenre } from "../models/IGenre";
import { useGoToGenre } from "../hooks/useGoToGenre";
import {useGetGenres} from "../api/querys/useGetGenres.ts";

const GenreMenu: FC = () => {
    const [sp, setSp] = useSearchParams();
    const activeGenre = sp.get("genre") ?? "";
    const { data: genres, isLoading } = useGetGenres();
    const goToGenre = useGoToGenre();

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        if (!val) {
            const next = new URLSearchParams(sp);
            next.delete("genre");
            next.set("page", "1");
            setSp(next);
            return;
        }
        goToGenre(Number(val));
    };

    return (
        <label className="flex items-center gap-2 text-sm text-gray-700">
            <span className="whitespace-nowrap">Genre:</span>
            <select
                className="w-[140px] sm:w-[180px] rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                value={activeGenre}
                onChange={onChange}
                disabled={isLoading}
            >
                <option value="">All genres</option>
                {(genres as IGenre[] | undefined)?.map(g => (
                    <option key={g.id} value={g.id}>{g.name}</option>
                ))}
            </select>
        </label>
    );
};

export default GenreMenu;
