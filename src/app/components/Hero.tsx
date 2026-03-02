import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const unsplashImageUrl = "https://images.unsplash.com/photo-1750233894598-6b7db500a3e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMG1lZGlhJTIwcGVyc29uJTIwcGhvbmUlMjBwbGF5YmFjayUyMHNjcmVlbiUyMHN0cmVhbWluZ3xlbnwxfHx8fDE3NzI0MjMwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

  return (
    <section className="relative min-h-[90vh] pt-16 flex items-center overflow-hidden bg-black">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <div className="space-y-4">
            <h2 className="text-xl tracking-widest font-semibold text-white/70 uppercase">
              MEDIA PORTAL
            </h2>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
              音视频门户
            </h1>
            <p className="max-w-lg text-lg text-gray-400 leading-relaxed py-4 border-l-2 border-cyan-500 pl-6">
              MEDIA PORTAL 是由音视频团队构建的音视频研发运维平台，旨在为音视频的业务服务、资源控制等提供统一的集成门户，让研发更加简单、高效。
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="px-10 py-3 rounded bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30 cursor-pointer">
                快速接入
              </button>
              <a 
                href="https://afts.alipay.com/afts/home"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-3 rounded border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
              >
                我们的团队
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 border border-white/5 group">
            <ImageWithFallback
              src={unsplashImageUrl} 
              alt="Hero Media Visual" 
              className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Play Button Overlay Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-500/10 blur-3xl rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
