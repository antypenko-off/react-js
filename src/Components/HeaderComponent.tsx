
import type { FC, FormEvent } from "react";
import { useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import GenreMenu from "./GenreMenu.tsx";
import UserInfo from "./UserInfoComponent.tsx";

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
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
                <button onClick={resetHome} className="text-xl font-bold tracking-tight cursor-pointer">Pinball</button>

                <div className="shrink-0">
                    <GenreMenu />
                </div>

                <form onSubmit={onSubmit} className="order-last w-full sm:order-none sm:flex-1">
                    <input
                        value={query}
                        onChange={(e)=>setQuery(e.target.value)}
                        placeholder="Search movies…"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </form>

               <UserInfo/>
            </div>
        </header>
    );
};

