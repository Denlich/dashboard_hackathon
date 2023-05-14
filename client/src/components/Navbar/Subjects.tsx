import { useState } from "react";
import SubjectTitle from "../SubjectTitle";
import CreateSubject from "../Subjects/CreateSubject/CreateSubject";
import SubjectHeader from "../Subjects/SubjectsHeader";
import { ISubject } from "../Subjects/Subjects";
import subjects from "../../data/subjects";

const Subjects = () => {
  const [isModalAcitive, setModalActive] = useState(false);
  const [subjectsItems, setSubject] = useState(subjects);

  return (
    <ul>
      <li>
        <SubjectHeader
          modalTitle="Додати предмет"
          adderName="Додати предмет"
          isActive={isModalAcitive}
          onModalClose={() => setModalActive(false)}
          onModalOpen={() => setModalActive(true)}
        >
          <CreateSubject
            onSubmit={(s) => {
              setSubject([s as ISubject, ...subjectsItems]);
              setModalActive(false);
            }}
          />
        </SubjectHeader>
      </li>
      <li>
        <SubjectTitle>Усі предмети</SubjectTitle>
      </li>
      {subjectsItems?.map((subject) => (
        <SubjectTitle id={subject.id} color={subject.color}>
          {subject.name}
        </SubjectTitle>
      ))}
    </ul>
  );
};

export default Subjects;
