import style from "./Tasks.module.css";
import taskItems from "../../data/tasks";
import Task from "./Task/Task";
import SubjectHeader from "../Subjects/SubjectsHeader";
import { ITask } from "../../common/enitity/ITask";




const Tasks = () => {
    const tasks: ITask[] = taskItems;
    return (
            <div className={style.list}>
                <SubjectHeader
                    quantity={tasks.length}
                    totalName={"Зробити: "}
                    adderName={"Додати завданнь"}
                />
                {tasks.map(task => <Task key={task.id} task={task}/>)}
            </div>
    );
};

export default Tasks;
export type {ITask};