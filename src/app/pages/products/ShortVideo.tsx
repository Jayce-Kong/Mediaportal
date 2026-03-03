import React from "react";
import { Film } from "lucide-react";
import { ProductPageLayout } from "../../components/ui/ProductPageLayout";
import { PRODUCT_SPECIFIC_FEATURES } from "../../constants/data";

export function ShortVideo() {
  return (
    <ProductPageLayout
      subtitle="短视频解决方案"
      title="赋能每一份"
      highlight="创意表达"
      description="为内容创作者与企业提供从拍摄、编辑、上传到分发的一站式短视频技术支撑，助力业务快速爆发。"
      icon={<Film className="w-8 h-8 text-pink-500" />}
      color="pink"
      imageUrl="https://images.unsplash.com/photo-1764664281859-36f1b637b6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB2aWRlbyUyMGVkaXRpbmclMjBzaG9ydCUyMHZpZGVvJTIwY29udGVudCUyMGNyZWF0b3J8ZW58MXx8fHwxNzcyNDMwMjQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      features={PRODUCT_SPECIFIC_FEATURES.shortVideo}
    />
  );
}

export default ShortVideo;
