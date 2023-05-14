import taskItems from "../../data/tasks";
import Task from "./Task/Task";
import SubjectHeader from "../Subjects/SubjectsHeader";
import { ITask } from "../../common/enitity/ITask";

import style from "./Tasks.module.css";

const Tasks = () => {
  const tasks: ITask[] = taskItems;
  return (
    <div className={style.list}>
      <SubjectHeader
        quantity={tasks.length}
        totalName={"Зробити: "}
        adderName={"Додати завданнь"}
      />
      <div className={style.tasksContainer}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
export type { ITask };
