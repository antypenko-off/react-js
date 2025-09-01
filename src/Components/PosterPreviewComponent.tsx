import type { FC } from "react";
import { tmdbImg, type ImgSize } from "../utils/tmdbImage";

type PosterPreviewProps = { path?:string|null; alt:string; size?:ImgSize };

const PosterPreview: FC<PosterPreviewProps> = ({ path, alt, size = "w342" }) => (
    <img
        src={tmdbImg(path, size)}
        alt={alt}
        loading="lazy"
        className="w-full aspect-[2/3] object-cover rounded-t-lg"
    />
);

export default PosterPreview;
