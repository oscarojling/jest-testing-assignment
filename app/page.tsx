"use client";
import { useState } from "react";
import { questions } from "@/data/questions";
import StartScreen from "@/components/StartScreen";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Question from "@/components/Question";
import Answers from "@/components/Answers";
import Results from "@/components/Results";

export default function Home() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const handleStart = (username: string) => {
    setHasStarted(true);
    setUsername(username);
  };

  const handleAnswer = (index: number) => {
    if (index === questions[questionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  const handleReset = () => {
    setQuestionIndex(0);
    setHasStarted(true);
    setScore(0);
  };

  const isFinished = questionIndex >= questions.length;

  return (
    <div>
      <Header />
      {!hasStarted && <StartScreen handleStart={handleStart} />}
      {hasStarted && !isFinished && (
        <>
          <Progress
            questionIndex={questionIndex}
            totalQuestions={questions.length}
          />
          <Question question={questions[questionIndex].question} />
          <Answers
            answers={questions[questionIndex].answers}
            handleAnswer={handleAnswer}
          />
        </>
      )}
      {isFinished && (
        <Results
          score={score}
          totalQuestions={questions.length}
          username={username}
          handleReset={handleReset}
        />
      )}
    </div>
  );
}
