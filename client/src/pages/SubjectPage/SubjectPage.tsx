import "./Subject.nodule.css";
import Heading from "../../components/Heading";
import Tasks from "../../components/Tasks/Tasks";

const SubjectPage = () => {
    return (
        <>
            <Heading>Усі завдання</Heading>
            <Tasks/>
        </>
    );
};

export default SubjectPage;
