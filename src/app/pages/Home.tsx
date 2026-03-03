import React from "react";
import { motion } from "motion/react";
import { Hero } from "../components/Hero";
import { Container, SectionTitle } from "../components/ui/Layout";
import { ProductCard, Button } from "../components/ui/Common";
import { PRODUCTS, FEATURES } from "../constants/data";

export function Home() {
  return (
    <div className="pb-24">
      {/* Hero Section */}
      <Hero />

      {/* Product Highlights Section */}
      <section className="py-24 border-b border-white/5">
        <Container>
          <SectionTitle 
            subtitle="Core Products" 
            title="核心业务领域" 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, idx) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={idx} 
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <Container>
          <SectionTitle 
            title="全方位的音视频能力支撑" 
            description="从研发到运维，从资源到业务，我们提供一站式的音视频集成方案。"
            centered 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team CTA Section */}
      <section className="py-24">
        <Container>
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-24 text-center">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-black -z-10"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 -z-10"></div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8">
                准备好开始您的音视频项目了吗？
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                加入我们，与顶尖的音视频专家团队合作，打造世界级的产品体验。
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button color="white" href="https://afts.alipay.com/afts/configuration/create">
                  立即咨询
                </Button>
                <Button variant="outline" color="white" href="https://afts.alipay.com/afts/home">
                  我们的团队
                </Button>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
