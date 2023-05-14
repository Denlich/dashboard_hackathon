import taskItems from "../../data/tasks";
import Task from "./Task/Task";
import SubjectHeader from "../Subjects/SubjectsHeader";
import { ITask } from "../../common/enitity/ITask";
import CreateTask from "./CreateTask/CreateTask";
import {useState} from "react";

import style from "./Tasks.module.css";

const Tasks = () => {
    const [tasks, setTasks] =  useState(taskItems);
    const [isActive, setActive] = useState(false);
    return (
            <div className={style.list}>
                <SubjectHeader
                    quantity={tasks.length}
                    totalName={"Зробити: "}
                    adderName={"Додати завдання"}
                    modalTitle={"Нове завдання"}
                    isActive={isActive}
                    onModalOpen={() => setActive(true)}
                    onModalClose={() => setActive(false)}

                >
                    <CreateTask onSubmit={(task) => {
                        setTasks([...tasks, (task as ITask) ])
                        setActive(false)
                    }}/>
                </SubjectHeader>
                <div className={style.tasksContainer}>
                  {tasks.map((task) => (
                    <Task 
                      key={task.id} 
                      task={task} 
                      onUpdateTask={(task) =>  setTasks(tasks.map(t => t.id ===(task as ITask).id ? (task as ITask): t))}
                    />
                  ))}
                </div>
            </div>
    );
};

export default Tasks;
export type { ITask };
