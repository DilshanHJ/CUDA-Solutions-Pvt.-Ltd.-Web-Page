import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Code2,
  Eye,
  Heart,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import aboutData from "../data/about.json";

function About() {
  const { hero, story, mission, culture, cta } = aboutData;

  const valueIcons = [Lightbulb, ShieldCheck, Users, Code2];
  const cultureIcons = [Users, Layers3, BookOpen, Heart];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* About 4stax Labs */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-hero-pattern opacity-35"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-25"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-28 lg:py-36">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-7 border border-white/20"
              >
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
                {hero.subtitle}
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold font-display mb-7 leading-[1.05]">
                <span className="gradient-text">{hero.title}</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl mb-9">
                {hero.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn btn-primary text-base sm:text-lg px-8 py-4 shadow-dramatic"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/services"
                  className="btn btn-secondary text-base sm:text-lg px-8 py-4"
                >
                  Explore Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-accent-400/10 blur-3xl rounded-full"></div>
              <div className="relative glass rounded-[2rem] border border-white/15 p-6 sm:p-8 shadow-dramatic overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-400/15 to-transparent rounded-full translate-x-16 -translate-y-16"></div>

                <div className="flex items-end justify-between gap-6 pb-7 mb-7 border-b border-white/10 relative z-10">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-accent-200 mb-2">
                      Building since
                    </p>
                    <p className="text-5xl sm:text-6xl font-bold font-display text-white">
                      2020
                    </p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-accent-200" />
                  </div>
                </div>

                <div className="space-y-4 relative z-10">
                  {[
                    ["Sri Lankan", "software company"],
                    ["Workforce-first", "business systems"],
                    ["Enterprise-ready", "web, cloud & apps"],
                  ].map(([title, label]) => (
                    <div
                      key={title}
                      className="flex items-center justify-between gap-4 py-3 border-b border-white/10 last:border-0"
                    >
                      <span className="text-white font-semibold">{title}</span>
                      <span className="text-sm text-neutral-400 text-right">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-28 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-28"
            >
              <div className="badge badge-brand mb-6">
                <span className="w-2 h-2 bg-brand-500 rounded-full mr-2"></span>
                Our Story
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-5 leading-tight">
                {story.title}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8 max-w-xl">
                {story.subtitle}
              </p>

              <div className="relative rounded-[2rem] overflow-hidden shadow-luxury aspect-[4/3]">
                <img
                  src={story.image}
                  alt="4stax Labs software team collaborating in an office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/75 via-gray-900/10 to-transparent"></div>
                <div className="absolute left-6 right-6 bottom-6 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-accent-200 text-xs uppercase tracking-[0.22em] mb-1">
                      Founded
                    </p>
                    <p className="text-white text-4xl font-bold font-display">2020</p>
                  </div>
                  <div className="text-right text-sm text-white/80 max-w-[180px]">
                    Practical software, built one real business problem at a time.
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="pt-1">
              <div className="space-y-3">
                {story.content.map((paragraph, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group grid grid-cols-[64px_1fr] gap-5 sm:gap-7 py-7 sm:py-9 border-b border-neutral-200 last:border-b-0"
                  >
                    <div className="text-sm font-semibold tracking-[0.18em] text-brand-500 pt-1">
                      0{index + 1}
                    </div>
                    <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {paragraph}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 rounded-3xl border border-neutral-200 overflow-hidden bg-gradient-subtle"
          >
            {story.stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`p-7 sm:p-9 text-center ${
                  index % 2 === 0 ? "border-r border-neutral-200" : ""
                } ${index < 2 ? "border-b lg:border-b-0" : ""} ${
                  index === 1 ? "lg:border-r" : ""
                } ${index === 2 ? "lg:border-r border-neutral-200" : ""}`}
              >
                <p className="text-3xl sm:text-4xl font-bold font-display text-primary-600 mb-2">
                  {stat.number}
                </p>
                <p className="text-sm sm:text-base text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 lg:py-32 bg-gradient-elegant text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-15"></div>
        <div className="absolute -top-40 -right-32 w-96 h-96 rounded-full bg-accent-400/10 blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-14 lg:mb-16"
          >
            <p className="text-accent-200 text-sm uppercase tracking-[0.24em] font-semibold mb-4">
              {mission.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-white leading-tight">
              {mission.title}
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 border-y border-white/15">
            {[
              { data: mission.mission, Icon: Target, number: "01" },
              { data: mission.vision, Icon: Eye, number: "02" },
            ].map(({ data, Icon, number }, index) => (
              <motion.div
                key={data.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: index * 0.1 }}
                className={`group relative py-10 sm:py-14 lg:p-14 ${
                  index === 0 ? "lg:border-r lg:border-white/15" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-10">
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-accent-200" />
                  </div>
                  <span className="text-5xl sm:text-6xl font-display font-bold text-white/10">
                    {number}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-5">
                  {data.title}
                </h3>
                <p className="text-lg text-neutral-300 leading-relaxed max-w-xl">
                  {data.content}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 mt-12 border-t border-white/10">
            {mission.values.map((value, index) => {
              const Icon = valueIcons[index] || Lightbulb;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className="group pt-8 pr-6 lg:pr-8"
                >
                  <Icon className="w-5 h-5 text-accent-300 mb-5 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture & Work Environment */}
      <section id="culture" className="py-28 lg:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75 }}
              className="relative min-h-[520px] rounded-[2rem] overflow-hidden shadow-luxury group"
            >
              <img
                src={culture.image}
                alt="Collaborative software team work environment"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-900/35 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-accent-100 text-xs font-medium mb-5 backdrop-blur-sm">
                  Culture & Work Environment
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-4 leading-tight">
                  {culture.title}
                </h2>
                <p className="text-neutral-300 leading-relaxed">
                  {culture.description}
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5">
              {culture.highlights.map((highlight, index) => {
                const Icon = cultureIcons[index] || Users;
                return (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    whileHover={{ y: -6 }}
                    className="group rounded-3xl border border-neutral-200 bg-gradient-subtle p-7 sm:p-8 transition-shadow duration-300 hover:shadow-luxury relative overflow-hidden"
                  >
                    <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-brand-500/5 group-hover:bg-brand-500/10 transition-colors duration-300"></div>
                    <div className="w-11 h-11 rounded-2xl bg-white border border-neutral-200 shadow-sm flex items-center justify-center mb-8 relative z-10">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <p className="text-xs font-semibold text-brand-500 tracking-[0.18em] mb-3">
                      0{index + 1}
                    </p>
                    <h3 className="text-xl font-bold font-display text-gray-900 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {highlight.description}
                    </p>
                    <div className="mt-7 h-px bg-neutral-200 overflow-hidden">
                      <div className="h-full w-0 group-hover:w-full bg-gradient-primary transition-all duration-500"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 lg:py-32 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-25"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-7 border border-white/20">
              <span className="w-2 h-2 bg-accent-400 rounded-full mr-2"></span>
              Work With 4stax Labs
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display mb-7 leading-tight">
              {cta.title}
            </h2>
            <p className="text-lg sm:text-xl text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={cta.primaryLink}
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                {cta.primaryCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to={cta.secondaryLink}
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

export default About;
