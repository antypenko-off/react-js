import type {FC, ReactNode} from "react";
import type {ICharater} from "../Modules/CharaterModule.ts";

interface CharacterComponentProps {
    item: ICharater,
    children: ReactNode,
}


export const CharacterComponent: FC<CharacterComponentProps> = ({item, children} ) => {
    return (
        <div>
            <h3 className='text-2xl'>{item.name} {item.surname}</h3>
            <img className='w-20' src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    )
}