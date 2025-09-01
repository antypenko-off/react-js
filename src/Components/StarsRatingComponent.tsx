import type { FC } from "react";
import Rating from "@mui/material/Rating";

type StarsRatingProps = {
    value: number;
    precision?: number;
    showNumber?: boolean;
    sizePx?: number;
};

const StarsRating: FC<StarsRatingProps> = ({
                                    value,
                                    precision = 0.1,
                                    showNumber = false,
                                    sizePx = 18,
                                }) => {
    const fiveScale = Number.isFinite(value) ? Math.min(5, Math.max(0, value / 2)) : 0;

    return (
        <div className="flex items-center gap-2" aria-label={`Rating ${value.toFixed(1)} out of 10`}>
            <Rating
                value={fiveScale}
                readOnly
                precision={precision}
                sx={{
                    color: "#f59e0b",
                    fontSize: `${sizePx}px`,
                }}
            />
            {showNumber && <span className="text-sm text-gray-700">{value.toFixed(1)}/10</span>}
        </div>
    );
};

export default StarsRating;
