import { ISubject } from "./ISubject";

interface ITask {
  id: number;
  name: string;
  deadline: Date;
  grade: number;
  isChecked: boolean;
  subject?: ISubject;
}
export type { ITask };
