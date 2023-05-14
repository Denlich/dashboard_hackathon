import Text from "../../Text";

import style from "./GradeIndicator.module.css";

interface Props {
  totalGrade: number;
  currGrade: number;
  onColor: (color: Colors) => void;
}

enum Colors {
  BAD = "#E12626",
  MEDIUM = "orange",
  UPPER_MEDIUM = "#0066F1",
  GOOD = "#00C792",
}

const GradeIndicator = ({ totalGrade, currGrade, onColor }: Props) => {
  const koef = (100 * currGrade) / totalGrade;
  const currPercent = (100 * currGrade) / totalGrade + "%";
  let color: Colors;
  if (koef <= 20) color = Colors.BAD;
  else if (koef > 20 && koef <= 50) color = Colors.MEDIUM;
  else if (koef >= 50 && koef <= 80) color = Colors.UPPER_MEDIUM;
  else color = color = Colors.GOOD;
  onColor(color);
  return (
    <>
      <div className={style.info}>
        <div className={style.label}>
          <Text color="grey">Кількість балів:</Text>
        </div>
        <div className={style.grade}>
          <Text color="grey">
            {currGrade}/{totalGrade}
          </Text>
        </div>
      </div>
      <div className={style.indicator}>
        <div
          className={style.progress}
          style={{ backgroundColor: color, width: currPercent }}
        />
      </div>
    </>
  );
};

export default GradeIndicator;
