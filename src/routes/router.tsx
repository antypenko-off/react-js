import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import {UserPage} from "../Pages/UserPage.tsx";
import {PostPage} from "../Pages/PostPage.tsx";
import {CommentPage} from "../Pages/CommentPage.tsx";
import {ComplexPage} from "../Pages/ComplexPage.tsx";


export const routes = createBrowserRouter([
        {path:"/", element:<App/>, children:[
                        {path:"users", element:<UserPage/>},
                        {path:"posts", element:<PostPage/>},
                        {path:"comments", element:<CommentPage/>},
                        {path:"complex", element:<ComplexPage/>}
                ]}

        ]);