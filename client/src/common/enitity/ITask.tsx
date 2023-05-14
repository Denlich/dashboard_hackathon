import { ISubject } from "./ISubject";

interface ITask {
  id: number;
  name: string;
  deadline: string;
  grade: number;
  subject: ISubject;
}
export type { ITask };
