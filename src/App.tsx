/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SetupScreen } from './components/SetupScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { AppState, QuizSettings, QuizResult } from './types';

export default function App() {
  const [appState, setAppState] = useState<AppState>('setup');
  const [settings, setSettings] = useState<QuizSettings>({ duration: 20, mode: 'standard' });
  const [result, setResult] = useState<QuizResult | null>(null);

  const startQuiz = (newSettings: QuizSettings) => {
    setSettings(newSettings);
    setAppState('quiz');
  };

  const completeQuiz = (newResult: QuizResult) => {
    setResult(newResult);
    setAppState('result');
  };

  const resetQuiz = () => {
    setResult(null);
    setAppState('setup');
  };

  const retryQuiz = () => {
    setResult(null);
    setAppState('quiz');
  };

  return (
    <div className="min-h-screen bg-[#fcfdff] font-sans text-gray-900 selection:bg-indigo-100 selection:text-indigo-700">
      <header className="py-6 px-4 md:px-8 flex items-center justify-between border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={resetQuiz}>
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-indigo-100">
            M
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            Math<span className="text-indigo-600">Pro</span>
          </span>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <AnimatePresence mode="wait">
          {appState === 'setup' && (
            <motion.div
              key="setup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SetupScreen onStart={startQuiz} />
            </motion.div>
          )}

          {appState === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <QuizScreen settings={settings} onComplete={completeQuiz} />
            </motion.div>
          )}

          {appState === 'result' && result && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResultScreen 
                result={result} 
                onRetry={retryQuiz} 
                onHome={resetQuiz} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="py-12 mt-12 border-t border-gray-50 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400 font-medium">© 2026 MathPro Learning Systems</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Terms of Service</a>
          <a href="#" className="text-xs text-gray-400 hover:text-indigo-600 transition-colors">Contact Support</a>
        </div>
      </footer>
    </div>
  );
}
