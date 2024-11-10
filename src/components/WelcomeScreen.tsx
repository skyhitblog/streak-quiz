import React from 'react';
import { Brain } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-center mb-6">
          <Brain className="w-12 h-12 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome to Streak Quiz!
        </h1>
        <div className="space-y-4 mb-8 text-gray-600">
          <p className="text-center">Test your knowledge with our carefully curated questions.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The quiz consists of 5 multiple-choice questions</li>
            <li>Each correct answer is worth 1 point</li>
            <li>Timer starts when you begin the quiz</li>
            <li>You can end the quiz at any time</li>
            <li>Your final score and time will be displayed at the end</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}