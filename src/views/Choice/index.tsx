import { FC } from "react";
import YourChoice from "../../shared/components/YourChoice";

interface IChoice { }
const Choice: FC<IChoice> = () => {
    return (
        <div>
            <YourChoice />
        </div>
    )
}

export default Choice