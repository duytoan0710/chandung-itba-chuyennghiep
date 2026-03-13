import { motion } from 'motion/react';
import { UserCircle, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-sm font-semibold tracking-wide uppercase mb-8">
            <UserCircle size={18} />
            Bài học 7
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-tight">
            Chân dung <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">ITBA Chuyên nghiệp</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Biết mình <strong className="text-white font-semibold">đứng đâu</strong> và <strong className="text-white font-semibold">làm gì</strong> trong bức tranh lớn. Giải phẫu năng lực và định vị bản thân theo chuẩn BABOK® v3.
          </p>
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('anatomy')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold shadow-xl shadow-white/10 hover:bg-slate-100 transition-all"
          >
            Giải phẫu ITBA
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
