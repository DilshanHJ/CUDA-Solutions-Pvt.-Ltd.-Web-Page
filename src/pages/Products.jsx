import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cloud,
  Layers3,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import productsData from "../data/products.json";

const productIcons = {
  "hospitality-management": Building2,
  "workforce-management": UsersRound,
};

function Products() {
  const { title, description, products } = productsData;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <section className="relative overflow-hidden bg-gradient-hero py-28 lg:py-36">
        <div className="absolute inset-0 bg-hero-pattern opacity-40" />
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-5xl mx-auto text-white"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-100 text-sm font-medium mb-7 border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Purpose-built SaaS products
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-7 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-neutral-200 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="badge badge-brand mb-5">Featured Platforms</div>
            <h2 className="text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-5">
              Focused products. Connected operations.
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Each platform is designed around a specific operating environment, with modular workflows, practical integrations and room to scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 xl:gap-10">
            {products.map((product, index) => {
              const Icon = productIcons[product.id] || Layers3;
              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className={`product-launch-card ${product.id === "workforce-management" ? "is-workforce" : "is-hospitality"}`}
                >
                  <div className="product-launch-orb" />
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div className="product-launch-icon">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="product-launch-index">0{index + 1}</span>
                    </div>

                    <p className="product-launch-eyebrow">{product.eyebrow}</p>
                    <h3 className="text-3xl lg:text-4xl font-bold font-display text-white mb-2">
                      {product.title}
                    </h3>
                    <p className="text-accent-100 font-medium mb-5">{product.subtitle}</p>
                    <p className="text-neutral-200 leading-relaxed mb-8">
                      {product.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-neutral-100">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-accent-300 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      <div className="product-launch-stat">
                        <Cloud className="w-4 h-4" />
                        <span>{product.signal}</span>
                      </div>
                      <div className="product-launch-stat">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{product.metric}</span>
                      </div>
                    </div>

                    <Link to={product.link} className="product-launch-link">
                      {product.cta}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 rounded-3xl bg-gradient-elegant p-8 lg:p-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-hero-pattern opacity-20" />
            <div className="relative z-10 max-w-2xl">
              <p className="text-accent-200 text-sm uppercase tracking-[0.22em] font-semibold mb-3">Built around your operation</p>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need a closer fit to your workflow?</h2>
              <p className="text-neutral-200 mb-0">Both platforms can be shaped around property, workforce and reporting requirements without turning daily work into a maze of disconnected tools.</p>
            </div>
            <Link to="/contact" className="btn btn-primary px-7 py-4 relative z-10 shrink-0">
              Talk to Our Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
