import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import aboutData from "../data/about.json";

function About() {
  const { hero, story, mission, team, culture, certifications, cta } =
    aboutData;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-mesh-sophisticated opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/40 to-transparent"></div>

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
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-8 border border-white/20"
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6 border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
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
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>
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
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 text-center transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-5 rounded-full transform translate-x-12 -translate-y-12"></div>
                <div className="relative">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300">
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
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6 border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
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
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                <svg
                  className="w-8 h-8 text-blue-400"
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
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                <svg
                  className="w-8 h-8 text-blue-400"
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
                className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl shadow-lg border border-gray-700/30"
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mb-6 border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
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
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-full transform translate-x-16 -translate-y-16"></div>

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
                  <p className="text-blue-600 text-sm mb-3 font-medium">
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

      {/* Culture Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold font-display text-white mb-3">
              {culture.title}
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              {culture.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-secondary-900/60 to-primary-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glass hover:shadow-elevated border border-secondary-700/30 flex items-start transition-all duration-500"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-accent-500/30 to-accent-600/20 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                  <div className="w-4 h-4 bg-accent-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <div className="relative flex-1">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-accent-500/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-100 transition-colors duration-300">
                    {highlight.title}
                  </h4>
                  <p className="text-secondary-400 text-sm group-hover:text-secondary-300 transition-colors duration-300">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold font-display text-white mb-3">
              {certifications.title}
            </h2>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto">
              {certifications.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-gradient-to-br from-primary-800/60 to-secondary-900/40 backdrop-blur-sm p-6 rounded-xl shadow-glass hover:shadow-elevated border border-primary-600/30 flex items-center transition-all duration-500"
              >
                <div className="relative mr-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-500/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="relative flex-1">
                  <div className="absolute top-0 right-0 w-10 h-10 bg-gradient-to-bl from-accent-500/5 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-accent-100 transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-secondary-400 text-sm group-hover:text-secondary-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
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
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-8 border border-white/20">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
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
