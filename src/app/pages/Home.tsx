import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { 
  BarChart3, 
  Activity, 
  Zap, 
  Cloud, 
  Film,
  Radio,
  Cpu,
  ArrowRight
} from "lucide-react";

const products = [
  {
    title: "短视频",
    icon: <Film className="w-8 h-8 text-pink-500" />,
    description: "端到端短视频集成方案，涵盖极速采集、云端编辑、全球分发与智能审核。",
    features: ["极速上传", "云剪辑", "智能审核"]
  },
  {
    title: "直播",
    icon: <Radio className="w-8 h-8 text-orange-500" />,
    description: "高并发、低延迟的全球直播服务，支持千万级用户同时在线互动与多协议分发。",
    features: ["秒开播", "全网分发", "低延迟"]
  },
  {
    title: "多模态",
    icon: <Cpu className="w-8 h-8 text-cyan-500" />,
    description: "基于 AI 的跨模态处理能力，支持视频内容分析、音视频同步理解与自动化标注。",
    features: ["视觉识别", "语音转译", "情感分析"]
  }
];

const features = [
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    title: "多维度监控",
    description: "全方位实时监控音视频服务质量，秒级响应异常告警。",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    title: "资源控制",
    description: "精细化管理计算与存储资源，实现降本增效的目标。",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "极速集成",
    description: "提供标准化 SDK 与 API，助力业务团队快速接入音视频能力。",
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    title: "云原生架构",
    description: "基于容器化部署，支持弹性扩容，保障业务高可用。",
  },
];

export function Home() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <Hero />

      {/* Product Highlights Section */}
      <section className="container mx-auto px-6 py-24 border-b border-white/5">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-cyan-500 tracking-[0.2em] mb-4 uppercase">Core Products</h2>
          <h3 className="text-4xl font-bold">核心业务领域</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                {product.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{product.title}</h4>
              <p className="text-gray-400 mb-8 min-h-[80px]">
                {product.description}
              </p>
              <div className="space-y-3 mb-8">
                {product.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>
                    {f}
                  </div>
                ))}
              </div>
              <a 
                href="https://afts.alipay.com/afts/configuration/create"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all hover:text-cyan-400"
              >
                快速接入 <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            全方位的音视频能力支撑
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            从研发到运维，从资源到业务，我们提供一站式的音视频集成方案。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden p-12 lg:p-24 text-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-black -z-10"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">
              准备好开始您的音视频项目了吗？
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              加入我们，与顶尖的音视频专家团队合作，打造世界级的产品体验。
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="px-12 py-4 rounded-xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 cursor-pointer shadow-xl shadow-white/10">
                立即咨询
              </button>
              <a 
                href="https://afts.alipay.com/afts/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-4 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 cursor-pointer flex items-center justify-center"
              >
                我们的团队
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
