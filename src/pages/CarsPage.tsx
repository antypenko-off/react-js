import {useEffect, useState} from "react";
import {owuCarsService} from "../Services/owu.cars.service.ts";
import type {ICarModel} from "../Models/CarModel.ts";

export const CarsPage = () => {
    const [cars, setCars] = useState<ICarModel[]>([]);
    useEffect(() => {
      owuCarsService.getCars().then((cars) => {
          setCars(cars);
      })

    }, [])
    return (
        <>
            {
                cars.map((car) => (
                <div key={car.id}>
                    {car.id} - {car.brand}
                </div>
            ))
            }
        </>
    );
};