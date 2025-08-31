import type { FC } from "react";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {useInfiniteMovies} from "../api/querys/useGetMovies.ts";
import type {IMovie} from "../models/IMovie.ts";
import {Masonry, useInfiniteLoader} from "masonic";
import MoviesListCard from "../Components/MoviesListCardComponent.tsx";

const MoviesPage: FC = () => {
    const [sp] = useSearchParams();
    const genreId = sp.get("genre") ? Number(sp.get("genre")) : undefined;
    const query = sp.get("q") || undefined;

    const { data, isLoading, isError, isFetchingNextPage, fetchNextPage, hasNextPage } =
        useInfiniteMovies({ genreId, query });

    const items = useMemo(
        () => (data?.pages.flatMap((p) => p.results) ?? []),
        [data]
    );

    const onRender = useInfiniteLoader(
        async (_startIndex, stopIndex, currentItems) => {
            if (!hasNextPage || isFetchingNextPage) return;
            if (stopIndex >= currentItems.length - 1) {
                await fetchNextPage();
            }
        },
        { isItemLoaded: (idx) => idx < items.length }
    );


    const masonryKey = JSON.stringify({ genreId, query });

    if (isLoading) return <div >Loading…</div>;
    if (isError)   return <div >Error</div>;
    if (!items.length) return <div >Nothing Found</div>;

    return (
        <main className="max-w-[1150px] mx-auto px-4 my-4">
            <Masonry<IMovie>
                key={masonryKey}
                items={items}
                itemKey={(m) => m.id}
                columnWidth={210}
                columnGutter={32}
                overscanBy={1}
                onRender={onRender}
                render={({ data: movie }) => (
                    <div className="mb-4 ">
                        <MoviesListCard movie={movie} />
                    </div>
                )}
            />

            <div className="py-6 text-center text-gray-500">
                {isFetchingNextPage
                    ? "Page Loading…"
                    : hasNextPage
                        ? ""
                        : "That's all"}
            </div>
        </main>
    );
};

export default MoviesPage;
