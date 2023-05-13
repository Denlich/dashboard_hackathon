import {ReactNode} from "react";
import style from "./button.module.css";

interface Props {
    children: ReactNode,
    color: "blue" | "red",
    handleClick: () => void
}


const Button = ({children, color, handleClick}: Props) => {
    return(
        <>
            <button
                onClick={handleClick}
                className={style.button + " " + style[color]}
            >
                {children}
            </button>;
        </>
    )
};

export default Button;