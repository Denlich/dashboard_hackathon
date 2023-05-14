
const Grade = ({grade}: { grade: number }) => {
    return (
        <div>
            {grade === 1 && grade + " бал"}
            {(grade > 1 && grade < 5) && grade + " бали"}
            {grade >= 5 && grade + "  балів"}
        </div>
    );
};

export default Grade;