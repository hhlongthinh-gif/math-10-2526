import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, RotateCcw, Award, Clock, Target, Home } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { QuizResult } from '../types';
import { questions } from '../data';

interface ResultScreenProps {
  result: QuizResult;
  onRetry: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, onRetry, onHome }) => {
  const [showReview, setShowReview] = React.useState(false);
  const percentage = (result.score / result.total) * 100;

  const getFeedback = () => {
    if (percentage === 100) return "Sắc sảo! Khả năng toán học của bạn thật tuyệt vời.";
    if (percentage >= 80) return "Rất tốt! Bạn nắm vững hầu hết các kiến thức trọng tâm.";
    if (percentage >= 50) return "Khá ổn. Hãy ôn tập thêm các phần còn sai bạn nhé.";
    return "Cần nỗ lực hơn. Bạn nên xem lại lý thuyết và làm bài tập nhiều hơn.";
  };

  const getRank = () => {
    if (percentage === 100) return { title: "Huyền Thoại", color: "text-amber-500", bg: "bg-amber-50" };
    if (percentage >= 80) return { title: "Giỏi", color: "text-blue-500", bg: "bg-blue-50" };
    if (percentage >= 50) return { title: "Khá", color: "text-green-500", bg: "bg-green-50" };
    return { title: "Cần cố gắng", color: "text-gray-500", bg: "bg-gray-50" };
  };

  const rank = getRank();

  return (
    <div id="result-screen" className="max-w-4xl mx-auto px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[40px] shadow-2xl p-8 md:p-16 border border-indigo-50 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
        
        <div className="mb-10 inline-block relative">
           <div className={`p-6 rounded-full ${rank.bg} ${rank.color}`}>
              <Award size={64} strokeWidth={1.5} />
           </div>
           <motion.div 
             initial={{ rotate: 180, opacity: 0 }}
             animate={{ rotate: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg"
           >
              <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                 {Math.round(percentage)}%
              </div>
           </motion.div>
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Kết quả bài làm</h1>
        <p className={`text-2xl font-bold ${rank.color} mb-4 tracking-wide`}>{rank.title}</p>
        <p className="text-gray-500 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          {getFeedback()}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
            <Target className="text-indigo-600 mb-2" size={24} />
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Số câu đúng</p>
            <p className="text-3xl font-black text-gray-900">{result.score} <span className="text-lg text-gray-400">/ {result.total}</span></p>
          </div>
          <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
            <Clock className="text-indigo-600 mb-2" size={24} />
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Thời gian</p>
            <p className="text-3xl font-black text-gray-900">{Math.floor(result.timeSpent / 60)}m {result.timeSpent % 60}s</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-[2rem] flex flex-col items-center">
            <Award className="text-indigo-600 mb-2" size={24} />
            <p className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-1">Xếp loại</p>
            <p className="text-3xl font-black text-gray-900">{ rank.title }</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowReview(!showReview)}
            className="px-10 py-5 bg-white border-2 border-gray-100 rounded-2xl font-bold text-gray-700 hover:border-indigo-200 hover:bg-indigo-50 transition-all flex items-center justify-center gap-3"
          >
            {showReview ? 'Ẩn xem lại' : 'Xem lại bài làm'}
          </button>
          <button
            onClick={onRetry}
            className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all flex items-center justify-center gap-3"
          >
            <RotateCcw size={20} />
            Làm lại bài
          </button>
          <button
            onClick={onHome}
            className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-3"
          >
            <Home size={20} />
            Trang chủ
          </button>
        </div>
      </motion.div>

      {showReview && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 space-y-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 ml-4">
            <CheckCircle2 size={28} className="text-green-500" />
            Chi tiết đáp án
          </h2>
          
          {questions.map((q, idx) => {
            const userAns = result.answers[idx];
            const isCorrect = userAns === q.correctAnswer;
            
            return (
              <div key={q.id} className={`bg-white p-8 rounded-3xl border-2 transition-all ${isCorrect ? 'border-green-100' : 'border-red-100 shadow-sm'}`}>
                <div className="flex items-start justify-between mb-6">
                   <div className="flex items-start gap-4">
                      <span className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl font-bold text-white shadow-sm ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
                        {idx + 1}
                      </span>
                      <div className="text-xl font-bold text-gray-900 leading-snug pt-1">
                        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                          {q.text}
                        </ReactMarkdown>
                      </div>
                   </div>
                   {isCorrect ? <CheckCircle2 className="text-green-500 mt-1" /> : <XCircle className="text-red-500 mt-1" />}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {q.options.map((opt, oIdx) => {
                    const isUserChoice = userAns === oIdx;
                    const isCorrectChoice = q.correctAnswer === oIdx;
                    
                    let bgClass = 'bg-white border-gray-100 text-gray-500';
                    let borderClass = 'border-gray-100';
                    
                    if (isCorrectChoice) {
                      bgClass = 'bg-green-50 text-green-700 border-green-500 font-bold';
                      borderClass = 'border-green-500';
                    } else if (isUserChoice && !isCorrectChoice) {
                      bgClass = 'bg-red-50 text-red-700 border-red-500 font-bold';
                      borderClass = 'border-red-500';
                    }

                    return (
                      <div 
                        key={oIdx} 
                        className={`p-4 rounded-xl border-2 flex items-center gap-3 ${bgClass} ${borderClass}`}
                      >
                        <span className="font-mono">{['A', 'B', 'C', 'D'][oIdx]}.</span>
                        <div>
                          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                            {opt}
                          </ReactMarkdown>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          
          <div className="py-12 flex justify-center">
             <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="p-5 bg-white rounded-full shadow-lg border border-gray-100 text-gray-400 hover:text-indigo-600 transition-colors"
             >
                <Home size={28} />
             </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
