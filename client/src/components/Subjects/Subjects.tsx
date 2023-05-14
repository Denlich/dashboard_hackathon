import style from "./Subjects.module.css";
import subjectsItems from "../../data/subjects";
import Subject from "./Subject";
import SubjectsHeader from "./SubjectsHeader";
import { ISubject } from "../../common/enitity/ISubject";
import CreateSubject from "./CreateSubject/CreateSubject";
import {useState} from "react";


const Subjects = () => {
    const [subjects, setSubjects] = useState(subjectsItems)
    const [isActive, setActive] = useState(false);
    return (
        <div className={style.subjects}>
            <SubjectsHeader
                quantity={subjects.length}
                totalName={"Усього:"}
                adderName={"Додати предмет"}
                modalTitle={"Новий предмет"}
                isActive={isActive}
                onModalOpen={() => setActive(true)}
                onModalClose={() => setActive(false)}
            >
                <CreateSubject
                    onSubmit={(subject) => {
                        setSubjects([...subjects, (subject as ISubject)])
                        setActive(false)
                    }}
                />
            </SubjectsHeader>
            <div className={style.subjectsList}>
                {subjects.map(item => <Subject key={item.id} subject={item}/>)}
            </div>
        </div>
    );
};
export default Subjects;
export type {ISubject}