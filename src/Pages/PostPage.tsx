import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {postAction} from "../redux/slices/PostSlice.tsx";
import type {IPost} from "../models/IPostModel.ts";
import {PostComponent} from "../Components/PostComponent.tsx";

export const PostPage = () => {

    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.postStoreSlice.posts);
    useEffect(() => {

        dispatch(postAction.loadPosts());
    }, [dispatch]);

    return (
        <>
            {posts.map((post: IPost) => (
                <PostComponent key={post.id} post={post} />
            ))}
        </>
    );
};