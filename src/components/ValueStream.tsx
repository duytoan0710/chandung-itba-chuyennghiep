import { motion } from 'motion/react';
import { Target, ArrowRight, Building2, Code2, Gem } from 'lucide-react';

export default function ValueStream() {
  return (
    <section className="my-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Làm Gì Trong Bức Tranh Lớn?</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          ITBA không tạo ra code, cũng không trực tiếp bán hàng. Giá trị của ITBA nằm ở việc đảm bảo dòng chảy từ <strong>Chiến lược</strong> đến <strong>Thực thi</strong> không bị đứt gãy.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Step 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center w-full relative z-10"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">1. Business Strategy</h3>
            <p className="text-sm text-slate-500">Mục tiêu kinh doanh, Vấn đề thị trường.</p>
          </motion.div>

          <ArrowRight className="hidden lg:block text-slate-300 flex-shrink-0" size={24} />

          {/* Step 2 (ITBA) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-[1.5] bg-blue-600 p-8 rounded-3xl shadow-xl text-center w-full relative z-20 text-white transform lg:-translate-y-4"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-800 text-blue-100 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Vùng đất của ITBA
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Target size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">2. Solution Alignment</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              Phân tích nhu cầu thực sự, thiết kế giải pháp, và dịch ngôn ngữ Business sang ngôn ngữ Tech.
            </p>
          </motion.div>

          <ArrowRight className="hidden lg:block text-slate-300 flex-shrink-0" size={24} />

          {/* Step 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center w-full relative z-10"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 size={24} />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">3. IT Execution</h3>
            <p className="text-sm text-slate-500">Phát triển phần mềm, Kiểm thử, Triển khai.</p>
          </motion.div>

          <ArrowRight className="hidden lg:block text-slate-300 flex-shrink-0" size={24} />

          {/* Step 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex-1 bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm text-center w-full relative z-10"
          >
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gem size={24} />
            </div>
            <h3 className="font-bold text-emerald-900 mb-2">4. Value Realization</h3>
            <p className="text-sm text-emerald-700">Giải quyết vấn đề, Tăng doanh thu, Giảm chi phí.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
