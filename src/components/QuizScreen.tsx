import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Send, Timer as TimerIcon } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { questions } from '../data';
import { QuizSettings, QuizResult } from '../types';

interface QuizScreenProps {
  settings: QuizSettings;
  onComplete: (result: QuizResult) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ settings, onComplete }) => {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState<(number | null)[]>(new Array(questions.length).fill(null));
  
  // Timers
  const isRaceMode = settings.mode === 'race';
  const RACE_TIME_PER_QUESTION = 30;
  
  const [timeLeft, setTimeLeft] = React.useState(isRaceMode ? RACE_TIME_PER_QUESTION : settings.duration * 60);
  const [startTime] = React.useState(Date.now());

  const handleSubmit = React.useCallback(() => {
    // Note: We use a functional update or closure value if needed, 
    // but here handleSubmit is usually called with the latest state in the effect or button click.
    // However, in a timer context, we should be careful.
    setAnswers(prevAnswers => {
      const totalCorrect = prevAnswers.reduce((acc, ans, idx) => {
        return acc + (ans === questions[idx].correctAnswer ? 1 : 0);
      }, 0);

      const timeSpent = Math.floor((Date.now() - startTime) / 1000);

      onComplete({
        score: totalCorrect,
        total: questions.length,
        timeSpent,
        answers: prevAnswers,
      });
      return prevAnswers;
    });
  }, [startTime, onComplete]);

  const handleNext = React.useCallback(() => {
    // Logic: In race mode, you MUST select an answer to proceed.
    if (isRaceMode && answers[currentIdx] === null) {
      return;
    }

    if (currentIdx === questions.length - 1) {
      handleSubmit();
    } else {
      setCurrentIdx(p => p + 1);
      if (isRaceMode) {
        setTimeLeft(RACE_TIME_PER_QUESTION);
      }
    }
  }, [currentIdx, isRaceMode, handleSubmit, answers]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (isRaceMode) {
            // Next question in race mode
            handleNext();
            return RACE_TIME_PER_QUESTION;
          } else {
            // End quiz in standard mode
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRaceMode, handleNext, handleSubmit]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelect = (optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIdx] = optionIdx;
    setAnswers(newAnswers);
  };

  const currentQuestion = questions[currentIdx];
  const progress = (answers.filter(a => a !== null).length / questions.length) * 100;

  return (
    <div id="quiz-screen" className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Questions Area */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[500px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-bold tracking-wider">
                CÂU HỎI {currentIdx + 1} / {questions.length}
              </span>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 text-orange-500 font-mono text-xl font-bold">
                  <TimerIcon size={20} />
                  <span>{formatTime(timeLeft)}</span>
                </div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                  {isRaceMode ? "Thời gian câu hỏi" : "Thời gian còn lại"}
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl font-bold text-gray-900 mb-8 leading-snug">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {currentQuestion.text}
                  </ReactMarkdown>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, idx) => {
                    const optionLabel = ['A', 'B', 'C', 'D'][idx];
                    const isSelected = answers[currentIdx] === idx;
                    
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        className={`flex items-center p-5 rounded-2xl border-2 transition-all duration-200 group text-left ${
                          isSelected 
                            ? 'bg-indigo-50 border-indigo-600 ring-4 ring-indigo-50' 
                            : 'border-gray-100 hover:border-indigo-200 hover:bg-gray-50'
                        }`}
                      >
                        <span className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl font-bold mr-4 border-2 transition-colors ${
                           isSelected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-400 border-gray-100 group-hover:border-indigo-200 group-hover:text-indigo-500'
                        }`}>
                          {optionLabel}
                        </span>
                        <div className={`text-lg transition-colors ${isSelected ? 'text-indigo-900 font-semibold' : 'text-gray-700'}`}>
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {option}
                          </ReactMarkdown>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-50">
            <button
              disabled={currentIdx === 0 || isRaceMode}
              onClick={() => {
                setCurrentIdx(p => p - 1);
                if (isRaceMode) {
                   // This shouldn't be accessible but safety check
                   setTimeLeft(RACE_TIME_PER_QUESTION);
                }
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-100 disabled:opacity-30 transition-all"
            >
              <ChevronLeft size={20} />
              Câu trước
            </button>
            <button
              onClick={handleNext}
              disabled={isRaceMode && answers[currentIdx] === null}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
              style={{ display: currentIdx === questions.length - 1 ? 'none' : 'flex' }}
            >
              Câu tiếp theo
              <ChevronRight size={20} />
            </button>
            {currentIdx === questions.length - 1 && (
               <button
               onClick={handleSubmit}
               disabled={isRaceMode && answers[currentIdx] === null}
               className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-100 transition-all font-mono disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <Send size={20} />
               Hoàn thành
             </button>
            )}
          </div>
        </div>
      </div>

      {/* Right: Navigation Sidebar */}
      <div className="space-y-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-8">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center justify-between">
            <span>Tiến trình làm bài</span>
            <span className="text-indigo-600">{Math.round(progress)}%</span>
          </h3>
          
          <div className="w-full h-3 bg-gray-100 rounded-full mb-8 overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-600"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="grid grid-cols-5 gap-2">
            {questions.map((_, i) => (
              <button
                key={i}
                disabled={isRaceMode && i > currentIdx}
                onClick={() => {
                  if (isRaceMode && i > currentIdx) return;
                  setCurrentIdx(i);
                }}
                className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all border-2 ${
                  currentIdx === i 
                    ? 'border-indigo-600 bg-indigo-600 text-white' 
                    : answers[i] !== null 
                      ? 'border-indigo-100 bg-indigo-50 text-indigo-600' 
                      : 'border-gray-50 bg-gray-50 text-gray-400 hover:border-gray-200'
                } ${isRaceMode && i > currentIdx ? 'cursor-not-allowed opacity-30' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-50 grid grid-cols-2 gap-4">
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-600"></div>
                <span className="text-xs text-gray-500 font-medium">Đang xem</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-50 border border-indigo-100"></div>
                <span className="text-xs text-gray-500 font-medium">Đã chọn</span>
             </div>
          </div>

          <div className="mt-6">
             <button
              onClick={handleSubmit}
              className="w-full py-4 rounded-2xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
             >
               <Send size={18} />
               Kết thúc & Nộp bài
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};
