import {useForm} from "react-hook-form";
import type {ICarModel} from "../Models/CarModel.ts";
import {owuCarsService} from "../Services/owu.cars.service.ts";
import {carsValidator} from "../Validator/validator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

export const CreateCarPage = () => {
    const  {register, handleSubmit, formState: {errors}} =  useForm<ICarModel>({
        mode:"all",
        resolver:joiResolver(carsValidator)
    });

    const handler = (data : ICarModel) => {
            owuCarsService.addCar(data)
    };
    return (
        <>
            <form onSubmit={handleSubmit(handler)}>

                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>save car</button>
            </form>
        </>
    );
};