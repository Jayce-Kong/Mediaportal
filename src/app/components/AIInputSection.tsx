import React from "react";
import { motion } from "motion/react";
import { 
  Plus, 
  Zap, 
  Orbit, 
  Globe, 
  Package, 
  History, 
  ArrowUp,
  MessageSquare
} from "lucide-react";
import { Container } from "./ui/Layout";
import mascotImg from "figma:asset/76c281c10e337f260fa63002426addb152f2d8db.png";

export function AIInputSection() {
  const [inputValue, setInputValue] = React.useState("");
  const suggestions = [
    "# 智能转码模板",
    "# 分析直播质量",
    "# 生成短视频封面",
    "# 自动化内容审核",
    "# 跨模态搜索",
    "# 提取视频摘要",
    "# 检测画面异常",
    "# 优化码率配置"
  ];

  return (
    <section className="relative pt-20 pb-0 overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 blur-[120px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[0.5px] border-white/5 rounded-full scale-150 pointer-events-none"></div>
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto">
          {/* Header text */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="text-gray-400 text-lg font-medium mb-1">九灵，你好！</div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">需要我为你做些什么</h2>
          </motion.div>

          {/* Main Input Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            {/* Input Box */}
            <div className="relative bg-[#111]/80 backdrop-blur-2xl border-2 border-white/10 rounded-[32px] p-6 shadow-2xl overflow-visible">
              <div className="text-gray-500 text-sm mb-8 px-2">
                请输入你的需求，可在下方切换“极速”/“思考”模式、使用的模型（优先 Nano Media Pro），注意数据安全哦
              </div>

              <div className="flex items-center justify-between gap-4">
                {/* Left Action */}
                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer shrink-0">
                  <Plus className="w-5 h-5 text-gray-400" />
                </button>

                {/* Center Content / Input Placeholder Area */}
                <div className="flex-grow">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="在此输入您的音视频处理需求..." 
                    className="w-full bg-transparent border-none outline-none text-lg text-white placeholder:text-gray-700"
                  />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Tooltip badge */}
                  <div className="absolute -top-12 right-12 hidden md:block">
                    <motion.div 
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 1.5 
                      }}
                      className="bg-indigo-600 text-[10px] font-bold px-3 py-1.5 rounded-full relative shadow-lg shadow-indigo-600/40 cursor-default"
                    >
                      Nano Media 2 上新，即刻体验！
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-600 rotate-45"></div>
                    </motion.div>
                  </div>

                  {/* Icon Group */}
                  <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1.5">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-indigo-400 cursor-pointer"><Zap className="w-4 h-4 fill-current" /></button>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-500 cursor-pointer"><Orbit className="w-4 h-4" /></button>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-500 cursor-pointer"><Globe className="w-4 h-4" /></button>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-500 cursor-pointer"><Package className="w-4 h-4" /></button>
                    <div className="w-px h-4 bg-white/10 mx-1"></div>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-500 cursor-pointer"><History className="w-4 h-4" /></button>
                  </div>

                  {/* Submit Button */}
                  <button 
                    className={`rounded-xl px-5 py-2.5 flex items-center gap-2 font-bold transition-all cursor-pointer ${
                      inputValue ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-gray-500/20 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <ArrowUp className="w-4 h-4" />
                    立即生成
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chips / Suggestions */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {suggestions.map((item, idx) => (
              <button 
                key={idx}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 text-xs font-medium text-gray-400 hover:text-white transition-all cursor-pointer"
              >
                {item}
              </button>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
