import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutData from "../data/about.json";

function About() {
  const { hero, story, mission, team, culture, certifications, cta } =
    aboutData;

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
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20"
            >
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              About Us
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold font-display mb-8 leading-tight">
              <span className="gradient-text">{hero.title}</span>
            </h1>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              {hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                Get In Touch
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
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-subtle rounded-full text-brand-600 text-sm font-medium mb-6 border border-gray-200">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Our Story
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              {story.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {story.subtitle}
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {story.content.map((paragraph, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 card-hover border border-gray-100 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  {paragraph}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="grid md:grid-cols-4 gap-6 mt-10">
            {story.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white p-6 rounded-xl shadow-card hover:shadow-luxury card-hover border border-gray-100 text-center transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-brand opacity-5 rounded-full transform translate-x-12 -translate-y-12"></div>
                <div className="relative">
                  <h4 className="text-3xl font-bold text-brand-600 mb-2 group-hover:text-brand-700 group-hover:scale-110 transition-all duration-300">
                    {stat.number}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-32 bg-gradient-elegant text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-accent-200 text-sm font-medium mb-6 border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Mission & Vision
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-white mb-6">
              {mission.title}
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 card-hover h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500/30 to-accent-600/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                <svg
                  className="w-8 h-8 text-accent-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4 relative z-10">
                {mission.mission.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {mission.mission.content}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 card-hover h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500/30 to-accent-600/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                <svg
                  className="w-8 h-8 text-accent-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4 relative z-10">
                {mission.vision.title}
              </h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                {mission.vision.content}
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {mission.values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-5 rounded-xl shadow-lg border border-white/20"
              >
                <h4 className="text-lg font-bold text-white mb-1">
                  {value.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-subtle rounded-full text-brand-600 text-sm font-medium mb-6 border border-gray-200">
              <div className="w-2 h-2 bg-brand-500 rounded-full mr-2 animate-pulse"></div>
              Our Team
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-gray-900 mb-6">
              {team.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {team.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-card hover:shadow-luxury transition-all duration-500 card-hover border border-gray-100 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-brand opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

                <div className="relative overflow-hidden h-56">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                <div className="p-6 relative z-10">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-600 text-sm mb-3 font-medium">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Culture Section */}
      <section className="py-32 bg-gradient-luxury relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-15"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-accent-200 text-sm font-medium mb-8 border border-white/20">
              <div className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></div>
              Our Culture & Work Environment
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-white mb-6">
              {culture.title}
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              {culture.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 card-hover h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-125 transition-transform duration-700"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-brand-glow relative z-10">
                    <div className="w-8 h-8 bg-white rounded-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full animate-pulse-glow"></div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent-100 transition-colors duration-300 relative z-10">
                    {highlight.title}
                  </h4>
                  <p className="text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-300 relative z-10">
                    {highlight.description}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Certifications Section */}
      <section className="py-32 bg-gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-25"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 glass rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              Certifications & Partnerships
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-display text-white mb-6">
              {certifications.title}
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {certifications.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 card-hover h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-primary-500/10 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-125 transition-transform duration-700"></div>
                  
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-luxury relative z-10">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-accent-100 transition-colors duration-300 relative z-10 text-center">
                    {item.name}
                  </h4>
                  <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-300 relative z-10 text-center">
                    {item.description}
                  </p>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-primary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-hero text-white relative overflow-hidden">
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
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              {cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={cta.primaryLink}
                className="btn btn-primary text-lg px-8 py-4 shadow-dramatic"
              >
                {cta.primaryCta}
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