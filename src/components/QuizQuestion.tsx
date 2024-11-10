import React from 'react';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  index: number;
  selectedAnswer?: string;
  onAnswerSelect: (questionId: number, answer: string) => void;
}

export function QuizQuestion({ question, index, selectedAnswer, onAnswerSelect }: QuizQuestionProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {index + 1}. {question.question}
      </h3>
      <div className="grid gap-3">
        {question.options.map((option) => (
          <label
            key={option}
            className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
              selectedAnswer === option
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerSelect(question.id, option)}
              className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
            />
            <span className="ml-3 text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}