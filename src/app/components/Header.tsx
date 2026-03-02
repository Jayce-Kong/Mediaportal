import React, { useState } from 'react';
import { Play, Search, Globe, ChevronDown, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

// Simple utility if not present
function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const NavItem = ({ title, hasDropdown = false }: { title: string; hasDropdown?: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-pointer px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span>{title}</span>
      {hasDropdown && (
        <ChevronDown 
          size={14} 
          className={classNames(
            "transition-transform duration-200",
            isHovered ? "rotate-180" : ""
          )} 
        />
      )}
      
      {/* Dropdown placeholder */}
      <AnimatePresence>
        {hasDropdown && isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-zinc-800 rounded-md shadow-xl py-2 z-50"
          >
            <div className="px-4 py-2 hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors">
              子菜单项 1
            </div>
            <div className="px-4 py-2 hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors">
              子菜单项 2
            </div>
            <div className="px-4 py-2 hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors">
              子菜单项 3
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 h-16 flex items-center px-6 lg:px-12 justify-between">
      {/* Left: Logo & Nav */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-white text-black p-1 rounded-full group-hover:scale-110 transition-transform">
            <Play size={12} fill="currentColor" />
          </div>
          <span className="text-white font-bold text-lg tracking-wider">MEDIA PORTAL</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem title="产品介绍" hasDropdown />
          <NavItem title="监控通" hasDropdown />
          <NavItem title="研发日常" />
          <NavItem title="控制台" hasDropdown />
          <NavItem title="常用工具" hasDropdown />
        </nav>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-5 text-gray-400">
        <button className="hover:text-white transition-colors">
          <Search size={18} />
        </button>
        <button className="hover:text-white transition-colors">
          <Globe size={18} />
        </button>
        <button className="bg-zinc-800 hover:bg-zinc-700 text-white text-xs px-4 py-1.5 rounded flex items-center gap-2 transition-colors border border-zinc-700">
          <User size={12} />
          <span>登录</span>
        </button>
      </div>
    </header>
  );
}
