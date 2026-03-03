import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Product } from "../../types";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  color?: "cyan" | "pink" | "orange" | "purple" | "white" | "blue";
  className?: string;
  icon?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  href, 
  variant = "primary", 
  color = "white",
  className = "", 
  icon = false 
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: {
      cyan: "bg-cyan-500 text-black hover:bg-cyan-400 shadow-xl shadow-cyan-500/20",
      pink: "bg-pink-500 text-white hover:bg-pink-600 shadow-xl shadow-pink-500/20",
      orange: "bg-orange-500 text-white hover:bg-orange-600 shadow-xl shadow-orange-500/30",
      purple: "bg-purple-500 text-white hover:bg-purple-600 shadow-xl shadow-purple-500/20",
      white: "bg-white text-black hover:bg-gray-200 shadow-xl shadow-white/10",
      blue: "bg-[#A5C3F5] text-black hover:bg-[#8FB3EF] shadow-xl shadow-blue-500/10"
    },
    outline: {
      cyan: "border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10",
      pink: "border border-pink-500/30 text-pink-400 hover:bg-pink-500/10",
      orange: "border border-orange-500/30 text-orange-400 hover:bg-orange-500/10",
      purple: "border border-purple-500/30 text-purple-400 hover:bg-purple-500/10",
      white: "border border-white/20 text-white hover:bg-white/10",
      blue: "border border-[#A5C3F5]/30 text-[#A5C3F5] hover:bg-[#A5C3F5]/10"
    },
    secondary: {
      cyan: "bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20",
      pink: "bg-pink-500/10 text-pink-400 hover:bg-pink-500/20",
      orange: "bg-orange-500/10 text-orange-400 hover:bg-orange-500/20",
      purple: "bg-purple-500/10 text-purple-400 hover:bg-purple-500/20",
      white: "bg-white/10 text-white hover:bg-white/20",
      blue: "bg-[#A5C3F5]/10 text-[#A5C3F5] hover:bg-[#A5C3F5]/20"
    },
    ghost: {
      cyan: "text-cyan-400 hover:text-cyan-300",
      pink: "text-pink-400 hover:text-pink-300",
      orange: "text-orange-400 hover:text-orange-300",
      purple: "text-purple-400 hover:text-purple-300",
      white: "text-white hover:text-gray-300",
      blue: "text-[#A5C3F5] hover:text-[#8FB3EF]"
    }
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="w-5 h-5" />}
    </>
  );

  const styleClass = `${baseStyles} ${variants[variant][color as keyof typeof variants['primary']]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={styleClass}>
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={styleClass}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styleClass}>
      {content}
    </button>
  );
}

export function ProductCard({ product, index }: { product: Product, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/20 transition-all cursor-pointer h-full flex flex-col"
    >
      <div className="mb-8 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
        {product.icon}
      </div>
      <h4 className="text-2xl font-bold mb-4">{product.title}</h4>
      <p className="text-gray-400 mb-8 min-h-[80px]">
        {product.description}
      </p>
      <div className="space-y-3 mb-8 flex-grow">
        {product.features.map(f => (
          <div key={f} className="flex items-center gap-2 text-sm text-gray-500">
            <div className={`w-1.5 h-1.5 rounded-full ${product.color === 'pink' ? 'bg-pink-500' : product.color === 'orange' ? 'bg-orange-500' : 'bg-cyan-500'}`}></div>
            {f}
          </div>
        ))}
      </div>
      <Button 
        variant="ghost" 
        color={product.color as any} 
        href="https://afts.alipay.com/afts/configuration/create"
        icon 
        className="!px-0 !justify-start hover:gap-4 transition-all"
      >
        快速接入
      </Button>
    </motion.div>
  );
}
