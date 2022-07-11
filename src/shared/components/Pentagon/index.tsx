import { FC } from "react";

interface IPentagon { }
const Pentagon: FC<IPentagon> = () => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="329" height="313">
                <path fill="none" stroke="#000" stroke-width="15" d="M164.5 9.27L9.26 122.06l59.296 182.495h191.888L319.74 122.06 164.5 9.271z" opacity=".2" />
            </svg>
        </div>
    )
}

export default Pentagon