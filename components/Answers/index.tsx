type AnswersProp = {
  answers: string[];
  handleAnswer: (index: number) => void;
};

const Answers = ({ answers, handleAnswer }: AnswersProp) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-row justify-center gap-2">
      {answers.map((answer, index) => (
        <button className="cursor-pointer hover:bg-[#e5b800] active:bg-[#FECC02] text-xl flex-1 border rounded-2xl p-4 whitespace-nowrap transition-transform duration-200 hover:scale-105" data-testid="answer-btn" key={index} onClick={() => handleAnswer(index)}>
          {answer}
        </button>
      ))}
    </div>
  );
};

export default Answers;
