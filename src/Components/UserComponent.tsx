import type {IUser} from "../models/IUserModel.ts";
import type {FC} from "react";

type UserComponentType = {
    user: IUser;
}
export const UserComponent:FC<UserComponentType> = ({user}) => {
    return (
        <>
            <h2>
                {user.username && user.id}
            </h2>
            <div>
                {user.address.city}
            </div>
        </>
    );
};
