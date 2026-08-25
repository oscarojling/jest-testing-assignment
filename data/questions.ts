import type { Question } from "@/types/types";

export const questions: Question[] = [
  {
    question: "Which group did Sweden play in during the 2026 World Cup?",
    answers: ["Group F", "Group B", "Group D"],
    correctAnswer: 0,
  },
  {
    question: "Sweden won against Tunisia in their opening game. What was the score?",
    answers: ["5-1", "4-1", "3-1"],
    correctAnswer: 0,
  },
  {
    question: "Sweden lost to the Neherlands. What was the score?",
    answers: ["1-4", "1-5", "2-5"],
    correctAnswer: 1,
  },

  {
    question: "In the last game of the group, Sweden drew against Japan. What was the score?",
    answers: ["0-0", "2-2", "1-1"],
    correctAnswer: 2,
  },

  {
    question: "In the Round of 32, Sweden lost to France. What was the score?",
    answers: ["2-0", "3-0", "1-0"],
    correctAnswer: 1,
  },
];
