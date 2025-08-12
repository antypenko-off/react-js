import type {IPost} from "../../Models/IPost.ts";

interface PostComponentProps {
    post: IPost
}

export const PostComponent = ({post}:PostComponentProps) => {
    return (
        <div>
            {post.title}
        </div>
    );
};