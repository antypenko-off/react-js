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

    // плоский список фильмов из страниц
    const items = useMemo(
        () => (data?.pages.flatMap((p) => p.results) ?? []),
        [data]
    );

    // загрузка следующей страницы при прокрутке
    const onRender = useInfiniteLoader(
        async (_startIndex, stopIndex, currentItems) => {
            if (!hasNextPage || isFetchingNextPage) return;
            // когда пользователь приблизился к концу списка — грузим дальше
            if (stopIndex >= currentItems.length - 1) {
                await fetchNextPage();
            }
        },
        { isItemLoaded: (idx) => idx < items.length }
    );

    // ремонтируем masonry при смене фильтра/поиска, чтобы список обнулялся
    const masonryKey = JSON.stringify({ genreId, query });

    if (isLoading) return <div className="p-4">Loading…</div>;
    if (isError)   return <div className="p-4">Error</div>;
    if (!items.length) return <div className="p-4">Ничего не найдено</div>;

    return (
        <main className="max-w-[1150px] mx-auto px-4 my-4">
            <Masonry<IMovie>
                key={masonryKey}
                items={items}
                itemKey={(m) => m.id}
                columnWidth={240}
                columnGutter={16}
                overscanBy={3}
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
                        ? "" // прокрутка сама триггерит догрузку
                        : "That's all 🎬"}
            </div>
        </main>
    );
};

export default MoviesPage;
