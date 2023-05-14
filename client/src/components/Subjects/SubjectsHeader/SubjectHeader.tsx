import style from "./SubjectHeader.module.css";
import {displayValue} from "@tanstack/react-query-devtools/build/lib/utils";
import {AiOutlinePlus} from "react-icons/all";
interface Props {
    quantity: number,
}

const SubjectHeader = ({quantity}: Props) => {
    return (
        <>
            <div className={style.header}>
                <div className={style.total}>Усього: {quantity}</div>
                <div className={style.add}>
                        <div className={style.addName}>Додати предмет</div>
                    <AiOutlinePlus size="20"/>
                </div>
            </div>
        </>

    );
};

export default SubjectHeader;