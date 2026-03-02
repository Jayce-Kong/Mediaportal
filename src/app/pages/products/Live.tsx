import { motion } from "motion/react";
import { Radio, Users, Globe2, Activity, PlayCircle } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function Live() {
  const stats = [
    { label: "平均延迟", value: "< 2s" },
    { label: "并发上限", value: "千万级" },
    { label: "可用性", value: "99.99%" },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold mb-8"
          >
            <Radio className="w-5 h-5" />
            <span>实时直播架构</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-10 tracking-tight"
          >
            连接世界，<br />同步精彩。
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            为电商、游戏、教育等场景提供超低延迟、高可靠的全球直播解决方案，让互动不再受时空限制。
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="https://afts.alipay.com/afts/configuration/create"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 rounded-2xl bg-orange-500 text-white font-black text-xl hover:bg-orange-600 transition-all hover:scale-105 cursor-pointer shadow-2xl shadow-orange-500/30"
            >
              快速接入
            </a>
            <button className="px-12 py-5 rounded-2xl border border-white/20 text-white font-bold text-xl hover:bg-white/10 transition-all hover:scale-105 cursor-pointer">
              演示 Demo
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-12 border-y border-white/10 py-12">
            {stats.map((s, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-orange-500 mb-2">{s.value}</div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative group cursor-pointer"
          >
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1682617367184-ffc870089cbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaXZlJTIwc3RyZWFtaW5nJTIwc3R1ZGlvJTIwY29uY2VydCUyMGdhbWluZyUyMGVzcG9ydHMlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyNDMwMjQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              className="w-full h-auto aspect-video object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-orange-500/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <div className="absolute top-6 left-6 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="font-bold text-sm">LIVE</span>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="p-4 rounded-2xl bg-orange-500/10 h-fit">
                <Globe2 className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">全球加速网络</h3>
                <p className="text-gray-400">覆盖全球 200+ 国家和地区，通过 3000+ 节点网络确保各地用户流畅观看。</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="p-4 rounded-2xl bg-orange-500/10 h-fit">
                <Activity className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">全链路监控</h3>
                <p className="text-gray-400">秒级质量监测与异常溯源，实时掌控每一个观众的观看体验。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
