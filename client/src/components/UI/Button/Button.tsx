import {ReactNode} from "react";
import style from "./button.module.css";

interface Props {
    children: ReactNode,
    color: "blue" | "red",
    onClick?: () => void
}


const Button = ({children, color, onClick}: Props) => {
    return(
        <>
            <button
                onClick={onClick}
                className={style.button + " " + style[color]}
            >
                {children}
            </button>
        </>
    )
};

export default Button;