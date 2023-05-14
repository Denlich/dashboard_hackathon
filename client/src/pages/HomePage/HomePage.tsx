import {Link} from "react-router-dom";
import Subheader from "../../components/Subheader/subheader";
import Subjects from "../../components/Subjects";

enum Options {
    ASC_NAME = "Назва а-я",
    DESC_NAME = "Назва я-а",
    ASC_GRADE = "Заг. бал 0-9",
    DESC_GRADE = "Заг. бал 9-0"
}
const HomePage = () => {
    const options = [Options.ASC_NAME, Options.DESC_NAME, Options.ASC_GRADE, Options.DESC_GRADE];
    return (
        <>
            <Subheader heading="Усі предмети" options={options}/>
            <Subjects/>
            <Link to="/subjects/op">OP</Link>
        </>
    );
};

export default HomePage;
export {Options}
