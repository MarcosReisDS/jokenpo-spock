import { FC } from "react";
import "../Button/style/index.css"


interface IButton { 
    exit?: () => void;
}
const Button: FC<IButton> = ({ exit }) => {
    return (
        <div className="container-button">
            <button className="button-rules" onClick={exit}>REGRAS</button>
        </div>
    )
}

export default Button