type AnswersProp = {
  answers: string[];
  handleAnswer: (index: number) => void;
};

const Answers = ({ answers, handleAnswer }: AnswersProp) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-row justify-center gap-2">
      {answers.map((answer, index) => (
        <button className="flex-1 border rounded-2xl p-2" data-testid="answer-btn" key={index} onClick={() => handleAnswer(index)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
