import {AiOutlineCheckCircle} from "react-icons/ai"
import {ReactNode} from "react";
import style from "./backgrounCircle.module.css"


interface Props{
    children: ReactNode,
    backgroundColor: string,
}

const BackgroundCircle = ({children, backgroundColor}: Props) => {
    const inlineStyle = {backgroundColor}
    return <div style={inlineStyle} className={style.circle}>{children}</div>
}

export default BackgroundCircle