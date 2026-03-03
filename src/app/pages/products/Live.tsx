import React from "react";
import { Radio } from "lucide-react";
import { ProductPageLayout } from "../../components/ui/ProductPageLayout";
import { PRODUCT_SPECIFIC_FEATURES } from "../../constants/data";

export function Live() {
  return (
    <ProductPageLayout
      subtitle="直播解决方案"
      title="定义极致的"
      highlight="实时互动"
      description="基于自研全球加速网络，为用户提供毫秒级延迟、千万级并发的极致直播体验，重塑数字空间连接方式。"
      icon={<Radio className="w-8 h-8 text-orange-500" />}
      color="orange"
      imageUrl="https://images.unsplash.com/photo-1748684742728-66d4ca9d5b45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZXZlbCUyMGxpdmUlMjBzdHJlYW1pbmclMjBjb25jZXJ0JTIwY3Jvd2R8ZW58MXx8fHwxNzcyNDMwMjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      features={PRODUCT_SPECIFIC_FEATURES.live}
    />
  );
}

export default Live;
