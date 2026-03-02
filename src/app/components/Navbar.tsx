import { Play, Search, Globe, ChevronDown, Film, Radio, Cpu } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { 
      name: "产品介绍", 
      id: "products",
      hasDropdown: true,
      subItems: [
        { name: "短视频", path: "/products/short-video", icon: <Film className="w-5 h-5 text-pink-500" />, desc: "极速采集与智能云剪辑" },
        { name: "直播", path: "/products/live", icon: <Radio className="w-5 h-5 text-orange-500" />, desc: "全球低延迟互动直播" },
        { name: "多模态", path: "/products/multimodal", icon: <Cpu className="w-5 h-5 text-cyan-500" />, desc: "AI 驱动的跨模态内容理解" },
      ]
    },
    { name: "监控", id: "monitor", hasDropdown: true },
    { name: "研发日历", id: "calendar", hasDropdown: false },
    { name: "控制台", id: "console", hasDropdown: true },
    { name: "常用工具", id: "tools", hasDropdown: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center transition-transform group-hover:rotate-12">
              <Play className="w-4 h-4 text-black fill-black" />
            </div>
            <span className="text-xl tracking-wider uppercase font-bold text-white">
              Media Portal
            </span>
          </Link>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8 h-16">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative h-full flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredItem === item.id ? 'rotate-180 text-cyan-500' : ''}`} />
                )}
                
                {/* Active Indicator */}
                {hoveredItem === item.id && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500"
                  />
                )}

                {/* Enhanced Dropdown Menu */}
                <AnimatePresence>
                  {hoveredItem === item.id && item.subItems && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 w-72 bg-[#121212] border border-white/10 rounded-xl py-3 mt-1 shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="px-4 py-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 mb-2">
                        解决方案集成
                      </div>
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.name} 
                          to={sub.path}
                          className="flex items-start gap-4 px-4 py-3 hover:bg-white/5 group/sub transition-all"
                        >
                          <div className="p-2 rounded-lg bg-white/5 group-hover/sub:bg-white/10 transition-colors">
                            {sub.icon}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white group-hover/sub:text-cyan-400 transition-colors">
                              {sub.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5 group-hover/sub:text-gray-400">
                              {sub.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                      <div className="mt-2 pt-2 border-t border-white/5 px-4">
                        <div className="text-[10px] text-cyan-500/60 hover:text-cyan-400 cursor-pointer flex items-center gap-1 transition-colors">
                          查看所有产品 <span className="text-xs">→</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-gray-400">
            <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
            <Globe className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          </div>
          <button className="px-4 py-1.5 rounded bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
            登录
          </button>
        </div>
      </div>
    </nav>
  );
}
