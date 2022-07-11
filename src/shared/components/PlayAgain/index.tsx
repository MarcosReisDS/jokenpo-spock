import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../PlayAgain/style/index.css";

interface IPlayAgain {
    children: string;
}
const PlayAgain: FC<IPlayAgain> = ({ children }) => {

    const navigate = useNavigate();

    return (
        <div className="container-playagain">
            <p className="name-playagain">{children}</p>
            <button className="playagain" onClick={() => navigate("/")}>JOGAR DE NOVO</button>
        </div>
    )
}

export default PlayAgain