import { Dispatch, SetStateAction } from "react"
import { setResult } from "./setResult"

export const resultBattles = (
    myChoice: "scissors" | "paper" | "rock" | "lizard" | "spock",
    randomChoice: "scissors" | "paper" | "rock" | "lizard" | "spock",
    setState: Dispatch<SetStateAction<"win" | "loss" | null | undefined>>
) => {

    if (myChoice === "scissors") {
        if (randomChoice === "scissors") {
            setResult(null, setState)
        }
        if (randomChoice === "paper") {
            setResult("win", setState)
        }
        if (randomChoice === "rock") {
            setResult("loss", setState)
        }
        if (randomChoice === "lizard") {
            setResult("win", setState)
        }
        if (randomChoice === "spock") {
            setResult("loss", setState)
        }
    }

    if (myChoice === "paper") {
        if (randomChoice === "scissors") {
            setResult("loss", setState)
        }
        if (randomChoice === "paper") {
            setResult(null, setState)
        }
        if (randomChoice === "rock") {
            setResult("win", setState)
        }
        if (randomChoice === "lizard") {
            setResult("loss", setState)
        }
        if (randomChoice === "spock") {
            setResult("win", setState)
        }
    }

    if (myChoice === "rock") {
        if (randomChoice === "scissors") {
            setResult("win", setState)
        }
        if (randomChoice === "paper") {
            setResult("loss", setState)
        }
        if (randomChoice === "rock") {
            setResult(null, setState)
        }
        if (randomChoice === "lizard") {
            setResult("win", setState)
        }
        if (randomChoice === "spock") {
            setResult("loss", setState)
        }
    }

    if (myChoice === "lizard") {
        if (randomChoice === "scissors") {
            setResult("loss", setState)
        }
        if (randomChoice === "paper") {
            setResult("win", setState)
        }
        if (randomChoice === "rock") {
            setResult("loss", setState)
        }
        if (randomChoice === "lizard") {
            setResult(null, setState)
        }
        if (randomChoice === "spock") {
            setResult("win", setState)
        }
    }

    if (myChoice === "spock") {
        if (randomChoice === "scissors") {
            setResult("win", setState)
        }
        if (randomChoice === "paper") {
            setResult("loss", setState)
        }
        if (randomChoice === "rock") {
            setResult("win", setState)
        }
        if (randomChoice === "lizard") {
            setResult("loss", setState)
        }
        if (randomChoice === "spock") {
            setResult(null, setState)
        }
    }

}