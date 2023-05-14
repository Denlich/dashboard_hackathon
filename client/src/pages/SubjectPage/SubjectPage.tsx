import Heading from "../../components/Heading";
import Tasks from "../../components/Tasks/Tasks";
import styles from "./Subject.module.css";

const SubjectPage = () => {
  return (
    <>
      <div className={styles.heading}>
        <Heading>Усі завдання</Heading>
      </div>
      <Tasks />
    </>
  );
};

export default SubjectPage;
