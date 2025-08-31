
import type { FC, FormEvent } from "react";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GenreMenu from "./GenreMenu.tsx";

export const Header: FC = () => {
    const [sp, setSp] = useSearchParams();
    const navigate = useNavigate();
    const qFromUrl = useMemo(() => sp.get("q") ?? "", [sp]);
    const [query, setQuery] = useState(qFromUrl);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const next = new URLSearchParams(sp);
        if (query.trim()) next.set("q", query.trim()); else next.delete("q");
        next.set("page", "1");
        setSp(next, { replace: false });
        navigate({ pathname: "/", search: next.toString()});
    };

    const resetHome = () => navigate({ pathname: "/", search: "" });

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
            <div className="max-w-[1150px] mx-auto px-4 py-3 flex items-center gap-4">
                <button onClick={resetHome} className="text-xl font-bold tracking-tight">Pinball</button>
                <GenreMenu/>
                <form onSubmit={onSubmit} className="flex-1">
                    <input
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder="Search movies…"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </form>
                <div className="flex items-center gap-2">
                    <div className="size-7 rounded-full bg-gray-300" />
                    <span className="text-sm text-gray-700">Welcome John</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
