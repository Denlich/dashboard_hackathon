import {ISubject} from "./ISubject";

interface ITask {
    id: number;
    name: string;
    deadline: Date;
    points: number;
    isChecked: boolean;
    subject?: ISubject;
}
export type { ITask };
