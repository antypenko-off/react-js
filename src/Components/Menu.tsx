import {Link} from "react-router";

export const Menu = () => {
    return (
        <ul>

            <li>
                <Link to='/cars'>carsInfo</Link>
            </li>

            <li>
                <Link to='/cars/create'>createNewCar</Link>
            </li>
        </ul>
    );
};