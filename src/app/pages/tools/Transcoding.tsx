import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Upload, 
  Play, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Video, 
  Monitor, 
  FileVideo,
  ChevronRight,
  Plus,
  Zap,
  Volume2,
  Maximize2
} from "lucide-react";
import { Container } from "../../components/ui/Layout";
import { Button } from "../../components/ui/Common";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import exampleImage from "figma:asset/06193bb58c3e9841b5d6a0bd88d508f6aebcdccf.png";

export function Transcoding() {
  const [selectedFormat, setSelectedFormat] = useState("MP4");
  const [selectedCodec, setSelectedCodec] = useState("H.264");
  const [selectedResolution, setSelectedResolution] = useState("与源一致");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const formats = ["MP4", "FLV", "HLS"];
  const codecs = ["H.264", "H.265", "H.266", "AV1"];
  const resolutions = ["与源一致", "8K", "4K", "2K", "1080P", "720P"];

  const handleStartProcess = () => {
    setIsProcessing(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsProcessing(false);
          setProgress(0);
        }, 500);
      }
    }, 100);
  };

  const previewImage = "https://images.unsplash.com/photo-1596391691172-3359c29c6451?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjBjb2FzdGxpbmUlMjBsYW5kc2NhcGUlMjBjbGlmZiUyMHNlYXxlbnwxfHx8fDE3NzI1MDc4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <div className="min-h-screen pt-24 pb-12 bg-black">
      <Container>
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <Video className="w-8 h-8 text-cyan-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              媒体转码 <span className="text-sm font-normal text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest">Tool</span>
            </h1>
            <p className="text-gray-400">高效媒体格式转换与动态码率优化方案</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Preview Area */}
          <div className="lg:col-span-8 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-[#111] border border-white/10 aspect-video shadow-2xl">
              {/* Comparison UI */}
              <div className="absolute inset-0 flex divide-x divide-white/20">
                {/* Before */}
                <div className="relative flex-1 group overflow-hidden">
                   <ImageWithFallback 
                     src={previewImage}
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                   <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                      <span className="text-xs font-bold px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">原画面</span>
                      <span className="text-xs font-medium text-gray-300">码率 10.89Mbps</span>
                   </div>
                </div>

                {/* After */}
                <div className="relative flex-1 group overflow-hidden">
                   <ImageWithFallback 
                     src={previewImage}
                     className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/0 transition-colors"></div>
                   <div className="absolute top-4 left-4 flex items-center gap-3 z-10">
                      <span className="text-xs font-bold px-2 py-1 rounded bg-cyan-500/80 backdrop-blur-md border border-white/10">处理后</span>
                      <span className="text-xs font-medium text-gray-300">码率 <span className="text-cyan-400">0.83Mbps</span></span>
                      <span className="text-xs font-bold text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <Zap className="w-3 h-3" /> 92.38%
                      </span>
                   </div>
                </div>
              </div>

              {/* Player Controls */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                       <button className="text-white hover:text-cyan-400 transition-colors"><Play className="w-6 h-6 fill-current" /></button>
                       <div className="w-48 h-1 bg-white/20 rounded-full relative overflow-hidden group cursor-pointer">
                          <div className="absolute inset-0 bg-cyan-500 w-1/3"></div>
                       </div>
                       <span className="text-xs font-medium text-gray-400">00:12 / 03:45</span>
                    </div>
                    <div className="flex items-center gap-4">
                       <Volume2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                       <Settings className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                       <Maximize2 className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                    </div>
                 </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: "处理时长", value: "1.2s", sub: "对比同类产品快 40%" },
                { label: "压缩效率", value: "15:1", sub: "极致节省带宽存储" },
                { label: "VMAF 评分", value: "96.4", sub: "肉眼不可见损失" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                   <div className="text-gray-400 text-sm mb-2">{item.label}</div>
                   <div className="text-2xl font-black text-white">{item.value}</div>
                   <div className="text-xs text-cyan-500/60 mt-1">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Control Panel */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl bg-[#111] border border-white/10 p-8 sticky top-24"
            >
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center">
                   <Monitor className="w-5 h-5 text-cyan-500" />
                </div>
                <h2 className="text-xl font-bold">点播转码</h2>
              </div>

              <div className="space-y-8">
                {/* File Upload Placeholder */}
                <div>
                  <label className="text-sm text-gray-500 block mb-4">请选择需要转码的文件</label>
                  <div className="group relative border-2 border-dashed border-white/10 hover:border-cyan-500/50 rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer bg-white/[0.02]">
                    <Plus className="w-10 h-10 text-gray-500 group-hover:text-cyan-500 transition-colors mb-2" />
                    <span className="text-sm text-gray-500 group-hover:text-gray-300">点击或拖拽上传视频</span>
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                </div>

                {/* Format Options */}
                <div>
                   <label className="text-sm text-gray-500 block mb-4">封装格式</label>
                   <div className="flex flex-wrap gap-2">
                      {formats.map(f => (
                        <button
                          key={f}
                          onClick={() => setSelectedFormat(f)}
                          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                            selectedFormat === f 
                            ? 'bg-cyan-500 text-black border-cyan-500' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {f}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Codec Options */}
                <div>
                   <label className="text-sm text-gray-500 block mb-4">编码方式</label>
                   <div className="flex flex-wrap gap-2">
                      {codecs.map(c => (
                        <button
                          key={c}
                          onClick={() => setSelectedCodec(c)}
                          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                            selectedCodec === c 
                            ? 'bg-cyan-500 text-black border-cyan-500' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {c}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Resolution Options */}
                <div>
                   <label className="text-sm text-gray-500 block mb-4">分辨率</label>
                   <div className="flex flex-wrap gap-2">
                      {resolutions.map(r => (
                        <button
                          key={r}
                          onClick={() => setSelectedResolution(r)}
                          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all border ${
                            selectedResolution === r 
                            ? 'bg-cyan-500 text-black border-cyan-500' 
                            : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/20'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                   </div>
                </div>

                {/* Action Button */}
                <div className="pt-4">
                  <Button 
                    className="w-full h-14" 
                    color="blue"
                    onClick={handleStartProcess}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-3">
                         <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                         处理中 {progress}%
                      </div>
                    ) : "开始处理"}
                  </Button>
                </div>

                <p className="text-[10px] text-gray-600 text-center leading-relaxed px-4">
                  点击“开始处理”即代表您同意我们的《媒体处理服务协议》及《版权声明》。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Transcoding;
