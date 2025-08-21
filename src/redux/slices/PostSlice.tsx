
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IPost} from "../../models/IPostModel.ts";
import {jsonplaceholderServices} from "../../services/app.service.ts";


type PostSliceType = {
    posts: IPost[]
}
const initPostSliceState: PostSliceType = {posts: []};

const loadPosts = createAsyncThunk('loadPosts', async (_, thunkAPI) => {
    const posts = await jsonplaceholderServices.getPosts();
    console.log(posts);
    return thunkAPI.fulfillWithValue(posts);

});
export const postSlice = createSlice({
    name: 'postSlice',
    initialState: initPostSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        }),

});

export const postAction = {...postSlice.actions, loadPosts}