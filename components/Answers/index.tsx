type AnswersProp = {
  answers: string[];
  handleAnswer: (index: number) => void;
};

const Answers = ({ answers, handleAnswer }: AnswersProp) => {
  return (
    <div>
      {answers.map((answer, index) => (
        <button data-testid="answer-btn" key={index} onClick={() => handleAnswer(index)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
