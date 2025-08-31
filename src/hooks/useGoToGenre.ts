
import { useNavigate, useSearchParams } from "react-router-dom";

export const useGoToGenre = () => {
    const [sp, setSp] = useSearchParams();
    const navigate = useNavigate();
    return (id: number) => {
        const next = new URLSearchParams(sp);
        next.set("genre", String(id));
        next.set("page", "1");
        next.delete("q");
        setSp(next);
        navigate({ pathname: "/", search: next.toString() });
    };
};
