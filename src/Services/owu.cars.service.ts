import axios from "axios";
import type {ICarModel} from "../Models/CarModel.ts";

const axiosInstance  = axios.create({
    baseURL: "http://185.69.152.209/carsAPI/v1",
    headers: {
        "Content-Type": "application/json",
    }
})
export const owuCarsService = {

    addCar: async (car: ICarModel) => {
        await axiosInstance.post("/cars", car);
    },

    getCars: async ():  Promise<ICarModel[]> => {
        return (await axiosInstance.get<ICarModel[]>(`/cars`)).data;
    }
};
