import type {IPost} from "../models/IPostModel.ts";
import type {FC} from "react";

type PostComponentType = {
    post: IPost;
}

export const PostComponent:FC<PostComponentType> = ({post}) => {
    return (
        <>
            <p>{post.body}</p>
        </>
    );
};