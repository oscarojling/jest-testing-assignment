type ProgressProps = {
  questionIndex: number,
  totalQuestions: number
}

const Progress = ({ questionIndex, totalQuestions }: ProgressProps) => {
  return (
    <span>{`question ${questionIndex + 1}/${totalQuestions}`}</span>
  );
};

export default Progress;
