import { motion } from 'motion/react';

const levels = [
  {
    level: 1,
    title: 'General Awareness',
    subtitle: 'Nhận thức cơ bản (Junior)',
    desc: 'Hiểu các khái niệm cơ bản. Thực hiện các task phân tích dưới sự hướng dẫn chi tiết. Tập trung vào việc "Làm đúng quy trình".',
    color: 'bg-slate-100 border-slate-200 text-slate-600',
    activeColor: 'bg-blue-50 border-blue-200 text-blue-700'
  },
  {
    level: 2,
    title: 'Practical Knowledge',
    subtitle: 'Kiến thức thực tế (Mid-level)',
    desc: 'Độc lập thực hiện các task BA tiêu chuẩn. Có khả năng tùy chỉnh quy trình cho phù hợp với dự án. Tập trung vào "Giải quyết vấn đề".',
    color: 'bg-slate-100 border-slate-200 text-slate-600',
    activeColor: 'bg-indigo-50 border-indigo-200 text-indigo-700'
  },
  {
    level: 3,
    title: 'Recognized',
    subtitle: 'Được công nhận (Senior)',
    desc: 'Xử lý các bài toán phức tạp, mơ hồ. Dẫn dắt và coaching cho các BA khác. Tập trung vào "Tối ưu hóa giải pháp".',
    color: 'bg-slate-100 border-slate-200 text-slate-600',
    activeColor: 'bg-purple-50 border-purple-200 text-purple-700'
  },
  {
    level: 4,
    title: 'Expert',
    subtitle: 'Chuyên gia (Lead/Principal)',
    desc: 'Định hình chiến lược doanh nghiệp. Tạo ra các phương pháp luận mới. Tập trung vào "Tạo ra giá trị đột phá".',
    color: 'bg-slate-100 border-slate-200 text-slate-600',
    activeColor: 'bg-emerald-50 border-emerald-200 text-emerald-700'
  }
];

export default function MaturityLevels() {
  return (
    <section className="my-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Biết Mình Đứng Đâu</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Thước đo độ trưởng thành (Competency Model) theo BABOK. Hãy tự soi chiếu xem bạn đang ở bậc thang nào trong sự nghiệp ITBA.
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          {levels.map((lvl, index) => (
            <motion.div
              key={lvl.level}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              className={`relative p-6 md:p-8 rounded-3xl border-2 transition-all hover:shadow-lg flex flex-col md:flex-row items-start md:items-center gap-6 ${lvl.activeColor}`}
            >
              <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl font-black">
                L{lvl.level}
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-2">
                  <h3 className="text-2xl font-bold">{lvl.title}</h3>
                  <span className="text-sm font-semibold uppercase tracking-wider opacity-70">{lvl.subtitle}</span>
                </div>
                <p className="text-base opacity-90 leading-relaxed">{lvl.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
