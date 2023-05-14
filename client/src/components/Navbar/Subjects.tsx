import SubjectTitle from "../SubjectTitle";
import SubjectHeader from "../Subjects/SubjectsHeader";

const Subjects = () => {
  return (
    <ul>
      <li>
        <SubjectHeader adderName="Додати предмет" />
      </li>
      <li>
        <SubjectTitle>Усі предмети</SubjectTitle>
      </li>
    </ul>
  );
};

export default Subjects;
