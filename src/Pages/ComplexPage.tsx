import {useAppSelector} from "../redux/store.ts";

export const ComplexPage = () => {

    // const dispatch = useAppDispatch();
    const {commentStoreSlice: {comments}, userStoreSlice: {users}, postStoreSlice: {posts}} = useAppSelector(state => state);

    // useEffect(() => {
    //     if (!users.length) {
    //         dispatch(userActions.loadUsers());
    //     }
    //     if (!posts.length) {
    //         dispatch(postAction.loadPosts());
    //     }
    //     if (!comments.length) {
    //         dispatch(commentAction.loadComemnts());
    //     }
    //
    //
    // }, [comments.length, dispatch, posts.length, users.length])
    let tohether;
    console.log(comments, users, posts);
    if(!comments.length || !users.length || !posts.length ) {
         tohether = "not exist";
    }
    else{
         tohether = "exist";
    }
    return (
        <div>
            {tohether}
        </div>
    );
};