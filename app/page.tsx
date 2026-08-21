"use client";
import { useState } from "react";
import { questions } from "@/data/questions";
import StartScreen from "@/components/StartScreen";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Question from "@/components/Question";
import Answers from "@/components/Answers";

export default function Home() {
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [username, setUsername] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const handleStart = (username: string) => {
    setHasStarted(true);
    setUsername(username);
  };
  const currentQuestion = questions[questionIndex];

  const handleAnswer = (index: number) => {
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setQuestionIndex(questionIndex + 1);
  };

  const isFinished = questionIndex >= questions.length;

  return (
    <div>
      <Header />
      {!hasStarted && <StartScreen handleStart={handleStart} />}
      {hasStarted && !isFinished && (
        <>
        <Progress questionIndex={questionIndex} totalQuestions={questions.length} /> 
        <Question question={currentQuestion.question} />
        <Answers answers={currentQuestion.answers} handleAnswer={handleAnswer} />
        </>
      )}
    </div>
  );
}
