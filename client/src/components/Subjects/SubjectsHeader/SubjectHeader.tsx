import style from "./SubjectHeader.module.css";
import {AiOutlinePlus} from "react-icons/all";

interface Props {
    quantity: number;
    totalName: string;
    adderName: string;
}

const SubjectHeader = ({quantity, totalName, adderName}: Props) => {
    return (
        <>
            <div className={style.header}>
                <div className={style.total}>{totalName} {quantity}</div>
                <div className={style.add}>
                        <div className={style.addName}>{adderName}</div>
                    <AiOutlinePlus size="20"/>
                </div>
            </div>
        </>

    );
};

export default SubjectHeader;