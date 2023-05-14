import { ITask } from "../Tasks";
import Check from "../../UI/icons/check/Check";
import Pencil from "../../UI/icons/pencil/Pencil";
import Trash from "../../UI/icons/trash/Trash";
import SubjectTitle from "../../SubjectTitle";
import Text from "../../Text";

import style from "./Task.module.css";

interface Props {
  task: ITask;
}

const Task = ({ task }: Props) => {
  console.log(task);
  console.log(task.subject.color);
  return (
    <div className={style.task}>
      <SubjectTitle color={task.subject.color}>{task.name}</SubjectTitle>
      <div className={style.deadline}>
        <Text color="grey">{task.deadline}</Text>
      </div>
      <div className={style.grade}>
        <Text color="grey">
          {task.grade === 1 && task.grade + " бал"}
          {task.grade > 1 && task.grade < 5 && task.grade + " бали"}
          {task.grade >= 5 && task.grade + "  балів"}
        </Text>
      </div>

      <div className={style.icons}>
        <div className={style.icon}>
          <Check color={"#FFFFFF"} backgroundColor={"#00C792"} />
        </div>
        <div className={style.icon}>
          <Pencil color={"#666666"} backgroundColor={"#F5F8FB"} />
        </div>
        <div className={style.icon}>
          <Trash color={"#FFFFFF"} backgroundColor={"#E12626"} />
        </div>
      </div>
    </div>
  );
};

export default Task;
