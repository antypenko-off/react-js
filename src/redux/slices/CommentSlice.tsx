import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {jsonplaceholderServices} from "../../services/app.service.ts";
import type {IComment} from "../../models/ICommentModel.ts";


type CommentSliceType = {
    comments: IComment[]
}
const initCommentSliceState: CommentSliceType = {comments: []};

const loadComemnts = createAsyncThunk('loadComment', async (_, thunkAPI) => {
    const comments = await jsonplaceholderServices.getComments();
    return thunkAPI.fulfillWithValue(comments);

});
export const commentSlice = createSlice({
    name: 'postSlice',
    initialState: initCommentSliceState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadComemnts.fulfilled, (state, action: PayloadAction<IComment[]>) => {
            state.comments = action.payload;
        }),

});

export const commentAction = {...commentSlice.actions, loadComemnts}