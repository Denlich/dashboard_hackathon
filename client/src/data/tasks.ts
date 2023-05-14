import {ITask} from "../common/enitity/ITask";
import subjects from "./subjects";

export const tasks: ITask[] = [
  {
    id: 1,
    name: "ДКР-10",
    deadline: new Date(),
    grade: 5,
    subject: subjects[0],
  },
  {
    id: 2,
    name: "Лаба-9",
    deadline: new Date(),
    grade: 4,
    subject: subjects[1],
  },
  {
    id: 3,
    name: "Лаба-9",
    deadline: new Date(),
    grade: 6,
    subject: subjects[2],
  },
  {
    id: 4,
    name: "ДКР-10",
    deadline: new Date(),
    grade: 5,
    subject: subjects[3],
  },
  {
    id: 5,
    name: "ДКР-10",
    deadline: new Date(),
    grade: 5,
    subject: subjects[4],
  },
];

export default tasks
