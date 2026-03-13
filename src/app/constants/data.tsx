import { 
  Film, 
  Radio, 
  Cpu, 
  BarChart3, 
  Activity, 
  Zap, 
  Cloud,
  Layout as LayoutIcon,
  ShieldCheck,
  PlayCircle,
  Globe,
  Lock,
  MessageSquare,
  Search,
  Eye,
  Settings,
  Image
} from "lucide-react";
import { NavItem, Product, Feature, Advantage } from "../types";
import React from "react";

export const NAV_ITEMS: NavItem[] = [
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
  { 
    name: "常用工具", 
    id: "tools", 
    hasDropdown: true,
    subItems: [
      { name: "媒体转码", path: "/tools/transcoding", icon: <Zap className="w-5 h-5 text-yellow-500" />, desc: "高效媒体格式转换与压缩" },
      { name: "智能封面", path: "/tools/smart-cover", icon: <Image className="w-5 h-5 text-purple-500" />, desc: "AI 自动提取视频最佳封面" },
    ]
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "short-video",
    title: "短视频",
    icon: <Film className="w-8 h-8 text-pink-500" />,
    description: "端到端短视频集成方案，涵盖极速采集、云端编辑、全球分发与智能审核。",
    features: ["极速上传", "云剪辑", "智能审核"],
    color: "pink",
    path: "/products/short-video"
  },
  {
    id: "live",
    title: "直播",
    icon: <Radio className="w-8 h-8 text-orange-500" />,
    description: "高并发、低延迟的全球直播服务，支持千万级用户同时在线互动与多协议分发。",
    features: ["秒开播", "全网分发", "低延迟"],
    color: "orange",
    path: "/products/live"
  },
  {
    id: "multimodal",
    title: "多模态",
    icon: <Cpu className="w-8 h-8 text-cyan-500" />,
    description: "基于 AI 的跨模态处理能力，支持视频内容分析、音视频同步理解与自动化标注。",
    features: ["视觉识别", "语音转译", "情感分析"],
    color: "cyan",
    path: "/products/multimodal"
  }
];

export const FEATURES: Feature[] = [
  {
    icon: <BarChart3 className="w-6 h-6 text-cyan-400" />,
    title: "多维度监控",
    description: "全方位实时监控音视频服务质量，秒级响应异常告警。",
  },
  {
    icon: <Activity className="w-6 h-6 text-purple-400" />,
    title: "资源控制",
    description: "精细化管理计算与存储资源，实现降本增效的目标。",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    title: "极速集成",
    description: "提供标准化 SDK 与 API，助力业务团队快速接入音视频能力。",
  },
  {
    icon: <Cloud className="w-6 h-6 text-blue-400" />,
    title: "云原生架构",
    description: "基于容器化部署，支持弹性扩容，保障业务高可用。",
  },
];

export const PRODUCT_SPECIFIC_FEATURES = {
  shortVideo: [
    { icon: <Zap className="w-6 h-6 text-pink-500" />, title: "毫秒级上传", desc: "自研上传协议，支持断点续传与多链路加速。" },
    { icon: <LayoutIcon className="w-6 h-6 text-cyan-500" />, title: "智能云剪辑", desc: "提供丰富的滤镜、转场及自动字幕功能。" },
    { icon: <ShieldCheck className="w-6 h-6 text-green-500" />, title: "全自动审核", desc: "基于深度学习的内容审核，识别率达 99.9%。" },
  ],
  live: [
    { icon: <PlayCircle className="w-8 h-8 text-orange-500" />, title: "全链路低延迟", desc: "自研实时传输协议，端到端延迟低至 500ms。" },
    { icon: <Globe className="w-8 h-8 text-cyan-500" />, title: "全球加速网络", desc: "覆盖全球 2800+ 节点，保障千万级并发下的稳定播放。" },
    { icon: <MessageSquare className="w-8 h-8 text-purple-500" />, title: "高实时互动", desc: "支持弹幕、连麦、打赏等丰富的社交互动能力。" },
  ],
  multimodal: [
    { icon: <Search className="w-8 h-8 text-cyan-500" />, title: "智能搜索", desc: "基于多模态向量化索引，实现视频内容的语义级精准搜索。" },
    { icon: <Eye className="w-8 h-8 text-purple-500" />, title: "自动标注", desc: "自动识别视频中的人物、物体、场景及情感标签。" },
    { icon: <Settings className="w-8 h-8 text-yellow-500" />, title: "内容分级", desc: "多维度的内容合规与分级建议，助力合规运营。" },
  ]
};
