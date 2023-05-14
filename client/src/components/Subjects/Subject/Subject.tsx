import style from "./Subject.module.css";
import { ISubject } from "../Subjects";
import GradeIndicator from "../GradeIndicator";
import Check from "../../UI/icons/check/Check";
import Pencil from "../../UI/icons/pencil/Pencil";
import { useState } from "react";
import SubjectTitle from "../../SubjectTitle";
interface Props {
  subject: ISubject;
}

const Subject = ({ subject }: Props) => {
  let [color, setColor] = useState("");
  return (
    <div className={style.subject}>
      <div className={style.wrapper}>
        <div className={style.titleWrapper}>
          <SubjectTitle color={color}>{subject.name}</SubjectTitle>
          <div className={style.icon}>
            <Check color={"#999999"} backgroundColor={"#D9D9D9"} />
          </div>
          <div className={style.icon}>
            <Pencil color={"#666666"} backgroundColor={"#F5F8FB"} />
          </div>
        </div>
        <div className={style.subtitle}>Опис:</div>
        <div className={style.desc}>{subject.desc}</div>
      </div>
      <GradeIndicator
        totalGrade={subject.totalGrade}
        currGrade={subject.currGrade}
        onColor={(color) => setColor(color)}
      />
    </div>
  );
};

export default Subject;
