import React from 'react';
import { Trophy } from 'lucide-react';
import { formatTime } from '../utils/timeFormat';

interface ResultScreenProps {
  score: number;
  time: number;
}

export function ResultScreen({ score, time }: ResultScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Quiz Complete!</h2>
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-700">
            Streak Points Earned: <span className="font-bold text-indigo-600">{score}/5</span>
          </p>
          <p className="text-xl text-gray-700">
            Time Taken: <span className="font-bold text-indigo-600">{formatTime(time)}</span>
          </p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}