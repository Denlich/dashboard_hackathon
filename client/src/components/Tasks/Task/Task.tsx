import style from "./Task.module.css";
import {ITask} from "../Tasks";
import Check from "../../UI/icons/check/Check";
import Pencil from "../../UI/icons/pencil/Pencil";
import Trash from "../../UI/icons/trash/Trash";

interface Props {
    task: ITask;
}

const Task = ({task}: Props) => {
    return (
        <div className={style.task}>
            <div className={style.name}>
                <div className={style.circle}></div>
                {task.name}
            </div>
            <div className={style.deadline}>
                {task.deadline}
            </div>
            <div className={style.grade}>
                {task.grade === 1 && task.grade + " бал"}
                {(task.grade > 1 && task.grade < 5) && task.grade + " бали"}
                {task.grade >= 5 && task.grade + "  балів"}
            </div>

            <div className={style.icons}>
                <div className={style.icon}>
                    <Check color={"#FFFFFF"} backgroundColor={"#00C792"}/>
                </div>
                <div className={style.icon}>
                    <Pencil color={"#666666"} backgroundColor={"#F5F8FB"}/>
                </div>
                <div className={style.icon}>
                    <Trash color={"#FFFFFF"} backgroundColor={"#E12626"}/>
                </div>

            </div>
        </div>
    );
};

export default Task;