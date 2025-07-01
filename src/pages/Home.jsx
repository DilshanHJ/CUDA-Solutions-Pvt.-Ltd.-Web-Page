import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion"; // eslint-disable-line no-unused-vars
import homeData from "../data/home.json";

function Home() {
  const { hero, expertise, technologies, about, testimonial, cta } = homeData;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  // Enhanced icon components
  const getIcon = (iconName) => {
    const iconProps = "w-8 h-8 text-white";

    switch (iconName) {
      case "desktop":
        return (
          <svg
            className={iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        );
      case "saas":
        return (
          <svg
            className={iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
            />
          </svg>
        );
      case "marketing":
        return (
          <svg
            className={iconProps}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-10.11a23.91 23.91 0 00-1.014-5.395m0 0a23.784 23.784 0 00-7.806 2.91m0 0A23.745 23.745 0 003 4.17M.38 15.855a23.91 23.91 0 001.014-5.395m0 0a23.784 23.784 0 017.806-2.91m0 0A23.745 23.745 0 0021 4.17M.38 8.825a23.91 23.91 0 00-1.014 5.395"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-elegant">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-8 border border-white/20"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                {hero.subtitle}
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight">
                <span className="gradient-text">Enterprise Software</span>
                <br />
                <span className="text-white">Development &</span>
                <br />
                <span className="text-blue-400">Digital Marketing</span>
                <br />
                <span className="text-white">Excellence</span>
              </h1>

              <p className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-2xl">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link
                  to="/contact"
                  className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
                >
                  {hero.primaryCta}
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
                  {hero.secondaryCta}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {hero.stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center group"
                  >
                    <div className="text-3xl font-bold text-accent-400 mb-2 font-display group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div style={{ y: y1 }} className="relative lg:block hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative">
                  <img
                    src={hero.image}
                    alt="Enterprise Technology Solutions"
                    className="w-full rounded-2xl shadow-luxury transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent rounded-2xl"></div>

                  {/* Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-brand rounded-2xl flex items-center justify-center shadow-dramatic animate-float">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl backdrop-blur-xl border border-white/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">
                        All Systems Operational
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-subtle rounded-full text-brand-600 text-sm font-medium mb-6 border border-neutral-200">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Our Expertise
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-primary-900 mb-6">
              {expertise.title}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {expertise.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="bg-white p-8 rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 card-hover border border-neutral-100 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

                  <div className="bg-gradient-brand w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-elevated relative z-10">
                    {getIcon(service.icon)}
                  </div>

                  <h3 className="text-2xl font-bold text-primary-900 mb-4 font-display">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-neutral-700"
                      >
                        <div className="w-2 h-2 bg-gradient-brand rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-brand-600 font-semibold hover:text-brand-700 transition-colors group-hover:translate-x-2 transform duration-300 link-elegant"
                  >
                    {service.cta}
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

      {/* Technology Stack Section */}
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
              Technology Stack
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display mb-6">
              {technologies.title}
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              {technologies.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold mb-6 text-accent-400 font-display group-hover:text-accent-300 transition-colors">
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-neutral-300 text-sm bg-white/5 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-brand opacity-10 rounded-3xl"></div>
              <img
                src={about.image}
                alt="About CUDA Solutions"
                className="w-full rounded-2xl shadow-luxury relative z-10"
              />

              {/* Floating stats */}
              <div className="absolute -bottom-8 -right-8 glass-dark p-6 rounded-xl backdrop-blur-xl border border-white/20 z-20">
                <div className="text-2xl font-bold text-accent-400 mb-1">
                  ISO 27001
                </div>
                <div className="text-sm text-neutral-300">
                  Certified Security
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-brand-600 text-sm font-medium mb-6 border border-neutral-200 shadow-soft">
                <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
                About Us
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold font-display text-primary-900 mb-8">
                {about.title}
              </h2>
              <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
                {about.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-brand rounded-full mr-3"></div>
                    <span className="text-neutral-700 font-medium">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              <Link to={about.link} className="btn btn-primary">
                {about.cta}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="mb-12">
              <div className="w-20 h-20 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-elevated">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
            </div>

            <blockquote className="text-3xl lg:text-4xl font-light text-primary-800 mb-12 leading-relaxed italic font-display">
              "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center justify-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mr-4 shadow-card"
              />
              <div className="text-left">
                <div className="font-bold text-primary-900 font-display">
                  {testimonial.author}
                </div>
                <div className="text-neutral-600">{testimonial.position}</div>
                <div className="text-sm text-neutral-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-elegant text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Ready to Start?
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold font-display mb-8">
              {cta.title}
            </h2>
            <p className="text-xl text-neutral-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={cta.link}
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                {cta.cta}
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
                to="/portfolio"
                className="btn btn-secondary text-lg px-8 py-4"
              >
                {cta.secondaryCta}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
