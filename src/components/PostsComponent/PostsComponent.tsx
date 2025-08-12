import {useEffect, useState} from "react";
import {PostComponent} from "../PostComponent/PostComponent.tsx";
import type {IPost} from "../../Models/IPost.ts";
import {dummyServices} from "../../services/api.services.ts";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
            dummyServices.getPosts().
            then(response =>{
                console.log(response.posts);
                setPosts(response.posts)
            });
    }, [])


    return (
        <>
            {
                posts.map(post => <PostComponent  key={post.id} post={post}/>)
            }
        </>
    );
};