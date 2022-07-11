import { FC } from "react";
import "../Scoreboard/style/index.css";

interface IScoreboard {
    score: number;
}
const Scoreboard: FC<IScoreboard> = ({ score }) => {
    return (
        <div className="container-scoreboard">
            <div className="box-scoreboard">
                <div className="separates-contents-scoreboard">
                    <div className="conditions">
                        <p>PEDRA</p>
                        <p>PAPEL</p>
                        <p>TESOURA</p>
                        <p>LAGARTO</p>
                        <p>SPOCK</p>
                    </div>
                    <div className="scoreboard">
                        <p className="score">PONTUAÇÃO</p>
                        <span className="points">{score}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scoreboard