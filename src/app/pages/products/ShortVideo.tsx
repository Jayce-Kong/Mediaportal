import { motion } from "motion/react";
import { Film, CheckCircle2, Zap, Layout, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

export function ShortVideo() {
  const features = [
    { icon: <Zap className="text-pink-500" />, title: "毫秒级上传", desc: "自研上传协议，支持断点续传与多链路加速。" },
    { icon: <Layout className="text-cyan-500" />, title: "智能云剪辑", desc: "提供丰富的滤镜、转场及自动字幕功能。" },
    { icon: <ShieldCheck className="text-green-500" />, title: "全自动审核", desc: "基于深度学习的内容审核，识别率达 99.9%。" },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      <section className="container mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-pink-500/10">
                <Film className="w-8 h-8 text-pink-500" />
              </div>
              <span className="text-xl font-bold tracking-tight">短视频解决方案</span>
            </div>
            <h1 className="text-5xl font-black mb-8 leading-tight">
              赋能每一份<br /><span className="text-pink-500 text-6xl">创意表达</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              为内容创作者与企业提供从拍摄、编辑、上传到分发的一站式短视频技术支撑，助力业务快速爆发。
            </p>
            <div className="flex flex-wrap gap-4 mt-12">
              <a 
                href="https://afts.alipay.com/afts/configuration/create"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-pink-500 text-white font-bold text-lg hover:bg-pink-600 transition-all hover:scale-105 cursor-pointer shadow-xl shadow-pink-500/20"
              >
                快速接入
              </a>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 cursor-pointer">
                技术文档
              </button>
            </div>
            <div className="mt-12 space-y-6">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="mt-1">{f.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg">{f.title}</h4>
                    <p className="text-gray-500 text-sm">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-pink-500/10">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1764664281859-36f1b637b6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB2aWRlbyUyMGVkaXRpbmclMjBzaG9ydCUyMHZpZGVvJTIwY29udGVudCUyMGNyZWF0b3J8ZW58MXx8fHwxNzcyNDMwMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-gray-900 border border-white/10 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-bold">企业级保障</span>
              </div>
              <p className="text-xs text-gray-500">已为超过 10,000+ 开发者提供稳定的音视频服务支持。</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
