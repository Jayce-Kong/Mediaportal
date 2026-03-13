import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Upload, 
  Image as ImageIcon, 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  RefreshCw,
  Plus,
  Play,
  Check,
  Video,
  Info,
  Maximize2
} from "lucide-react";
import { Container } from "../../components/ui/Layout";
import { Button } from "../../components/ui/Common";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const MOCK_FRAMES = [
  { url: "https://images.unsplash.com/photo-1610874222057-a3b745240495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", score: "8.5", time: "00:04", label: "景深优异" },
  { url: "https://images.unsplash.com/photo-1610130210700-590e35b3731f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", score: "8.8", time: "00:12", label: "动作张力" },
  { url: "https://images.unsplash.com/photo-1586641625488-102ca50cac84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", score: "9.5", time: "00:25", label: "最佳构图" },
  { url: "https://images.unsplash.com/photo-1758805770216-94673a0b9311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", score: "9.2", time: "00:38", label: "色彩丰富" },
  { url: "https://images.unsplash.com/photo-1632670535523-161b063d84e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", score: "8.9", time: "00:52", label: "主体清晰" },
];

export function SmartCover() {
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResult, setShowResult] = useState(true); // Default true for preview as requested
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setShowResult(true);
      }, 2000);
    }, 1500);
  };

  const nextFrame = () => setSelectedIndex(prev => Math.min(MOCK_FRAMES.length - 1, prev + 1));
  const prevFrame = () => setSelectedIndex(prev => Math.max(0, prev - 1));

  return (
    <div className="min-h-screen pt-24 pb-20 bg-[#050505] text-white selection:bg-purple-500/30">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <ImageIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight">智能封面</h1>
                <p className="text-gray-500 text-lg">AI 内容理解与视觉显著性分析引擎</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" color="white" onClick={() => setShowResult(false)}>
              <Upload className="w-4 h-4 mr-2" /> 重新上传
            </Button>
            <Button color="purple" className="shadow-xl shadow-purple-500/20">
              <Download className="w-4 h-4 mr-2" /> 导出选定帧
            </Button>
          </div>
        </div>

        {!showResult ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div 
              onClick={!isUploading && !isProcessing ? handleUpload : undefined}
              className={`
                relative h-[400px] border-2 border-dashed rounded-[48px] flex flex-col items-center justify-center transition-all duration-700 overflow-hidden
                ${isUploading || isProcessing ? 'border-purple-500/50 bg-purple-500/5' : 'border-white/10 hover:border-purple-500/30 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer'}
              `}
            >
              <AnimatePresence mode="wait">
                {isUploading || isProcessing ? (
                  <motion.div 
                    key="active"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-24 h-24 mb-8">
                       <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-b-2 border-r-2 border-purple-500 rounded-full"
                       />
                       <div className="absolute inset-2 border border-white/10 rounded-full animate-pulse flex items-center justify-center">
                          <Video className="w-8 h-8 text-purple-400" />
                       </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{isUploading ? '正在极速上传...' : 'AI 正在理解视频内容...'}</h3>
                    <p className="text-gray-500">{isUploading ? '正在与 Nano 云端同步数据' : '正在计算显着性图与构图权重'}</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 bg-white/5 rounded-[32px] flex items-center justify-center mb-8 group-hover:bg-purple-500/10 group-hover:scale-110 transition-all duration-500">
                      <Plus className="w-12 h-12 text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">上传视频以开始</h3>
                    <p className="text-gray-500 text-center max-w-sm">点击或将文件拖拽至此处，支持 4K 高动态视频内容分析</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ) : (
          <div className="space-y-12">
            {/* Film Strip Carousel Container */}
            <div className="relative h-[600px] w-full bg-[#0a0a0a] rounded-[64px] border border-white/5 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
              {/* Background Ambient Glow */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={selectedIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.15 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 blur-[100px] pointer-events-none"
                >
                  <img src={MOCK_FRAMES[selectedIndex].url} className="w-full h-full object-cover" />
                </motion.div>
              </AnimatePresence>

              {/* Gradient Overlays */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a] w-1/4 left-0"></div>
              <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-l from-[#0a0a0a] via-transparent to-[#0a0a0a] w-1/4 right-0"></div>

              {/* Carousel Track */}
              <div className="relative w-full flex items-center justify-center overflow-visible px-4">
                <div className="relative flex items-center justify-center gap-12 h-[450px]">
                  {MOCK_FRAMES.map((frame, idx) => {
                    const distance = Math.abs(idx - selectedIndex);
                    const isActive = idx === selectedIndex;
                    
                    return (
                      <motion.div
                        key={idx}
                        layout
                        initial={false}
                        animate={{
                          scale: isActive ? 1.15 : 0.85 - (distance * 0.05),
                          opacity: isActive ? 1 : 0.3 - (distance * 0.1),
                          x: (idx - selectedIndex) * (isActive ? 0 : 50),
                          zIndex: 10 - distance,
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`
                          relative shrink-0 cursor-pointer group
                          ${isActive ? 'w-[640px] aspect-video' : 'w-[400px] aspect-video'}
                        `}
                        onClick={() => setSelectedIndex(idx)}
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {/* Film Frame Borders */}
                        <div className={`
                          absolute -inset-1 rounded-[24px] transition-all duration-500
                          ${isActive ? 'bg-gradient-to-b from-purple-500 to-indigo-600 opacity-100 shadow-[0_0_60px_rgba(168,85,247,0.3)]' : 'bg-white/10 opacity-50'}
                        `} />
                        
                        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-black">
                          <ImageWithFallback 
                            src={frame.url} 
                            className={`w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-105 group-hover:scale-110' : ''}`} 
                          />
                          
                          {/* Top Badge: Score */}
                          <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-xl backdrop-blur-md flex items-center gap-2 border transition-all duration-500 ${isActive ? 'bg-purple-500/80 border-white/20' : 'bg-black/60 border-white/10'}`}>
                            <span className="text-xs font-black italic">Score</span>
                            <span className="text-lg font-bold leading-none">{frame.score}</span>
                          </div>

                          {/* Top Badge: Label */}
                          <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/10 bg-black/40 text-xs font-bold transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                            {frame.label}
                          </div>

                          {/* Selection Indicator */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-6 left-1/2 -translate-x-1/2"
                              >
                                <div className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl">
                                  <Check className="w-4 h-4" /> 已选定作为封面
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          {/* Hover Overlay */}
                          <div className={`absolute inset-0 bg-purple-500/10 transition-opacity duration-300 ${hoveredIndex === idx && !isActive ? 'opacity-100' : 'opacity-0'}`} />
                        </div>

                        {/* Timeline Marker */}
                        <div className={`absolute -bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                          <div className={`w-1 h-6 rounded-full mb-2 ${isActive ? 'bg-purple-500' : 'bg-white/20'}`} />
                          <span className="text-xs font-mono text-gray-500">{frame.time}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-10 flex items-center z-20">
                <button 
                  onClick={prevFrame}
                  disabled={selectedIndex === 0}
                  className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 active:scale-95 transition-all disabled:opacity-20 disabled:scale-100"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </div>
              <div className="absolute inset-y-0 right-10 flex items-center z-20">
                <button 
                  onClick={nextFrame}
                  disabled={selectedIndex === MOCK_FRAMES.length - 1}
                  className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 hover:scale-110 active:scale-95 transition-all disabled:opacity-20 disabled:scale-100"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              {/* Bottom Pagination Dots */}
              <div className="absolute bottom-12 flex gap-3 z-20">
                {MOCK_FRAMES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${i === selectedIndex ? 'w-12 bg-purple-500' : 'w-2 bg-white/20 hover:bg-white/40'}`}
                  />
                ))}
              </div>
            </div>

            {/* Analysis Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: AI Logic */}
              <div className="lg:col-span-2 space-y-8">
                <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-purple-500/10 transition-colors">
                    <Brain className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <Info className="w-6 h-6 text-purple-400" /> AI 分析洞察
                  </h3>
                  <div className="space-y-8">
                    <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                      通过对视频流进行全局时域分析，我们发现 <span className="text-white font-bold">Frame 03</span> 具备最强的视觉冲击力。其构图符合三分法原则，且主体对比度较平均值高出 <span className="text-purple-400 font-bold">24%</span>。建议用于主流短视频平台的封面投放。
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                        { label: "主体完整度", value: "98%", status: "excellent" },
                        { label: "清晰度评分", value: "0.94", status: "good" },
                        { label: "色彩平衡度", value: "均衡", status: "normal" }
                      ].map((stat, i) => (
                        <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5">
                           <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">{stat.label}</div>
                           <div className="text-2xl font-black">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-10 rounded-[48px] bg-white/[0.02] border border-white/5">
                   <h3 className="text-2xl font-bold mb-8">画面比例预览</h3>
                   <div className="flex flex-wrap gap-4">
                      {['16:9 宽屏', '9:16 竖屏', '1:1 正方形', '4:3 经典'].map((ratio, i) => (
                        <button key={i} className={`flex-1 min-w-[140px] p-6 rounded-[24px] border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all text-center ${i === 0 ? 'bg-purple-500/10 border-purple-500/30' : ''}`}>
                           <div className={`mx-auto mb-4 border-2 rounded-sm ${i === 0 ? 'w-16 h-9 border-purple-500' : i === 1 ? 'w-9 h-16 border-gray-600' : i === 2 ? 'w-12 h-12 border-gray-600' : 'w-14 h-11 border-gray-600'}`} />
                           <div className="font-bold text-sm">{ratio}</div>
                        </button>
                      ))}
                   </div>
                </div>
              </div>

              {/* Right Column: Metadata */}
              <div className="space-y-8">
                <div className="p-8 rounded-[48px] bg-gradient-to-br from-purple-500/10 via-transparent to-transparent border border-purple-500/20">
                   <h4 className="text-xl font-bold mb-6">视频元数据</h4>
                   <div className="space-y-6">
                      {[
                        { label: "文件名称", value: "Cinematic_Shot_4K.mp4" },
                        { label: "分辨率", value: "3840 x 2160 (4K)" },
                        { label: "帧率", value: "60.00 fps" },
                        { label: "时长", value: "01:24" },
                        { label: "色彩空间", value: "Rec.709" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between items-center border-b border-white/5 pb-4 last:border-0">
                          <span className="text-gray-500 text-sm">{item.label}</span>
                          <span className="text-white font-mono text-sm">{item.value}</span>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="p-8 rounded-[48px] bg-white/[0.02] border border-white/5">
                   <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 rounded-lg bg-green-500/20">
                         <ShieldCheck className="w-5 h-5 text-green-500" />
                      </div>
                      <h4 className="font-bold">内容安全检测</h4>
                   </div>
                   <p className="text-sm text-gray-500 leading-relaxed mb-6">
                      通过 Nano Security 引擎检测，未发现敏感或违规画面，封面可直接用于公域流量分发。
                   </p>
                   <Button variant="outline" color="white" className="w-full">
                      查看完整报告
                   </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
