import { LucideIcon } from 'lucide-react';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index in options
}

export type AppState = 'setup' | 'quiz' | 'result';

export type QuizMode = 'standard' | 'race';

export interface QuizSettings {
  duration: number; // in minutes
  mode: QuizMode;
}

export interface QuizResult {
  score: number;
  total: number;
  timeSpent: number;
  answers: (number | null)[];
}
