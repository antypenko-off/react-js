
export type ImgSize = 'original'|'w92'|'w154'|'w185'|'w342'|'w500'|'w780';
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;
const placeholder =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='600'><rect width='100%' height='100%' fill='%23eee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-family='sans-serif'>No image</text></svg>";

export const tmdbImg = (path?: string|null, size: ImgSize = 'w342') =>
    path ? `${IMAGE_URL}${size}${path}` : placeholder;
