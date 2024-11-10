import React from 'react';
import { Timer } from 'lucide-react';
import { formatTime } from '../utils/timeFormat';

interface QuizTimerProps {
  time: number;
}

export function QuizTimer({ time }: QuizTimerProps) {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 mb-4">
      <div className="flex items-center space-x-2">
        <Timer className="w-6 h-6 text-indigo-600" />
        <span className="text-xl font-semibold">{formatTime(time)}</span>
      </div>
    </div>
  );
}