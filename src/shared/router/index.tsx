import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Battle from "../../views/Battle";
import Choice from "../../views/Choice";

interface IRouter { }
const Router: FC<IRouter> = () => {
    return (
        <Routes>
            <Route path="/" element={<Choice />} />
            <Route path="/batalha" element={<Battle />} />
        </Routes>
    )
}

export default Router