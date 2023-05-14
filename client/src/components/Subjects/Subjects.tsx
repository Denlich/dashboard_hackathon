import style from "./Subjects.module.css";
import subjectsItems from "../../data/subjects";
import Subject from "./Subject";
import SubjectsHeader from "./SubjectsHeader";
interface ISubject{
    name: string;
    desc: string;
    totalGrade: number,
    currGrade: number,
}

const Subjects = () => {
    const subjects: ISubject[]  = subjectsItems

    return (
        <div className={style.subjects}>
            <SubjectsHeader
                quantity={subjects.length - 1}
            />
            <div className={style.subjectsList}>
                {subjects.map(item => <Subject subject={item}/>)}
            </div>
        </div>
    );
};
export default Subjects;
export type {ISubject}