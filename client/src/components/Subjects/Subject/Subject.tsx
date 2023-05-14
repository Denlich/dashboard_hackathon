import { useState } from "react";
import { ISubject } from "../Subjects";
import GradeIndicator from "../GradeIndicator";
import Check from "../../UI/icons/check/Check";
import Pencil from "../../UI/icons/pencil/Pencil";
import SubjectTitle from "../../SubjectTitle";
import Text from "../../Text";

import style from "./Subject.module.css";

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
          <div className={style.row}>
            <div className={style.icon}>
              <Check color={"#999999"} backgroundColor={"#D9D9D9"} />
            </div>
            <div className={style.icon}>
              <Pencil color={"#666666"} backgroundColor={"#F5F8FB"} />
            </div>
          </div>
        </div>
        <div className={style.subtitle}>
          <Text color="grey">Опис:</Text>
        </div>
        <div className={style.desc}>
          <Text color="grey">{subject.desc}</Text>
        </div>
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
