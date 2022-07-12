import { FC, useContext, useState } from "react";
import Contexts, { IContext } from "../../contexts";
import Scissors from "../Scissors";
import Paper from "../Paper";
import Rock from "../Rock";
import Lizard from "../Lizard";
import Spock from "../Spock";
import Pentagon from "../Pentagon";
import "../YourChoice/style/index.css"
import Rules from "../Rules";
import Button from "../Button";

interface IYourChoice { }
const YourChoice: FC<IYourChoice> = () => {

    const { contexts, handleMyChoice } = useContext(Contexts) as IContext
    const [touchExit, setTouchExit] = useState<boolean>(false)

    return (
        <div className="your-choice">
            <div className="pentagon">
                <Pentagon />
            </div>
            <div className="scissors">
                <Scissors onClick={() => handleMyChoice("scissors", "/batalha")} />
            </div>
            <div className="paper-spock-one">
                <div className="paper-spock-two">
                    <Spock onClick={() => handleMyChoice("spock", "/batalha")} />
                    <Paper onClick={() => handleMyChoice("paper", "/batalha")} />
                </div>
            </div>
            <div className="lizard-rock-one">
                <div className="lizard-rock-two">
                    <Lizard onClick={() => handleMyChoice("lizard", "/batalha")} />
                    <Rock onClick={() => handleMyChoice("rock", "/batalha")} />
                </div>
            </div>
            <Button exit={() => setTouchExit(true)}/>
            {touchExit && <Rules exit={() => setTouchExit(false)}/>}
        </div>
    )
}

export default YourChoice