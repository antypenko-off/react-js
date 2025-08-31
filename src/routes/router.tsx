import {createBrowserRouter} from "react-router";

import App from "../App.tsx";
import MoviesPage from "../Pages/MoviesPage.tsx";
import MovieDetailsPage from "../Pages/MovieDetailsPage.tsx";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { index: true, element: <MoviesPage/>},
            { path: "movie/:id", element: <MovieDetailsPage/>},
        ],
    },
    { path: "*", element: <div>Not Found</div>},
]);