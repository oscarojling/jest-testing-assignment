type QuestionProp = {
  question: string;
};

const Question = ({ question }:QuestionProp) => {
  return (
    <p className="text-xl text-center mb-4" data-testid="question">{question}</p>
  )
}
export default Question