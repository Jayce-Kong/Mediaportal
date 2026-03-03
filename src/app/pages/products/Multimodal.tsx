import React from "react";
import { Cpu } from "lucide-react";
import { ProductPageLayout } from "../../components/ui/ProductPageLayout";
import { PRODUCT_SPECIFIC_FEATURES } from "../../constants/data";

export function Multimodal() {
  return (
    <ProductPageLayout
      subtitle="多模态解决方案"
      title="构建智能的"
      highlight="视听理解"
      description="融合视觉、听觉与文本的多维语义理解能力，让 AI 真正读懂每一个像素与波段，释放内容深层价值。"
      icon={<Cpu className="w-8 h-8 text-cyan-500" />}
      color="cyan"
      imageUrl="https://images.unsplash.com/photo-1750212981504-205160be1c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzI0MzAyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      features={PRODUCT_SPECIFIC_FEATURES.multimodal}
    />
  );
}

export default Multimodal;
