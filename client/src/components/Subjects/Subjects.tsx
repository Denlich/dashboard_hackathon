import style from "./Subjects.module.css";
import subjectsItems from "../../data/subjects";
import Subject from "./Subject";
import SubjectsHeader from "./SubjectsHeader";
import { ISubject } from "../../common/enitity/ISubject";
import CreateSubject from "./CreateSubject/CreateSubject";


const Subjects = () => {
    const subjects: ISubject[]  = subjectsItems

    return (
        <div className={style.subjects}>
            <SubjectsHeader
                quantity={subjects.length}
                totalName={"Усього:"}
                adderName={"Додати предмет"}
                modalTitle={"Новий предмет"}
            >
                <CreateSubject/>
            </SubjectsHeader>
            <div className={style.subjectsList}>
                {subjects.map(item => <Subject key={item.id} subject={item}/>)}
            </div>
        </div>
    );
};
export default Subjects;
export type {ISubject}