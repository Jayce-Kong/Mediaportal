import { motion } from "motion/react";
import { Cpu, Brain, Network, Eye, Languages, BarChart } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function Multimodal() {
  const aiCapabilities = [
    { icon: <Eye />, title: "视觉识别", desc: "识别 10,000+ 物体、场景及面部特征。" },
    { icon: <Languages />, title: "语音转译", desc: "支持 50+ 种语言的实时语音转文字及翻译。" },
    { icon: <BarChart />, title: "情感分析", desc: "深度挖掘视频中的情感波动与语义内涵。" },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-bold mb-8">
              <Brain className="w-5 h-5" />
              <span>多模态 AI 模型</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-10 leading-tight">
              理解视频，<br />从未如此<span className="text-cyan-500">深刻</span>。
            </h1>
            <p className="text-xl text-gray-400 mb-12 max-w-xl">
              结合视觉、听觉与文本数据，实现对复杂音视频内容的深度理解，从海量数据中挖掘核心商业价值。
            </p>
            
            <div className="flex flex-wrap gap-4 mt-12 mb-12">
              <a 
                href="https://afts.alipay.com/afts/configuration/create"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-black text-lg hover:bg-cyan-400 transition-all hover:scale-105 cursor-pointer shadow-xl shadow-cyan-500/20"
              >
                快速接入
              </a>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 cursor-pointer">
                API 文档
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {aiCapabilities.map((cap, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all cursor-default">
                  <div className="text-cyan-500 mb-4">{cap.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{cap.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 relative"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1678845536613-5cf0ec5245cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbXVsdGltb2RhbCUyMG5ldXJhbCUyMG5ldHdvcmslMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzI0MzAyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  className="w-full h-auto aspect-[4/5] object-cover"
                />
              </div>
            </div>
            
            {/* Floating UI cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 p-6 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Network className="text-cyan-400 w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Neural Load</div>
                  <div className="text-2xl font-black">94.2%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
