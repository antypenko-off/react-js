import type {IUser} from "../models/IUserModel.ts";
import axios from 'axios';
import type {IPost} from "../models/IPostModel.ts";
import type {IComment} from "../models/ICommentModel.ts";


const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'},
});



export const jsonplaceholderServices ={

    getUsers: async(): Promise<IUser[]> => {
        const {data} = await( axiosInstance.get<IUser[]>("users"))
        return data;
    },
    getPosts: async(): Promise<IPost[]> => {
        const {data} = await( axiosInstance.get<IPost[]>("/posts"))
        return  data;
    },
    getComments: async(): Promise<IComment[]> => {
        const {data} = await( axiosInstance.get<IComment[]>("/comments"))
        return data;
    }

}
