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
      <p className="text-xl md:text-2xl font-bold">{`Game over! Your score is ${score}/${totalQuestions}`}</p>
      <p className="text-xl mt-4 mb-6">{message}</p>
      <button
        className="w-full bg-yellow-600 text-white rounded-2xl p-2 mt-6 cursor-pointer hover:bg-yellow-700 transition-transform duration-200 hover:scale-105"
        onClick={handleReset}
      >
        Play again
      </button>
    </div>
  );
};

export default Results;
