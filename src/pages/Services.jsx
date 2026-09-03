import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Layers3,
  Monitor,
  Smartphone,
} from "lucide-react";
import servicesData from "../data/services.json";

function Services() {
  const { hero, softwareDevelopment, cta } = servicesData;

  const serviceIcons = {
    desktop: Monitor,
    cloud: Cloud,
    mobile: Smartphone,
  };

  const handlePointerMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Our Services */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-hero-pattern opacity-35"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/55 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-7 border border-white/20"
            >
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
              Our Services
            </motion.div>

            <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.2em] text-accent-200 mb-5">
              {hero.subtitle}
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-7 leading-[1.05]">
              <span className="gradient-text">{hero.title}</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 mb-10 leading-relaxed max-w-4xl mx-auto">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link
                to="/contact"
                className="btn btn-primary text-base sm:text-lg px-8 py-4 shadow-dramatic"
              >
                Discuss Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="#software-development"
                className="btn btn-secondary text-base sm:text-lg px-8 py-4"
              >
                See What We Build
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.35 }}
              className="grid sm:grid-cols-3 rounded-3xl glass border border-white/15 overflow-hidden max-w-4xl mx-auto text-left"
            >
              {hero.capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className={`flex items-center gap-3 px-5 py-5 sm:px-6 ${
                    index < hero.capabilities.length - 1
                      ? "border-b sm:border-b-0 sm:border-r border-white/10"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent-200" />
                  </div>
                  <span className="text-sm font-semibold text-white/90">
                    {capability}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Software Development */}
      <section
        id="software-development"
        className="py-28 lg:py-32 bg-gradient-elegant text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-pattern opacity-15"></div>
        <div className="absolute -left-32 top-1/3 w-96 h-96 bg-accent-400/10 blur-3xl rounded-full"></div>
        <div className="absolute -right-40 bottom-0 w-96 h-96 bg-brand-500/15 blur-3xl rounded-full"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-end mb-16 lg:mb-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-6 border border-white/15">
                <Code2 className="w-4 h-4 mr-2" />
                What We Build
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white mb-6 leading-tight">
                {softwareDevelopment.title}
              </h2>
              <p className="text-lg sm:text-xl text-neutral-200 leading-relaxed max-w-2xl">
                {softwareDevelopment.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="border-l border-white/15 pl-6 sm:pl-8 space-y-5"
            >
              {softwareDevelopment.details.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base sm:text-lg text-neutral-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-7">
            {softwareDevelopment.offerings.map((service, index) => {
              const Icon = serviceIcons[service.icon] || Layers3;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                  onMouseMove={handlePointerMove}
                  className="service-interactive-card group relative rounded-3xl border border-white/15 bg-white/[0.055] p-7 sm:p-8 overflow-hidden"
                >
                  <div className="service-card-pointer-glow"></div>
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-300/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5 mb-9">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-brand-glow group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-white" strokeWidth={1.7} />
                      </div>
                      <span className="text-5xl font-bold font-display text-white/10 group-hover:text-white/15 transition-colors duration-300">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-white mb-4 leading-tight group-hover:text-accent-100 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-200 leading-relaxed mb-7">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center px-3 py-2 rounded-xl border border-white/10 bg-white/[0.06] text-sm font-medium text-neutral-200 group-hover:border-white/20 group-hover:bg-white/[0.09] transition-colors duration-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-300 mr-2"></span>
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 pt-6 border-t border-white/10 flex items-center justify-between text-sm">
                      <span className="text-neutral-400">Built around your workflow</span>
                      <ArrowRight className="w-5 h-5 text-accent-200 -translate-x-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 lg:mt-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.04] px-7 py-7 sm:px-9"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-accent-200 font-semibold mb-2">
                Technology, chosen with purpose
              </p>
              <p className="text-neutral-300 max-w-2xl leading-relaxed">
                We select the stack around product requirements, security, integrations,
                maintainability, and the environment your team needs to operate in.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 lg:justify-end max-w-xl">
              {softwareDevelopment.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-sm text-white/90"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto rounded-[2rem] bg-gradient-hero text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-dramatic"
          >
            <div className="absolute inset-0 bg-hero-pattern opacity-25"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-accent-400/10 blur-2xl"></div>

            <div className="relative z-10 grid lg:grid-cols-[1fr_auto] gap-10 items-end">
              <div>
                <p className="text-accent-200 text-sm uppercase tracking-[0.22em] font-semibold mb-4">
                  A better system starts with the right problem
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold font-display mb-6 leading-tight max-w-3xl">
                  {cta.title}
                </h2>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
                  {cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[220px]">
                <Link
                  to={cta.link}
                  className="btn btn-primary text-base px-7 py-4 shadow-dramatic"
                >
                  {cta.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to={cta.secondaryLink}
                  className="btn btn-secondary text-base px-7 py-4"
                >
                  {cta.secondaryCta}
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
