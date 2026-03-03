import React, { ReactNode } from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Container } from "./Layout";
import { Button } from "./Common";

interface ProductPageLayoutProps {
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  icon: ReactNode;
  color: "pink" | "orange" | "cyan" | "purple";
  imageUrl: string;
  features: Array<{
    icon: ReactNode;
    title: string;
    desc: string;
  }>;
  statsTitle?: string;
  statsDesc?: string;
  children?: ReactNode;
}

export function ProductPageLayout({
  title,
  subtitle,
  highlight,
  description,
  icon,
  color,
  imageUrl,
  features,
  statsTitle = "企业级保障",
  statsDesc = "已为超过 10,000+ 开发者提供稳定的音视频服务支持。",
  children
}: ProductPageLayoutProps) {
  const colorMap = {
    pink: "text-pink-500 bg-pink-500/10 shadow-pink-500/20",
    orange: "text-orange-500 bg-orange-500/10 shadow-orange-500/20",
    cyan: "text-cyan-500 bg-cyan-500/10 shadow-cyan-500/20",
    purple: "text-purple-500 bg-purple-500/10 shadow-purple-500/20",
  };

  return (
    <div className="min-h-screen pt-20 pb-24">
      <Container className="py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-3 rounded-2xl ${colorMap[color].split(' ')[1]}`}>
                {icon}
              </div>
              <span className="text-xl font-bold tracking-tight">{subtitle}</span>
            </div>
            <h1 className="text-5xl font-black mb-8 leading-tight">
              {title}<br />
              <span className={`${colorMap[color].split(' ')[0]} text-6xl`}>{highlight}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 mt-12 mb-12">
              <Button color={color} href="https://afts.alipay.com/afts/configuration/create">
                快速接入
              </Button>
              <Button variant="outline" color="white">
                技术文档
              </Button>
            </div>
            
            <div className="space-y-6">
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
            <div className={`rounded-3xl overflow-hidden border border-white/10 shadow-2xl ${colorMap[color].split(' ')[2]}`}>
              <ImageWithFallback 
                src={imageUrl}
                className="w-full h-auto aspect-video object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-6 bg-gray-900 border border-white/10 rounded-2xl shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span className="font-bold">{statsTitle}</span>
              </div>
              <p className="text-xs text-gray-500">{statsDesc}</p>
            </div>
          </div>
        </motion.div>

        {children}
      </Container>
    </div>
  );
}
