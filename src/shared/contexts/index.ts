import { createContext, Dispatch, SetStateAction } from "react"

interface IJokenpo {
    myChoice: "scissors" | "paper" | "rock" | "lizard" | "spock" | null;
}

interface ILoader {
    show: boolean;
}

export interface IGeneralContext {
    loader: ILoader;
    jokenpo: IJokenpo;
}

export interface IContext {
    contexts: IGeneralContext;
    setContexts: Dispatch<SetStateAction<IGeneralContext>>;
    startLoader: () => void;
    stopLoader: () => void;
    handleMyChoice: (myChoice: "scissors" | "paper" | "rock" | "lizard" | "spock", goTo: string) => void;
    setScore: Dispatch<SetStateAction<number>>;
    score: number;
}

const Contexts = createContext<IContext | {}>({});

export default Contexts;