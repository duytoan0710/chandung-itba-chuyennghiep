import { motion } from 'motion/react';
import { Brain, Eye, Ear, Heart, Hand } from 'lucide-react';

const parts = [
  {
    id: 'head',
    name: 'Cái Đầu (Mindset)',
    desc: 'Tư duy hệ thống (Systems Thinking) và định hướng giá trị. Luôn đặt câu hỏi "Tại sao?" trước khi hỏi "Làm như thế nào?".',
    icon: Brain,
    color: 'text-purple-500',
    bg: 'bg-purple-100',
    position: 'md:col-span-2 md:justify-self-center'
  },
  {
    id: 'eye',
    name: 'Đôi Mắt (Vision)',
    desc: 'Tầm nhìn chiến lược. Nhìn thấy bức tranh lớn (Big Picture) và cách giải pháp công nghệ khớp với mục tiêu kinh doanh.',
    icon: Eye,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
    position: ''
  },
  {
    id: 'ear',
    name: 'Tai & Miệng (Communication)',
    desc: 'Lắng nghe sâu (Active Listening) để thấu hiểu nhu cầu thực. Giao tiếp mạch lạc để truyền đạt yêu cầu giữa Business và IT.',
    icon: Ear,
    color: 'text-emerald-500',
    bg: 'bg-emerald-100',
    position: ''
  },
  {
    id: 'heart',
    name: 'Trái Tim (Empathy)',
    desc: 'Sự thấu cảm. Hiểu được nỗi đau (Pain-points) của người dùng và quản lý kỳ vọng của các bên liên quan (Stakeholder Management).',
    icon: Heart,
    color: 'text-rose-500',
    bg: 'bg-rose-100',
    position: ''
  },
  {
    id: 'hand',
    name: 'Đôi Tay (Hard Skills)',
    desc: 'Kỹ năng thực thi: Khơi gợi (Elicitation), Mô hình hóa (BPMN, UML), Viết tài liệu (BRD, SRS) và Phân tích dữ liệu.',
    icon: Hand,
    color: 'text-amber-500',
    bg: 'bg-amber-100',
    position: ''
  }
];

export default function Anatomy() {
  return (
    <section id="anatomy" className="my-32 scroll-mt-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Giải Phẫu Một ITBA</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Chân dung của một ITBA không chỉ nằm ở việc biết dùng công cụ, mà là sự kết hợp hoàn hảo giữa Tư duy, Thấu cảm và Kỹ năng thực thi.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {parts.map((part, index) => (
          <motion.div
            key={part.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-6 ${part.position}`}
          >
            <div className={`w-16 h-16 ${part.bg} ${part.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <part.icon size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{part.name}</h3>
              <p className="text-slate-600 leading-relaxed">{part.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
