import style from "./Task.module.css";
import {ITask} from "../Tasks";
import Check from "../../UI/icons/check/Check";
import Pencil from "../../UI/icons/pencil/Pencil";
import Trash from "../../UI/icons/trash/Trash";
import {useState} from "react";
import Modal from "../../UI/Modal/Modal";
import UpdateTask from "../UpdateTask/UpdateTask";
import Grade from "../Grade/Grade";
import {FieldValues} from "react-hook-form";
import Date from "../Date/Date";

interface Props {
    task: ITask;
    onUpdateTask: (task: FieldValues) => void
}

const Task = ({task, onUpdateTask}: Props) => {
    const [isModalActive, setModalActive]= useState(false);
    return (
        <>
            <div className={style.task}>
                <div className={style.name}>
                    <div className={style.circle}></div>
                    {task.name}
                </div>
                <div className={style.deadline}>
                    <Date date={task.deadline}/>
                </div>
                <Grade grade={task.points}/>
                <div className={style.icons}>
                    <div
                        className={style.icon}
                        // onClick={}
                    >
                        <Check
                            color={"#FFFFFF"}
                            backgroundColor={"#00C792"}
                        />
                    </div>
                    <div
                        className={style.icon}
                        onClick={() => setModalActive(true)}
                    >
                        <Pencil
                            color={"#666666"}
                            backgroundColor={"#F5F8FB"}

                        />
                    </div>
                    <div
                        className={style.icon}
                        onClick={() => console.log("Delete")}
                    >
                        <Trash
                            color={"#FFFFFF"}
                            backgroundColor={"#E12626"}
                        />
                    </div>
                </div>
            </div>
            <Modal
                isActive={isModalActive}
                onClose={() => setModalActive(false)}
                title={"Редагування завдання"}>
                <UpdateTask
                    task={task}
                    onSubmit={(t) => {
                        setModalActive(false)
                        t.id = task.id
                        onUpdateTask(t)
                        console.log(t);
                    }}
                />
            </Modal>
        </>

    );
};

export default Task;