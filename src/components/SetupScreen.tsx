import React from 'react';
import { motion } from 'motion/react';
import { Play, Clock, Calculator, GraduationCap, Zap, Settings2 } from 'lucide-react';
import { QuizSettings, QuizMode } from '../types';
import { questions } from '../data';

interface SetupScreenProps {
  onStart: (settings: QuizSettings) => void;
}

export const SetupScreen: React.FC<SetupScreenProps> = ({ onStart }) => {
  const [duration, setDuration] = React.useState(20);
  const [mode, setMode] = React.useState<QuizMode>('standard');

  const durationOptions = [10, 15, 20, 30, 45, 60];

  return (
    <div id="setup-screen" className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-indigo-50 p-8 md:p-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-indigo-100 rounded-2xl text-indigo-600">
            <GraduationCap size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Hệ Thống Kiểm Tra Toán Học</h1>
        </div>

        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
          Chào mừng bạn đến với bài kiểm tra chuyên đề tổng hợp Toán học: Hình học Oxy, Đường tròn, Nhị thức Newton, Các đường Conic và Xác suất. 
          Vui lòng chọn chế độ và thời gian làm bài để bắt đầu.
        </p>

        <div className="space-y-8">
          {/* Mode Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-gray-700 font-medium text-lg">
              <Settings2 size={20} className="text-indigo-500" />
              <span>Chế độ kiểm tra</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setMode('standard')}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  mode === 'standard' 
                    ? 'border-indigo-600 bg-indigo-50 ring-4 ring-indigo-50' 
                    : 'border-gray-100 bg-white hover:border-indigo-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${mode === 'standard' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <Clock size={18} />
                  </div>
                  <span className={`font-bold ${mode === 'standard' ? 'text-indigo-900' : 'text-gray-700'}`}>Tiêu chuẩn</span>
                </div>
                <p className="text-sm text-gray-500 leading-snug">Tính tổng thời gian làm bài cho toàn bộ câu hỏi.</p>
              </button>

              <button
                onClick={() => setMode('race')}
                className={`p-4 rounded-2xl border-2 text-left transition-all ${
                  mode === 'race' 
                    ? 'border-orange-500 bg-orange-50 ring-4 ring-orange-50' 
                    : 'border-gray-100 bg-white hover:border-orange-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${mode === 'race' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                    <Zap size={18} />
                  </div>
                  <span className={`font-bold ${mode === 'race' ? 'text-orange-900' : 'text-gray-700'}`}>Chạy đua (Race)</span>
                </div>
                <p className="text-sm text-gray-500 leading-snug">Mỗi câu hỏi có 30 giây để hoàn thành. Thử thách tốc độ!</p>
              </button>
            </div>
          </div>

          {/* Time Selection - Only show for standard mode or use as fallback? User specifically asked for race mode functionality. */}
          {mode === 'standard' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-gray-700 font-medium text-lg">
                <Clock size={20} className="text-indigo-500" />
                <span>Thời lượng kiểm tra (phút)</span>
              </div>

              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {durationOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setDuration(opt)}
                    className={`py-3 rounded-xl font-semibold transition-all duration-200 border-2 ${
                      duration === opt 
                        ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105' 
                        : 'bg-white border-gray-100 text-gray-600 hover:border-indigo-200 hover:bg-indigo-50'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="pt-4">
            <button
              onClick={() => onStart({ duration: mode === 'race' ? (questions.length * 30 / 60) : duration, mode })}
              className={`w-full text-white py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl ${
                mode === 'race' 
                  ? 'bg-orange-500 hover:bg-orange-600 shadow-orange-100' 
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100'
              }`}
            >
              <Play size={24} fill="currentColor" />
              Bắt đầu kiểm tra
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 pt-8 border-t border-gray-50">
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 bg-green-50 rounded-lg text-green-600">
              <Calculator size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{questions.length} Câu hỏi</h3>
              <p className="text-sm text-gray-500">Trắc nghiệm kiến thức tổng hợp</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="mt-1 p-2 bg-blue-50 rounded-lg text-blue-600">
              <Clock size={18} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Tự do thời gian</h3>
              <p className="text-sm text-gray-500">Tùy chỉnh linh hoạt theo trình độ</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
