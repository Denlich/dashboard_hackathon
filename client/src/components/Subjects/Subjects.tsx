import style from "./Subjects.module.css";
import subjectsItems from "../../data/subjects";
import Subject from "./Subject";
import SubjectsHeader from "./SubjectsHeader";
import { ISubject } from "../../common/enitity/ISubject";


const Subjects = () => {
    const subjects: ISubject[]  = subjectsItems

    return (
        <div className={style.subjects}>
            <SubjectsHeader
                quantity={subjects.length}
                totalName={"Усього:"}
                adderName={"Додати предмет"}
            />
            <div className={style.subjectsList}>
                {subjects.map(item => <Subject key={item.id} subject={item}/>)}
            </div>
        </div>
    );
};
export default Subjects;
export type {ISubject}