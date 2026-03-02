import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-black text-white/10 absolute -z-10">404</h1>
      <h2 className="text-4xl font-bold mb-4">页面未找到</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        抱歉，您访问的页面不存在或已被移除。
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-cyan-500 text-white font-bold rounded-lg hover:bg-cyan-600 transition-all"
      >
        返回首页
      </Link>
    </div>
  );
}
