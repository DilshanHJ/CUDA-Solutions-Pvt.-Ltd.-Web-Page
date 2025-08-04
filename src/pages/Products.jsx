import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import productsData from "../data/products.json";

function Products() {
  const { title, description, products } = productsData;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-hero-pattern opacity-40"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20"
            >
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Our Products
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight">
              <span className="gradient-text">{title}</span>
            </h1>
            
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                to="/services"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="badge badge-brand mb-6">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Featured Products
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              Featured Solutions
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our flagship products designed to transform hospitality and
              booking experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {products
              .filter((product) => product.highlighted)
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 card-hover border border-neutral-100 h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
                  
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                  </div>
                  
                  <div className="p-8 relative z-10">
                    <div className="badge badge-primary mb-4">
                      Featured Product
                    </div>
                    <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-lg text-neutral-600 mb-4">
                      {product.subtitle}
                    </p>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: idx * 0.1 }}
                          className="flex items-center"
                        >
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mr-2"></div>
                          <span className="text-sm text-neutral-700">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <Link
                      to={product.link}
                      className="btn btn-primary px-6 py-3 w-full group-hover:scale-105 transform transition-all duration-300"
                    >
                      {product.cta}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-32 bg-gradient-elegant text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-6 border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              All Products
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-white mb-6">
              All SaaS Platforms
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions for various business needs and industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((product) => !product.highlighted)
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass p-8 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-500 card-hover h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
                    
                    <div className="relative overflow-hidden h-48 mb-6 rounded-xl">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                    </div>
                    
                    <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-accent-100 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-md text-neutral-300 mb-3 group-hover:text-neutral-200 transition-colors duration-300">
                      {product.subtitle}
                    </p>
                    <p className="text-neutral-400 mb-6 leading-relaxed text-sm group-hover:text-neutral-300 transition-colors duration-300">
                      {product.description}
                    </p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center text-accent-400 font-semibold hover:text-accent-300 transition-all duration-300 group-hover:translate-x-2 transform link-elegant"
                    >
                      {product.cta}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;