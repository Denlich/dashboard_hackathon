import style from "./GradeIndicator.module.css";
interface Props{
    totalGrade: number,
    currGrade: number,
}
const GradeIndicator = ({totalGrade, currGrade}: Props) => {
    return (
        <div className={style.indicator}>

        </div>
    )
};

export default GradeIndicator;