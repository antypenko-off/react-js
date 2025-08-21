import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.tsx";
import type {IUser} from "../models/IUserModel.ts";
import {UserComponent} from "../Components/UserComponent.tsx";

export const UserPage = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.userStoreSlice.users);
    useEffect(() => {

        dispatch(userActions.loadUsers());
    }, []);

    return (
        <>
            {users.map((user: IUser) => (
                <UserComponent key={user.id} user={user} />
            ))}
        </>
    );
};