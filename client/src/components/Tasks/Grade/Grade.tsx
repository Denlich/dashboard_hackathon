import Text from "../../Text";

const Grade = ({ grade }: { grade: number }) => {
  return (
    <div>
      <Text>
        {grade === 1 && grade + " бал"}
        {grade > 1 && grade < 5 && grade + " бали"}
        {grade >= 5 && grade + "  балів"}
      </Text>
    </div>
  );
};

export default Grade;
