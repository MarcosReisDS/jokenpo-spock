import { FC, useContext, useEffect, useState } from "react";
import Contexts, { IContext } from "../../contexts";
import { resultBattles } from "../../helpers/resultBattle";
import { useNavigate } from "react-router-dom";
import Scissors from "../Scissors";
import Paper from "../Paper";
import Rock from "../Rock";
import Lizard from "../Lizard";
import Spock from "../Spock";
import PlayAgain from "../PlayAgain";
import "../ChoiceBattle/style/index.css";

interface IChoiceBattle { }
const ChoiceBattle: FC<IChoiceBattle> = () => {

    const navigate = useNavigate()
    const [youWinLoser, setYouWinLoser] = useState<"win" | "loss" | null | undefined>(undefined)
    const [randomChoiceElement, setRandomChoiceElement] = useState<JSX.Element | null>(null)
    const [resultComponent, setResultComponent] = useState<JSX.Element | null>(null)
    const { contexts, score, setScore } = useContext(Contexts) as IContext

    const renderMyChoice = () => {
        switch (contexts.jokenpo.myChoice) {
            case "scissors":
                return <Scissors />
            case "paper":
                return <Paper />
            case "rock":
                return <Rock />
            case "lizard":
                return <Lizard />
            case "spock":
                return <Spock />
            default:
                return ""
        }
    }

    const result = () => {
        if (!!contexts.jokenpo.myChoice) {
            const random = Math.floor(Math.random() * 5)
            switch (random) {
                case 0:
                    setRandomChoiceElement(<Scissors />)
                    resultBattles(contexts.jokenpo.myChoice, "scissors", setYouWinLoser)
                    break;
                case 1:
                    setRandomChoiceElement(<Paper />)
                    resultBattles(contexts.jokenpo.myChoice, "paper", setYouWinLoser)
                    break;
                case 2:
                    setRandomChoiceElement(<Rock />)
                    resultBattles(contexts.jokenpo.myChoice, "rock", setYouWinLoser)
                    break;
                case 3:
                    setRandomChoiceElement(<Lizard />)
                    resultBattles(contexts.jokenpo.myChoice, "lizard", setYouWinLoser)
                    break;
                case 4:
                    setRandomChoiceElement(<Spock />)
                    resultBattles(contexts.jokenpo.myChoice, "spock", setYouWinLoser)
                    break;
            }
        } else {
            navigate("/")
        }
    }

    const winLose = () => {
        switch (youWinLoser) {
            case "win":
                setScore(score + 1);
                setResultComponent(<PlayAgain>VITÓRIA</PlayAgain>)
                break
            case "loss":
                setScore(score - 1);
                setResultComponent(<PlayAgain>DERROTA</PlayAgain>)
                break
            case null:
                setResultComponent(<PlayAgain>EMPATE</PlayAgain>)
                break
        }
    }

    useEffect(() => {
        result()
    }, [])

    useEffect(() => {
        winLose()
    }, [youWinLoser !== undefined])


    return (
        <div className="container-choice-battle">
            <div className="choice-battle">
                <div className="you-picked">
                    <p>VOCÊ ESCOLHEU</p>
                    {renderMyChoice()}
                </div>
                <div>
                    {resultComponent}
                </div>
                <div className="the-house-picked">
                    <p>A CASA ESCOLHIDA</p>
                    {!!randomChoiceElement && randomChoiceElement}
                </div>
            </div>
        </div>
    )
}

export default ChoiceBattle