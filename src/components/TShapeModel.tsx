import { motion } from 'motion/react';

export default function TShapeModel() {
  return (
    <section className="my-32 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full -z-10" />

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Mô hình T-Shaped Professional</h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          ITBA chuyên nghiệp là một "T-Shaped Person". Họ có kiến thức rộng về nhiều lĩnh vực để có thể giao tiếp với mọi người, và có chuyên môn sâu về phân tích nghiệp vụ để giải quyết vấn đề.
        </p>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Horizontal Bar (Broad Knowledge) */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-2xl p-6 md:p-8 shadow-2xl z-10 origin-center"
        >
          <h3 className="text-center font-bold text-xl mb-6 text-white/90 uppercase tracking-widest">Kiến thức rộng (Broad Knowledge)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-semibold text-blue-100 mb-2">Business Domain</h4>
              <p className="text-sm text-slate-300">Tài chính, Y tế, Logistics, E-commerce...</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-semibold text-indigo-100 mb-2">Tech Trends</h4>
              <p className="text-sm text-slate-300">Cloud, AI, API, Database, System Architecture...</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <h4 className="font-semibold text-purple-100 mb-2">Soft Skills</h4>
              <p className="text-sm text-slate-300">Giao tiếp, Đàm phán, Quản lý dự án (Agile/Scrum)...</p>
            </div>
          </div>
        </motion.div>

        {/* Vertical Bar (Deep Expertise) */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="w-full md:w-1/2 bg-slate-800 border-x border-b border-slate-700 rounded-b-3xl p-8 shadow-xl -mt-4 pt-12 origin-top"
        >
          <h3 className="text-center font-bold text-xl mb-8 text-emerald-400 uppercase tracking-widest">Chuyên môn sâu (Deep Expertise)</h3>
          <ul className="space-y-6">
            <li className="flex flex-col items-center text-center">
              <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 mb-2">1</span>
              <span className="font-medium text-slate-200">Business Analysis Planning & Monitoring</span>
              <span className="text-sm text-slate-400 mt-1">Lập kế hoạch và giám sát</span>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 mb-2">2</span>
              <span className="font-medium text-slate-200">Elicitation & Collaboration</span>
              <span className="text-sm text-slate-400 mt-1">Khơi gợi và cộng tác</span>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 mb-2">3</span>
              <span className="font-medium text-slate-200">Requirements Life Cycle Management</span>
              <span className="text-sm text-slate-400 mt-1">Quản lý vòng đời yêu cầu</span>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 mb-2">4</span>
              <span className="font-medium text-slate-200">Strategy Analysis</span>
              <span className="text-sm text-slate-400 mt-1">Phân tích chiến lược</span>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 mb-2">5</span>
              <span className="font-medium text-slate-200">Requirements Analysis & Design Definition</span>
              <span className="text-sm text-slate-400 mt-1">Phân tích yêu cầu và định nghĩa thiết kế</span>
            </li>
            <li className="flex flex-col items-center text-center">
              <span className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 mb-2">6</span>
              <span className="font-medium text-slate-200">Solution Evaluation</span>
              <span className="text-sm text-slate-400 mt-1">Đánh giá giải pháp</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
