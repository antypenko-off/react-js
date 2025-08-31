
import type { FC } from "react";

type Props = { value:number };

const StarsRating: FC<Props> = ({ value }) => {
    const five = Math.round((value/2)*2)/2;
    const stars = Array.from({length:5},(_,i)=> i+1<=five ? "★" : (i+0.5<five ? "☆" : "☆"));
    return <div aria-label={`Rating ${value.toFixed(1)}/10`} className="text-amber-500 text-sm">{stars.join(" ")}</div>;
};

export default StarsRating;
