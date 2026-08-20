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
    <div>
      <p>{`your score is ${score}/${totalQuestions}`}</p>
      <p>{message}</p>
      <button onClick={handleReset}>Play again</button>
    </div>
  );
};

export default Results;
