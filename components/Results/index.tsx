type ResultsProps = {
  score: number;
  totalQuestions: number;
  username: string;
  handleReset: () => void;
};

const Results = ({
  score,
  totalQuestions,
  username,
  handleReset,
}: ResultsProps) => {
  let message;

  if (score <= 2) {
    message = `${username}, that was disappointing.`;
  } else if (score <= 4) {
    message = `not too shabby, ${username}.`;
  } else {
    message = `impressive, ${username}!`;
  }
  return (
    <div className="text-center">
      <p>{`Game over! your score is ${score}/${totalQuestions}`}</p>
      <p className="mt-4 mb-6">{message}</p>
      <button className="bg-blue-500 text-white rounded-2xl p-2 mt-6" onClick={handleReset}>Play again</button>
    </div>
  );
};

export default Results;
