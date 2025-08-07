import {simpsons} from "../arrays.ts";
import {CharacterComponent} from "./CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map((value, index) => <CharacterComponent key={index} item={value}>
                    {value.info}
                </CharacterComponent>)
            }

        </div>
    )
}
