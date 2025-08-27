export const qk = {
    movies: (page: number, withGenres?: number | null, query?: string | null) =>
        ["movies", { page, withGenres: withGenres ?? null, query: query ?? null }],
    genres: ["genres"],
    movie: (id: number) => ["movie", id],
};
