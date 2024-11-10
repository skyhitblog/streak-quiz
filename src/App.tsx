import React, { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ResultScreen } from './components/ResultScreen';
import { QuizTimer } from './components/QuizTimer';
import { QuizQuestion } from './components/QuizQuestion';
import quizData from './data/quizData';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timerInterval, setTimerInterval] = useState<number | null>(null);

  const startQuiz = () => {
    setIsStarted(true);
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    setTimerInterval(Number(interval));
  };

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const endQuiz = () => {
    if (timerInterval) clearInterval(timerInterval);
    const finalScore = quizData.reduce((acc, question) => {
      return answers[question.id] === question.correctAnswer ? acc + 1 : acc;
    }, 0);
    setScore(finalScore);
    setIsEnded(true);
  };

  if (!isStarted) {
    return <WelcomeScreen onStart={startQuiz} />;
  }

  if (isEnded) {
    return <ResultScreen score={score} time={time} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="max-w-3xl mx-auto">
        <QuizTimer time={time} />
        
        <div className="space-y-6 mb-8">
          {quizData.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              index={index}
              selectedAnswer={answers[question.id]}
              onAnswerSelect={handleAnswer}
            />
          ))}
        </div>

        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={endQuiz}
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            End Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;