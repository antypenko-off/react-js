
export type ImgSize = 'original'|'w92'|'w154'|'w185'|'w342'|'w500'|'w780';
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
const placeholder =
    "https://placehold.co/400x600?text=No+Image";

export const tmdbImg = (path?: string|null, size: ImgSize = 'w342') =>
    path ? `${IMAGE_URL}${size}${path}` : placeholder;


