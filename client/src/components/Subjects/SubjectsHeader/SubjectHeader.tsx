import style from "./SubjectHeader.module.css";
import {AiOutlinePlus} from "react-icons/all";
import {useState} from "react";
import Modal from "../../UI/Modal/Modal";
import CreateSubject from "../CreateSubject/CreateSubject";

interface Props {
    quantity: number;
    totalName: string;
    adderName: string;
}

const SubjectHeader = ({quantity, totalName, adderName}: Props) => {
    const [isActive, setActive] = useState(false);
    return (
        <>
            <div className={style.header}>
                <div className={style.total}>{totalName} {quantity}</div>
                <div
                    className={style.add}
                    onClick={() => setActive(true)}
                >
                    <div className={style.addName}>{adderName}</div>
                    <AiOutlinePlus size="20"/>
                </div>
            </div>
            <Modal
                isActive={isActive}
                onClose={() => setActive(false)}
                title={"Новий предмет"}
            >
                <CreateSubject/>
            </Modal>
        </>

    );
};

export default SubjectHeader;