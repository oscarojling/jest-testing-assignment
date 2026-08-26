type ProgressProps = {
  questionIndex: number,
  totalQuestions: number
}

const Progress = ({ questionIndex, totalQuestions }: ProgressProps) => {
  return (
    <span className="text-xl text-center mb-4 font-bold">{`Question ${questionIndex + 1}/${totalQuestions}`}</span>
  );
};

export default Progress;
