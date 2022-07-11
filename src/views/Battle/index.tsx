import { FC } from "react";
import ChoiceBattle from "../../shared/components/ChoiceBattle";

interface IBattle { }
const Battle: FC<IBattle> = () => {
    return (
        <div>
            <ChoiceBattle />
        </div>
    )
}

export default Battle