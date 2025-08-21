import type {IUser} from "../../models/IUserModel"
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import { jsonplaceholderServices} from "../../services/app.service.ts";

type UserSliceType = {
    users: IUser[]
}
const initUserSliceState: UserSliceType = {users: []};

const loadUsers = createAsyncThunk("loadUsers", async (_, thunkAPI) => {
    const users = await jsonplaceholderServices.getUsers();
    console.log(users);
    return thunkAPI.fulfillWithValue(users);

});
export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initUserSliceState,
    reducers: {},
    extraReducers: builder => builder.addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.users = action.payload;

    }),
});
export const userActions = {...userSlice.actions, loadUsers};