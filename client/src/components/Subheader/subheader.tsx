import Heading from "../Heading";
import Select from "../UI/Select";
import style from "./subheader.module.css"
import {Options} from "../../pages/HomePage/HomePage";
interface Props{
    options: Options[],
    heading: string,
}

const Subheader = ({options, heading}: Props) => {
    return (
        <div className={style.header}>
            <div className={style.heading}><Heading>{heading}</Heading></div>
            <Select label="Сортувати:" options={options} onChange={(e) => {}}/>
        </div>
    )
}
export default Subheader